import React from 'react';
import image from '../Images/UITtext.png'



const RectorWelcomeMessage = () => {
  return (
    <>
      <div className='flex py-2 bg-[#F0F8FF]'>
        <div className='flex-grow lg:py-[48px] w-4/6 text-center lg:text-[48px] text-[#3798A6] lg:leading-[48px] items-center justify-center'>
          <div className='lg:px-[48px] px-[2%]'>“Towards a brighter future through innovation in ICT”</div>
        </div>
        <div className='flex-grow w-2/6'>
          <div>
            <img src={image} alt="UIT" className='lg:h-[188px] h-[10%]' />  
          </div>
        </div>
      
      </div>
    </>
  );
};

export default RectorWelcomeMessage;
