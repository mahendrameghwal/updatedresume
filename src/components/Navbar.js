import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {CgMenuLeftAlt, CgClose} from 'react-icons/cg';

const Navbar = () => {

  const [mobile, setMobile] = useState(false)

  return (
    <nav className='animate__animated animate__fadeInDown'>
      <div className="container__fluid ">
      <div className="row">
        <div className="col logo">
          <NavLink to={"/"}><h2>Resume<span>BuildIn.com</span></h2></NavLink>
        </div>
        <div className="col menu__list">
          <ul className={mobile ? 'show' : 'hide'} onClick={()=>setMobile(false)}>
            <li><NavLink to={"/resume"}>Resume</NavLink></li>
            <li><NavLink to={"/coverletter"}>Cover Letter</NavLink></li>
            <li><NavLink to={"/guid"}>Resume Guids</NavLink></li>
            <li><NavLink to={"/blog"}>Blog</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="col button">
          <button className='main_white_button'>Login</button>
          <button className='main_red_button'>Register</button>
        </div>
        <div className="menu__trigger active">
          <span onClick={()=>setMobile(!mobile)}>{mobile ? <CgClose/> : <CgMenuLeftAlt/>}</span>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar