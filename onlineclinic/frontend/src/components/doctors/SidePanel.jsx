import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
<div className='flex items-center justify-between'>
   <p className='text_para mt-0 font-semibold'>Ticket Price</p>
   <span className='text-[18px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
    0.00 Ksh
    </span> 
</div>
<div className='mt-[30px]'>
    <p className='text_para mt-0 font-semibold text-headingColor'>
        Available Time Slots:
    </p>
    <ul className='mt-3'>
        <li className='flex items-center justify-between mb-2'>
<p className='text-[15px] leading-6 text-textColor font-semibold'>
    Monday 
     </p>
     <p className='text-[15px] leading-6 text-textColor font-semibold'>
    8:00 am - 9 pm
     </p>
        </li>
        <li className='flex items-center justify-between mb-2'>
<p className='text-[15px] leading-6 text-textColor font-semibold'>
    Tuesday
     </p>
     <p className='text-[15px] leading-6 text-textColor font-semibold'>
    8:00 am - 9 pm
     </p>
        </li>
        <li className='flex items-center justify-between mb-2'>
<p className='text-[15px] leading-6 text-textColor font-semibold'>
    Wednsday
     </p>
     <p className='text-[15px] leading-6 text-textColor font-semibold'>
    8:00 am - 9 pm
     </p>
        </li>
        <li className='flex items-center justify-between mb-2'>
<p className='text-[15px] leading-6 text-textColor font-semibold'>
   Thursday
     </p>
     <p className='text-[15px] leading-6 text-textColor font-semibold'>
    8:00 am - 9 pm
     </p>
        </li>
        <li className='flex items-center justify-between mb-2'>
<p className='text-[15px] leading-6 text-textColor font-semibold'>
   Friday
     </p>
     <p className='text-[15px] leading-6 text-textColor font-semibold'>
    8:00 am - 9 pm
     </p>
        </li>
    </ul>
</div>
<button className='btn text-white font-[600] px-2 w-full rounded-md
'>
 Book Appointment   
</button>
    </div>
  )
}

export default SidePanel