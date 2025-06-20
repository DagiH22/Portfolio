import React from 'react'
import '../styles/About.css'
function About() {
  return (
    <div id='about' className='aboutContainer'>
        <h2>About Me</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita rerum quibusdam quos veniam totam? Nisi sit atque, recusandae itaque, fugiat dolor distinctio, consequatur veritatis non eius perferendis delectus blanditiis. Cum.
        Totam illo ipsam natus repellat, eius, placeat similique accusantium possimus omnis quisquam iure odit! Libero nemo eligendi perferendis aspernatur fugiat facere explicabo nam molestias laborum totam asperiores, ipsam error est!</p>
        <div className='skills'>
            <h3>Skills</h3>
            <div className='webSkills'>
                <h4>Web Develeopment</h4>
                <span>HTML 5 </span>
                <span>css </span>
                <span>javascript </span>
                <span>react</span>
            </div>
            {/* <div className='networking'>
                <h4>Networking Skills</h4>
                <span>TCP/IP </span>
                <span>Subnetting </span>
                <span> IP Addressing </span>
                <span>Network CLI</span>
            </div> */}
        </div>
    </div>
  )
}

export default About