

import React from 'react';
import UltiWrapper from '../Components/UltiWrapper';

import Headline from '../Components/Headline';
import Focal from './Focal';
import TrivialText from './TrivialText';
import Upcoming from './Upcoming';
import TableConditioner from './TableConditioner';
import Name from '../utils/Name';
import useResize from '../utils/useResize';
import PaginatedItems from '../Components/PaginatedItems';

    
function Calendar() {

  Name("Academic Calendar");
  useResize();
 
  
return (
  <>
    <UltiWrapper>
      <Headline title="Academic Calendar" MyanText='ပြက္ခဒိန်'/>
      <div className='px-[5%]'>
        <Focal />
        <TableConditioner />
        
        <div className="lg:mt-[72px] w-full flex items-center justify-center pt-14 pb-10 lg:pt-[72px] lg:pb-14">
          <TrivialText />
          
        </div>
        <PaginatedItems urls="posts/calender" />
        <Upcoming />
      </div>
     

    </UltiWrapper>
  </>
)

 
}



export default Calendar;