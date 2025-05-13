import React from 'react'
import "./About.css"
import profilepic1 from "../../assets/aboutimage.png"
import aboutpic from "../../assets/contactuspic.jpeg"
const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1><span>about us</span></h1>
            <img src={profilepic1} alt="image" />
           
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img id='titlepic' src={aboutpic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>We offer a range of skills in software development, backed by hands-on experience in successfully completing various projects.</p>
                    <p>Our expertise covers both front-end and back-end development, ensuring high-quality, reliable solutions.</p>
                </div>
               <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React js ,Bootstrap</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Complete Mern Stack</p><hr style={{width:"70%"}}/></div>
                </div> 
            </div>
        </div>
        <div className="about-achievemants">
            <div className="about-achievements">
                <h1>10+</h1>
                <p>years of experience</p>
            </div>
            <hr />
            <div className="about-achievements">
                <h1>90+</h1>
                <p>project completed</p>
            </div>
            <hr />
            <div className="about-achievements">
                <h1>15+</h1>
                <p>happy clients</p>
            </div>
        </div>
    </div>
  )
}

export default About