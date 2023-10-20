import React from 'react'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of

                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Dr. Amani Kazungu 
                </span>
            </h3>
            <p className='text_para'>
            We treat a variety of acute and chronic conditions and provide expert medical advice
             and guidance for our patients.
            </p>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'> Education </h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            22 Dec 2012
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Masters in Clinical Med
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            University  of Nairobi
                        </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            10 Sep 2009
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Degree in Clinical Med
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            University  of Nairobi
                        </p>
                </li>
            </ul>
        </div>
        <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'> 
        Experience </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] px-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ed]'>
                <span className='text-yellowColor text-[15px] leading-6 font-bold'>
                    Dec 2015 - Date
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                   Physician
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                        Kilifi County Hospital
                        </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ed]'>
                <span className='text-yellowColor text-[15px] leading-6 font-bold'>
                    Dec 2015 - Date
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                   Physician
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                        Kilifi County Hospital
                        </p>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default DoctorAbout