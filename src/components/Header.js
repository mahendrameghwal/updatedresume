import React from 'react'
import { useNavigate } from 'react-router-dom'
import Resume from "./Resume";
import banner1 from "../assets/banner1.png"

const Header = () => {
    const navigate = useNavigate()
  return (
    <div className="header">
        <div className="row">
            <div className="col section_heading animate__animated animate__fadeInLeft">
                <p>FREE RESUME MAKER AND CV BUILDER ONLINE</p>
                <h2>Create <em>Professional</em> <span>Resume</span> In Just Minutes</h2>
                <small>
                    Create your resume easily with our free builder and professional
                    templates and Build your brand-new resume in as little as 5 minutes
                </small>
                <h5>Try For Free</h5>
                <button className='main_red_button' onClick={()=>navigate('/resume')}>Create Resume</button>
            </div>

            <div className="col animate__animated animate__fadeInRight">
                <img src={banner1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header