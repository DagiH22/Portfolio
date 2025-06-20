import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div id='home'>
        <div className='homeContainer'>
            <p className='greeting'>Hey, Dagmawi here. Web developer. Network Engineer</p>
            <p className='shortDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum praesentium incidunt alias voluptate inventore voluptatem. Fuga, natus ad! Amet, consectetur dolor sunt voluptas iure numquam alias magni hic totam.</p>
        </div>
        <button className='downlaodCv'>Download CV</button>
    </div>
  )
}

export default Home