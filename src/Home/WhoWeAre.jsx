import React from 'react';
import image from '../Images/UITtext.png'



const WhoWeAre = () => {
  return (
    <>
      <div className='flex py-2 bg-[#F0F8FF]'>
        <div className='flex-grow py-[48px] w-4/6 text-center text-[48px] text-[#3798A6] leading-[48px] items-center justify-center'>
          <div className='px-[48px]'>“Towards a brighter future through innovation in ICT”</div>
        </div>
        <div className='flex-grow w-2/6'>
          <div>
            <img src={image} alt="UIT" className='h-[188px]' />  
          </div>
        </div>
      
      </div>
    </>
  );
};

export default WhoWeAre;
