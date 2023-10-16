import React from 'react'
import heroImg01 from "../images/banner-18.png"
import heroImg2 from "../images/hero-img02.png"
import heroImg03 from "../images/hero-img03.png"
import icon01 from "../images/hypertension.jpg"
import icon03 from "../images/icon03.png"
import icon02 from "../images/diabetes.jpg"
import feature from '../images/feature.png'
import avatar from '../images/avatar-icon.png'
import videoIcon from '../images/video-icon.png'
import {  Link } from "react-router-dom"
import {BsArrowRight} from "react-icons/bs"
import About from '../../components/about/About'
import DoctorList from '../../components/doctors/DoctorList'
const Home = () => {
  return (
    <>
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
       <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

 
 <div className='lg:w-[570px]'>
   <h1 className='text-[35px] loading-[46px] text-headingColor font-[800] md:text-[60px]
   md:loading-[70px]'>
 Diabetes/Hypertension Online Clinic </h1>
     <p className='text_para'>  
     Diabetes and hypertension are metabolic disorders that lead to high glucose levels 
     and elevated blood pressure, respectively. This clinic specializes in managing patients with these conditions, 
     offering medical and lifestyle treatments, along with regular reviews.
     </p>
     <button className='btn text-white font-[600]'>
      Book appointmet
     </button>
     <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5'>
  <div>
    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
    text-headingColor'> 20 +</h2>
    <span className='w-[100px] h-2 bg-primaryColor rounded-full block mt-[-14px]'>   
    </span>
    <p className='text_para'> Years of EXperience</p>
  </div>
  <div>
    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
    text-headingColor'> 20 +</h2>
    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>   
    </span>
    <p className='text_para'>Clinic Location</p>
  </div>

  <div>
    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
    text-headingColor'> 100%</h2>
    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>   
    </span>
    <p className='text_para'> Patients satsification</p>
  </div>
  
 </div>
 
 </div>
 <div className='flex gap-[30px] justify-center'>
  <div>
    <img src={heroImg01} alt='' className='w-full'/>

  </div>
  <div className='mt-[30px]'> 
    <img src={heroImg2} alt='' className='w-full mb-[30px]'/>
    <img src ={heroImg03} alt=''className='w-full'/>

  </div>
</div>
 
 </div>


      </div>
 
    </section>

    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'> 
        <h2 className='heading text-center'>  
        The Kenya’s best diabetes and hypertension  clinic in your pocket
        </h2>
        <p className='text_para text-center'>
        Diabetes and Hypertension care made easy and manageable
       </p>
        </div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-
  [55px]'>
    <div className='py-[30px] px-5'>
      <div className='flex items-center justify-center'>
        <img src={icon01}alt='' className='w-[251px] h-[148px]'/>
      </div>
      <div className='mt-[30px]'>
        <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
        Hypertension
        </h2>
        <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
        Hypertension, commonly referred to as high blood pressure, often remains asymptomatic but can lead to severe complications. 
        When left unmanaged, it poses a significant risk to internal organs and the cardiovascular system,
         elevating the chances of heart disease, stroke, and mortality.
        </p>
<Link to='/doctors' className= "w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor"> 
<BsArrowRight className='group-hover:text-white w-6 h-5'/>
</Link>
      </div>
    </div>
    <div className='py-[30px] px-5'>
      <div className='flex items-center justify-center'>
        <img src={icon02}alt='' className='w-[251px] h-[148px]'/>
      </div>
      <div className='mt-[30px]'>
        <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
          Diabetes
        </h2>
        <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
        Diabetes mellitus is a widely recognized condition, both inherited and acquired,
         resulting from insufficient insulin production. This chronic ailment often manifests as elevated blood sugar levels,
         impacting various bodily systems, including nerves and blood vessels.
        </p>
<Link to='/doctors' className= "w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor"> 
<BsArrowRight className='group-hover:text-white w-6 h-5'/>
</Link>
      </div>
    </div>
    <div className='py-[30px] px-5'>
      <div className='flex items-center justify-center'>
        <img src={icon03}alt=''/>
      </div>
      <div className='mt-[30px]'>
        <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
          Book appointmet
        </h2>
        <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
        We will identify the problem through different assessments, evaluations, etc, and 
        provide personalized care created for each person based on the
         cause of blood pressure  and diabetes issues they are facing.
        </p>
<Link to='/doctors' className= "w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor"> 
<BsArrowRight className='group-hover:text-white w-6 h-5'/>
</Link>
      </div>
    </div>
  </div>
      </div>
    </section>
    <About/>

    <section>
      <div className='container'>
<div className='xl:w-[470px] mx-auto'>
  <h2 className='heading text-center'>What we treat </h2>
  <p className='text_para text-center'>
  we offer comprehensive patient care with cutting-edge treatments and 
  the most experienced specialists to meet your needs.
  </p>
  <p className='text_para text-center'>
  We treat a variety of acute and chronic conditions and provide expert medical advice and guidance for our patients.
  </p>
  <button className='btn text-white font-[700]'> Learn More</button>
</div>

      </div>
    </section>

    <section>
      <div className='container'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>
          <div className='xl:w-[670px] '>
            <h2 className='heading'>
              Get Virtual treatment <br/> anytime.
            </h2>
            <ul className='pl-4'>
              <li className='text_para'>
                1. Schedule the appointmet directly
              </li>
              <li className='text_para'>2. Search for your Physician here, and contact their office
               </li>
               <li className='text_para'>
3. Share your progress to your Physician for medical advice
               </li>
               <li className='text_para'>
              4.Share your blood pressure readings and blood sugar readings for interpretation
               </li>
            </ul>
            <Link to='/'>
              <button className='btn text-white font-[700]'> Read More</button>
            </Link>
          </div>
<div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
  <img src={feature} alt='' className='w-3/4'/>
  <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5
  z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
<div className='flex items-center justify-between'>
  <div className='flex items-center gap-[6px] lg:gap-3 '>
    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
    font-[600]'>
      Available
    </p>
    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
    font-[600]'>
      24/7
    </p>
  </div>
  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex item-center justify-center
  bg-yellowColor rounded py-1 px-[6px] lg:px-[9px] '>
    <img src={videoIcon} alt=''/>
  </span>
</div>

<div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] 
text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full' >

Consultation
</div>

<div className='flex items-center gap-[8px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
  <img src={avatar} alt=''/>
<h4 className='text-[10px] leading-3 lg:text-[18px] lg:leading-[22px] font-[700] text-headingColor'>
  Dr. Amani Kapombe
</h4>
</div>
  </div>

</div>
        </div>
      </div>
    </section>
    <section>
     <div className='container'>
     <div className='xl:w-[470px] mx-auto'>
  <h2 className='heading text-center'>Our Great Physicians</h2>
  <p className='text_para text-center'>
  Consult an Online Doctor
For Hypertension && Diabetes Treatments.
  </p>
</div>
<DoctorList/>
     </div>
    </section>
    
    <section>
      <div className='container'>
      <div className='xl:w-[470px] mx-auto'>
  <h2 className='heading text-center'>what our patients say</h2>
  <p className='text_para text-center'>
  Consult an Online Doctor
For Hypertension && Diabetes Treatments.
  </p>
</div>
      </div>
    </section>
    </>
  )
}

export default Home