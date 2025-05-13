import React from 'react'
import "./Services.css"
import theme_pattern from "../../assets/main.svg"
import Services_Data from '../../assets/Services_data'
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
   
  return (
    <div  id="services"className='services'>
        <div className="services-title">
            <h1>my services</h1>
            {/* <img src={theme_pattern} alt="image" /> */}
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>read more</p>
                       <FaArrowRight />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services