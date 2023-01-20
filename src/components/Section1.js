import React from 'react'
import "../styles/comp-scss/section1.scss"
import sectionimg from "../assets/resume.png"
import {FcOk} from "react-icons/fc"

const Section1 = () => {
  return (
    <>
    <div  className='section-row'>
  
    <div className='col1'>
    <li><FcOk className='ok'/> Don't sabotage your job search before it has even begun. Choose from our ATS-friendly, hand-crafted resume templates</li>
    <li> <FcOk className='ok'/>Make the resume template truly your own. Customize the layout based on your experience level.</li>
    <li> <FcOk className='ok'/>Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.</li>
    <li> <FcOk className='ok'/> it's free! We don't hit you with a paywall once you've completed your resume in the Basic Account.     </li>
    
    
    </div>
    <div className='col2'>
<div className='img-div'>
<img id='img' src={sectionimg} />
</div>
    
    
    </div>
    
    
    
    </div>
    </>
  )
}

export default Section1