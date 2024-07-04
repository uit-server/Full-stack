import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import UltiWrapper from '../Components/UltiWrapper';
import Headline from './Headline';
import PdfView from './PdfView';

    
function AcademicRule() {

  const pdfFile = `${process.env.PUBLIC_URL}/AcademicRules.pdf`;
  
return (
  <>
    <UltiWrapper>
      <Headline/>
      <PdfView file={pdfFile} />
    </UltiWrapper>
  </>
)

 
}



export default AcademicRule;