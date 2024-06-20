import { useEffect, useState } from 'react';
import useFetch from '../utils/useAxios.js';
import { useSelector } from 'react-redux';

function CallsForPaper() {

  const data = useSelector((state) => state.data.value.paperCall);






    const paragraph = [data]

    return (
      <>
        <div className="py-7 md:py-8" id="callsforpaper">
          <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">Call for paper</h3>   
            {/* or marign 20px */}
          <div>
              {paragraph.map((item,index) => <div key={index}><p className="mb-[12px] text-sm sm:text-base md:text-lg font-light leading-5 md:leading-[26px] text-left text-[#1c1d20b0]">{item}</p></div>)}
          </div>

        </div>
      </>
      
    );
  
   
  }
  
  export default CallsForPaper;

//styleName: p - mobile;
// font-family: Oldschool Grotesk;
// font-size: 14px;
// line-height: 20px;