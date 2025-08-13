import img from "../../assets/images/dh-l.jpg"
import taskwaveImg from "../assets/images/screenshots/taskwave.png"
import portfolio from "../assets/images/screenshots/portfolio.png"
import ipMapper from "../assets/images/screenshots/ipMapper.png"
import climatic from "../assets/images/screenshots/climaticd.png"
import insight from "../assets/images/screenshots/insight.png"
const projects = [
  {
    "id": 1,
    "title": "ADmyBRAND Marketing Insight",
    "description": "ADmyBRAND Insights is an analytics dashboard for digital marketing agency. Built with Next.js, Tailwind CSS, and shadcn/ui, it offers a modern, responsive UI with KPI cards, interactive charts, sortable/filterable tables,and export to PDF/CSV, using mock data generated with FakerJS.",    
    "techStack": ["Next.js 14+ (App Router)", "Tailwind CSS", "shadcn/ui", "Recharts", "@faker-js/faker", "jsPDF"],
    "image": insight,
    "demoLink": "https://admybrand-marketing-insight.netlify.app/",
    "codeLink": "https://github.com/DagiH22/adMyBrand-marketing-insights"
  },
  {
    "id": 2,
    "title": "Climatic",
    "description": "Climatic is a responsive weather app that uses geolocation or city search to display current conditions, a 24-hour forecast (in 3-hour intervals), and a 5-day forecast with a temperature graph. It features custom SVG icons, light/dark mode, Celsius/Fahrenheit toggles with local storage.",
    "techStack": [
      "React","JavaScript (ES6+)","HTML5","CSS3","OpenWeather API"],
    "image": climatic,
    "demoLink": "https://climatic-dagi.vercel.app/",
    "codeLink": "https://github.com/DagiH22/Climatic"
  },
    {
      "id": 3,
      "title": "IPMapper",
      "description": "IPMapper is a React app that shows the location of any IP or domain on a map. It auto-detects yours on load, works on all devices, and uses IPify for geolocation, Google DNS for domain resolution, Leaflet, and CartoDB tiles.",
      "techStack": [
        "React","JavaScript (ES6+)","HTML5","CSS3","LeafletJS","CartoDB Tiles","IPify Geolocation API"],
      "image": ipMapper,
      "demoLink": "https://ipmapper.netlify.app/",
      "codeLink": "https://github.com/DagiH22/IPMapper"
    },
    {
      "id": 4,
      "title": "TaskWave",
      "description": "A minimal task management web app with light/dark mode toggle, task filtering, and local storage.",
      "techStack": ["HTML", "CSS","JavaScript"],
      "image": taskwaveImg,
      "demoLink": "https://dagi-taskwave.netlify.app/",
      "codeLink": "https://github.com/DagiH22/Task-Wave"
    },
    {
      "id": 5,
      "title": "Portfolio",
      "description": "This very portfolio — a sleek and minimal site built with React and CSS to showcase my work and interests.",
      "techStack": ["React", "CSS"],
      "image": portfolio,
      "demoLink": "https://dagi-portfolio.netlify.app/",
      "codeLink": "https://github.com/DagiH22/Portfolio"
    },
  ]
  




  export default projects