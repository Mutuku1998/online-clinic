import React, { useState } from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import { AiFillStar } from 'react-icons/ai';
import FeedBackForm from './feedBackForm';

const Feedback = () => {
  const [showfeedback, setShowFeedback] = useState(true);

  const renderFeedbackSection = () => {
    if (showfeedback) {
      return (
        <div className='text-center'>
          <button
            className='btn text-white font-[700]'
            onClick={() => setShowFeedback(false)}
          >
            Give Feedback
          </button>
        </div>
      );
    } else {
      return <FeedBackForm />;
    }
  };

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews (266)
        </h4>
        <div className='flex justify-between gap-[10px] mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatar} alt='' className='w-full' />
            </figure>
            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                Katana Salim
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>23 Sep, 2023</p>
              <p className='text_para mt-3 font-medium text-[15px]'>
                Excellent Services %👍
              </p>
            </div>
          </div>
          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color='#0067FF' />
            ))}
          </div>
        </div>

      </div>
      {renderFeedbackSection()}
    </div>
  );
};

export default Feedback;
