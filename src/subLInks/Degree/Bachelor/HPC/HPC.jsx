
import React,{ useEffect } from 'react';
import '../../../../Styles/Degree.css';
import Heading from '../Components/Heading';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../../../Components/UltiWrapper';
import Name from '../../../../utils/Name';

function HPC() {

  Name("High Performance Computing (HPC)")
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


 

  
  return (
      <>
      <UltiWrapper>
      <Heading name="High Performance Computing (HPC)" />
      <BodyPart />
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default HPC;
