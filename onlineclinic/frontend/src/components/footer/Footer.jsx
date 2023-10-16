import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../assets/images/logodh.jpeg"
import {AiFillLinkedin ,AiFillYoutube,AiFillInstagram,AiFillFacebook} from 'react-icons/ai'
const Footer = () => {

  const socialLinks =[
    {
      path:"facebook",
      icon:< AiFillFacebook className='group-hover:text-white w-4 h-5'/>,
    },
    {
      path:"youtube",
      icon:< AiFillYoutube className='group-hover:text-white w-4 h-5'/>,
    },
    {
      path:"instagram",
      icon:< AiFillInstagram className='group-hover:text-white w-4 h-5'/>,
    },
    {
      path:"linkedin",
      icon:< AiFillLinkedin className='group-hover:text-white w-4 h-5'/>,
    },
  ];
  const quickLinks01 = [
    {
      path:"/home",
      display:"Home"
    },
    {
      path:"/",
      display:"what we treat"
    },
    {
      path:"/",
      display:"Blog"
    },
    
    
  ];
  const quickLinks02 = [
    {
      path:"/",
      display:"Find Doctor"
    },
    {
      path:"/",
      display:"Request an Appointment"
    },
    {
      path:"/",
      display:"Find Location"
    },
    {
      path:"/",
      display:"Get an Opinion"
    },
  ];
  const quickLinks03 =[
    {
      path:"/",
      display:"Donate"
    },
    {
      path:"/",
      display:"Contat us"
    }
  ]


  const year= new Date().getFullYear()
  return (
    <footer className='pb-15 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[10px]'>
          <div>
<img src={logo} alt='' className='w-[110px] h-[110px] rounded-full cursor-pointer'/>
<p className='text-[16px] leading-7 font-[400] text-textColor mt-4'> Copyright © {year} developed by Martin Kavindu all 
rights reserved.  </p>
<div className='flex items-center gap-3 mt-4 '>
  {
   socialLinks.map((link,index)=>  <Link to={link.path}key={index} className='w-9 h-9 border border-solid border-[#18141E]
   rounded-full flex items-center justify-center group hover:bg-primaryColor
  hover:border-none '>
    {link.icon}
   </Link>) 
  }
</div>
          </div>
<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
Quick Links
  </h2>
  <ul>
    {
      quickLinks01.map((item,index)=> <li key={index} className='mb-4'><Link to={item.path} className='text-[17px] leading-7 font-[400] text-textColor'>
        {item.display}
      </Link></li>)
    }
  </ul>
</div>
<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
I want to
  </h2>
  <ul>
    {
      quickLinks02.map((item,index)=> <li key={index} className='mb-4'><Link to={item.path} className='text-[17px] leading-7 font-[400] text-textColor'>
        {item.display}
      </Link></li>)
    }
  </ul>
</div>
<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
Support
  </h2>
  <ul>
    {
      quickLinks03.map((item,index)=> <li key={index} className='mb-4'><Link to={item.path} className='text-[17px] leading-7 font-[400] text-textColor'>
        {item.display}
      </Link></li>)
    }
  </ul>
</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer