import React from 'react'
import {RxGithubLogo, RxInstagramLogo} from "react-icons/rx"
import {FaLinkedinIn, FaPinterest} from "react-icons/fa"
import {FaPinterestP} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    
 
<div className='footer-div'>
  <div className="footer">
    <div className="contain">
    <div className="col">
      <h2>Job seeker</h2>
      <ul>
        <li>Create a resume</li>
        <li>Resume example</li>
        <li>Resume templates</li>
        <li>Coever latter template</li>
        <li>Job search</li>
      </ul>
    </div>
    <div className="col">
      <h2>career Resources</h2>
      <ul>
        <li>Resume help</li>
        <li>Job interview</li>
        <li>Career</li>
        <li>Coever letter</li>
        <li>Blog</li>
      </ul>
    </div>
    <div className="col">
      <h2>Accounts</h2>
      <ul>
        <li>About</li>
        <li>Mission</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div className="col">
      <h2>Our company</h2>
      <ul>
        <li>About us</li>
        <li>Pricing</li>
        <li>Product update </li>
        <li>Sponsership program</li>
        <li>Media kit</li>
        <li>Affialates</li>
      </ul>
    </div>
    <div className="col">
      <h2>Support</h2>
      <ul>
        <li>Contact us</li>
        <li>Privacy</li>
        <li>Terms Services</li>
      </ul>
    </div>
    <div className="col social">
      <h2>Social Media
      
      </h2>
      <ul>
        <li >{<FaFacebookF className='socials'/>}</li>
        <li >{<FaWhatsapp className='socials'/>}</li>
        <li >{<FaLinkedinIn className='socials'/>}</li>
        <li >{<FaPinterest className='socials'/>}</li>
        <li >{<RxGithubLogo className='socials'/>}</li>


      </ul>
    </div>
  <div className="clearfix"></div>
  </div>
  </div>

  </div>
  )
}

export default Footer