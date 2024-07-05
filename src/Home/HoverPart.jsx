import styled from 'styled-components';
import React from 'react';
import UiLi from './UiLi';


const Div = styled.div``;

    
function HoverPart() {


  
return (
  <div className="border-t-[1px] border-[#F5F5F5] flex ml-[10%] lg:ml-[40%]">
    <div className="flex justify-center items-center"></div>

    <Div className="rounded-[32px] my-[72px]  w-full">
      <div className="flex flex-col justify-center items-start">
        <UiLi value='Degree' des='/academic/degree'/>
        <UiLi value='Collboration' des='#'/>
        <UiLi value='Research' des='/research'/>
        <UiLi value='Library' des='/about/library'/>
      </div>
    </Div>
    
    

  </div>
)

 
}


export default HoverPart;