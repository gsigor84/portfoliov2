import React, { useState, useEffect } from 'react';
import '../layer1.css';
import logo from '../photos/igorv1.webp';
import AddIcon from '@mui/icons-material/Add';

function Test2() {

return(
  <div className='background'>
    <div className='grid-layer1'>

<div className='cell1'/>
<div className='cell2'/>
<div className='cell3'/>
<div className='cell4'/> 
</div>
<div className='layer1-text'>
<div className='row2-1'>
  Igor Silva
  <p className='sub-title-bio'>
    UX+UI
    Design
    FrontEnd
    BackEnd
    Mobile
  </p>

</div>

<div className='row2-span-photo'>
  
    <img src={logo} alt="Logo"className='photo-bio' />
  

</div>

<div className='row2-4'>
<p>Hello! My name is Igor and I am a web developer. 
  I specialize in creating custom websites that are responsive, user-friendly, and optimized for a range of devices.
   I have a passion for coding and creating unique solutions to complex problems. 
   I am experienced in HTML, CSS, JavaScript, and React, and I have built websites for many clients, from small businesses to large corporations. My goal is to create beautiful, functional websites that will engage users and meet their needs. 
   
</p>
{/*
<p className='know-bio'>READ MORE <AddIcon sx={{ color: '#F24452',fontSize: '0.8vw' }} /> </p>
*/}

</div>

</div>


   
  </div>
)
}
  export default Test2;