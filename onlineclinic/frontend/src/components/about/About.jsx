import React from 'react'
import {Link} from 'react-router-dom'
import aboutimg from "../../assets/images/about.png"
import aboutcard from "../../assets/images/card.jpeg"
const About = () => {
  return (
  <section>
    <div className='container'>
        <div className='flex  justify-between gap-[50px] lg:gap-[130px]
        xl-gap-0 flex-col lg:flex-row'>

            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutimg} alt=''/>
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]
                 '>
                    <img src={aboutcard} alt='' className='rounded-full'/>
                </div>
            </div>

<div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>

  <h2 className='heading'>Delighted to be among the top performers in the country.
  </h2>
  <p className='text_para'>If you’re looking for a place of quality, affordable and all rounded service, y
  ou’ve come to the right place.</p>

  <p className='text_para mt-[30px]'>At Kilifi County Referral Hospital
  , we uphold the value of compassionate care. With more 
  than two decades of clinical expertise and a track record of successfully treating over 500,000 patients, we guarantee a warm reception and high-quality 
  healthcare to all who visit our facility in Kilifi Town, Kenya.
  </p>
  <Link to="/">
<button className='btn text-white font-[700]'> Read More</button>
  </Link>
</div>

        </div>

    </div>
  </section>
  )
}

export default About