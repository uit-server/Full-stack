import styled from 'styled-components';
import React from 'react';
import UiLi from './UiLi';
import sixyearjourney from '../Images/HomePage/uitHome.jpeg';
import collab from '../Images/HomePage/CollabIcon.svg'
import degree from '../Images/HomePage/diplomaIcon.svg'
import research from '../Images/HomePage/researchIcon.svg'
import library  from '../Images/HomePage/icon1.svg';


const IMG = styled.div`
  background: url(${sixyearjourney});
  background-size: cover;
  object-fit: cover;
  background-position: center center;
`;

const Div = styled.div``;

    
function HoverPart() {


  
return (
  <div className="border-t-[1px] border-[#F5F5F5] bg-[#F0F8FF] flex">

    <div className='flex-grow w-1/3 my-[72px] ms-[10%] me-[5%] items-center justify-center'>
      <IMG className='aspect-square rounded-[32px] w-[533px] h-[677px]'/>
    </div>

    <Div className="rounded-[32px] my-[72px] flex-grow w-2/3">
      <div className="flex flex-col justify-center items-start">
        <UiLi value='Degree' des='/academic/degree' img={degree}/>
        <UiLi value='Collaboration' des='#' img={collab}/>
        <UiLi value='Research' des='/research' img={research}/>
        <UiLi value='Library' des='/academic/library' img={library}/>
      </div>
    </Div>
    
    

  </div>
)

 
}


export default HoverPart;