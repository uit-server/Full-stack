
import useResize from '../utils/useResize';
import '../Styles/Degree.css';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../Components/UltiWrapper';
import Conditioner from './Conditioner';
import Name from '../utils/Name';
import Heading from './Heading';
import ForwardLink from './ForwardLink';
import React,{useEffect } from 'react';
import AppendTiny from './AppendTiny';


function HPC() {



  useResize();
  Name("High Performance Computing (HPC)")
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])

const dataHeader = [
    {
      name: "Subject title",
      style: "w-[33.33%]"
    },
    {
      name: "Subject Grouping",
      style: "w-[33.33%]"
    },
    {
      name: "Prerequisite Subject Codes",
      style: "w-[33.33%]"
    }
  ]



   


 

  
  return (
      <>
      <UltiWrapper>
        <Heading name="High Performance Computing (HPC)" />
        <AppendTiny name="Second year syllabus" date="Updated on 04 May 2024"/>
        <div className="flex flex-col gap-y-8 lg:gap-y-12">
        <Conditioner />
        <Conditioner />
        </div>
        
        <ForwardLink prevSyl="First year" nextSyl="Third year"/>
    
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default HPC;
