import React from 'react'
import "./MySelf.css"
import profilepic from "../../assets/profilepic.webp"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useNavigate } from 'react-router-dom';



const MySelf = () => {

  
  return (
    <div id="home" className='myself'>
       <img src={profilepic} alt="" /> 
       <h1><span>we are think academies</span> we are develop software</h1>
<p>We are Think Academies, and we specialize in software development. Our mission is to create innovative, user-friendly solutions that empower learners, educators, and institutions in the digital age. </p>
<div className="action">
    <button className='connect'><AnchorLink className='anchor-link' offset={50} href="#contact">connect with us</AnchorLink></button>
    <button className='resume' >our profile</button>
</div>
    </div>
  )
}

export default MySelf