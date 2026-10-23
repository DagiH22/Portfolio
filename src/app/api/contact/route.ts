import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// In-memory rate limiting map for basic protection.
// Note: In serverless deployments (e.g., Vercel), serverless functions are ephemeral.
// For production distributed rate limiting across serverless regions, Upstash Redis is recommended.
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(100, "Email cannot exceed 100 characters"),
  subject: z
    .string()
    .trim()
    .max(150, "Subject cannot exceed 150 characters")
    .optional()
    .default(""),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
  // Honeypot field (bots fill this in; human browsers leave it empty)
  _gotcha: z.string().optional().default(""),
  // Client load timestamp for minimum time-to-submit spam detection
  _loadTime: z.number().optional(),
});

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification for rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    if (ip !== "unknown-ip" && isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: "Too many messages sent from this IP. Please wait 15 minutes before trying again or email me directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse and validate payload
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0]?.toString() || "form";
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }
      return NextResponse.json(
        { error: "Validation failed", fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message, _gotcha, _loadTime } = result.data;

    // 3. Spam protection: Honeypot check
    if (_gotcha && _gotcha.trim().length > 0) {
      // Silently accept to avoid teaching bots
      return NextResponse.json({ success: true, message: "Message sent" });
    }

    // 4. Spam protection: Minimum time-to-submit check (minimum 2.5s)
    if (_loadTime && typeof _loadTime === "number") {
      const timeElapsed = Date.now() - _loadTime;
      if (timeElapsed < 2500) {
        return NextResponse.json(
          { error: "Submission was too fast. Please take your time." },
          { status: 400 }
        );
      }
    }

    // 5. Check Resend configuration
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "dagmawiheb@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Dagmawi <onboarding@resend.dev>";

    if (!apiKey) {
      console.warn(
        "RESEND_API_KEY is not defined in environment variables. Message recorded for local development:",
        { name, email, subject, message }
      );
      return NextResponse.json(
        {
          error:
            "Email service is currently offline. Please email dagmawiheb@gmail.com directly.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const emailSubject = subject?.trim()
      ? `Portfolio: ${subject}`
      : `New Portfolio Message from ${name}`;

    const textContent = `
Name: ${name}
Email: ${email}
Subject: ${subject || "(No subject provided)"}
Date: ${new Date().toISOString()}

Message:
${message}
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #e2e8f0; margin: 0; padding: 24px; }
    .container { max-width: 580px; margin: 0 auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #4f46e5, #06b6d4); padding: 24px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.025em; }
    .header p { margin: 4px 0 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; font-weight: 600; margin-bottom: 4px; }
    .value { font-size: 14px; color: #f8fafc; font-weight: 500; }
    .message-box { background-color: #030712; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; margin-top: 16px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
    .footer { padding: 16px 24px; background-color: #090d16; border-top: 1px solid #1f2937; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Message via Portfolio</h1>
      <p>Direct visitor submission from dagih22.github.io</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Sender Name</div>
        <div class="value">${name.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>
      <div class="field">
        <div class="label">Sender Email</div>
        <div class="value"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></div>
      </div>
      ${
        subject
          ? `<div class="field">
              <div class="label">Subject</div>
              <div class="value">${subject.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
            </div>`
          : ""
      }
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>
    </div>
    <div class="footer">
      Hit Reply in your email client to respond directly to ${email}.
    </div>
  </div>
</body>
</html>
    `.trim();

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return NextResponse.json(
        {
          error:
            "Failed to send email. Please reach out to dagmawiheb@gmail.com directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: resendData?.id,
    });
  } catch (err: unknown) {
    console.error("Contact API unhandled error:", err);
    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred. Please contact dagmawiheb@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
