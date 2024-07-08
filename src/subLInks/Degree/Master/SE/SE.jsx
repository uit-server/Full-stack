
import React,{useEffect } from 'react';
import useResize from '../../../../utils/useResize';
import '../../../../Styles/Degree.css';
import BodyPart from './BodyPart';
import { useLocation } from 'react-router-dom';
import UltiWrapper from '../../../../Components/UltiWrapper';
import ImageHeader from '../../../../Components/ImageHeader';
import Name from '../../../../utils/Name';

function SE() {

  useResize();
  Name("M.C.Sc. ( Software Engineering )")
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);

},[pathname])
   


 

  
  return (
      <>
      <UltiWrapper>
      <ImageHeader name="M.C.Sc." name1=" ( Software Engineering )"/>
      <BodyPart />
      </UltiWrapper>
          
      
    
    </>
    
  );
}

export default SE;
