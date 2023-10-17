import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { AiFillStar } from 'react-icons/ai';
import patienticon from '../../assets/images/patient-avatar.png';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-13px'>
              <img src={patienticon} alt='' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Martin Kavindu
                </h4>
                <div className='flex items-center gap-[2px]'>
                <AiFillStar className='text-redColor w-[18px] h-5' /> {/* Correct the class name to 'text-redColor' */}
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
              </div>
              </div>
       <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
       I recommend them for virtual medical care, based on two recent experiences. 
        </p>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-13px'>
              <img src={patienticon} alt='' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Martin Kavindu
                </h4>
                <div className='flex items-center gap-[2px]'>
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
              </div>
              </div>
       <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
    
Booking an appointment was easy and a doctor followed up promptly</p>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-13px'>
              <img src={patienticon} alt='' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Martin Kavindu
                </h4>
                <div className='flex items-center gap-[2px]'>
                <AiFillStar className='text-redColor w-[18px] h-5' /> 
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
              </div>
              </div>
       <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
       Fast, accurate, and excellent service. Online website easy to navigate. Very knowledgeable physician</p>  
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-13px'>
              <img src={patienticon} alt='' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Martin Kavindu
                </h4>
                <div className='flex items-center gap-[2px]'>
                <AiFillStar className='text-redColor w-[18px] h-5' /> 
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
                <AiFillStar className='text-redColor w-[18px] h-5' />
              </div>
              </div>
       <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
       Fast, accurate, and excellent service. Online website easy to navigate. Very knowledgeable physician</p>  
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
