import React, { useState, useEffect } from 'react';
import '../layer2.css';

function Layer2() {



  return(
<div className="layer2">
  <div className="l2-row-photo">
 <div className='logo'/>
  </div>
  <div className="l2-row1-2-span">
    <p className='title-layer2'>
     Introducing Our New News Website! 
    </p>
  

We are excited to announce the launch of our new news website, bringing you the latest updates and information from around the world. Our team of experienced journalists will be working around the clock to bring you the most accurate and timely news coverage.

Our website will feature a variety of news categories, including national and international news, politics, business, technology, entertainment, and sports. We will also have a dedicated section for opinion pieces and analysis, providing in-depth perspectives on the latest events.

In addition to our website, you can also follow us on social media for real-time updates and breaking news alerts. We will be actively engaging with our audience and encourage you to share your thoughts and opinions on the stories we cover.
<p className='layer2-more'>
<a  href="https://zoharv6.vercel.app" className='layer2-link'>Go to the page!</a>
</p>

  </div>

  <div className="l2-row-bottom">
  <div className='layer2-divider'/>
  
  </div>
  
</div>
  )
}

export default Layer2;