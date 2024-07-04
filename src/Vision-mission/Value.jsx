import React from 'react';
    
function Vision() {

  const list = [
    {
      value: "Integrity",
      para: "To act ethically, honestly and with fairness"

    },
    {
      value: "Respect",
      para: "To listen, value and acknowledge"

    },
    {
      value: "Excellence",
      para: "To strive for excellence and distinction"

    },
    {
      value: "Innovation",
      para: "To promote creative scholarly activities, programs, ideas, and sustainable practices"

    },
    {
      value: "Collaboration",
      para: "To enhance innovation through knowledge and technology exchange"

    }
  
  ]


  return (
    <div id="value" className="ps-[30px] rounded-[32px] bg-[#F0F8FF] w-full pt-8 pb-[51px] lg:scroll-mt-[164px]">
         <div className="flex flex-row justify-between items-center mb-8 h-[48px]">
        <h3 className="font-normal leading-7 lg:leading-[48px] text-2xl lg:text-5xl">Value</h3>
        <svg width="76" height="74" viewBox="0 0 76 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-[69px] lg:w-[76px] lg:h-[87px] w-[51px] h-[57px]">
<path d="M40.4561 55.3954C46.7671 54.7155 50.8491 50.924 50.8491 45.5635C50.8491 39.8108 47.3042 36.5683 38.5225 34.2672C33.2051 32.8552 31.3789 31.2601 31.3789 28.1223C31.3789 25.1936 33.9302 23.1017 38.0391 23.1017C42.2017 23.1017 44.4307 25.089 44.9946 29.0898H50.312C49.5869 23.5462 46.0688 20.0162 40.4561 19.2578V15.3617H35.8369V19.2317C29.9287 19.9116 26.0615 23.4939 26.0615 28.4883C26.0615 34.0842 29.2842 37.0913 37.3677 39.1309C43.3564 40.6475 45.478 42.4518 45.478 45.9819C45.478 47.6554 44.8604 48.989 43.5981 49.9565C42.3359 50.924 40.644 51.4208 38.5225 51.4208C33.7959 51.4208 30.8687 48.8582 30.2241 44.4914H24.7993C25.3901 50.2964 29.499 54.5063 35.8369 55.3431V59.2393H40.4561V55.3954Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M76 37C76 57.4345 58.9868 74 38 74C17.0132 74 0 57.4345 0 37C0 16.5655 17.0132 0 38 0C58.9868 0 76 16.5655 76 37ZM72 37C72 55.2835 56.7777 70.1053 38 70.1053C19.2223 70.1053 4 55.2835 4 37C4 18.7165 19.2223 3.89474 38 3.89474C56.7777 3.89474 72 18.7165 72 37Z" fill="black"/>
</svg>
        

        
    
       
    </div>
    <p className="font-[350] leading-[27px] text-lg text-[#1C1D20CC]">In keeping with its vision and missions, we commit ourselves to the following core values:</p>
    <ul className="list-disc">
      {list.map((item, index) => (
        <p className="font-[350] leading-[27px] text-lg text-[#1C1D20CC]" key={index}><span className="text-[#3798A6]">{item.value}</span>: {item.para}</p>
      )
    )}
    </ul>

    
       
    </div>
    
     
  );

 
}



export default Vision;

//styleName: p;
// font-family: Oldschool Grotesk;
// font-size: 18px;
// font-weight: 350;
// line-height: 27px;
// text-align: left;

