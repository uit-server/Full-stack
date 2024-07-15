import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import UltiWrapper from '../Components/UltiWrapper';
import Headline from './../Components/Headline';
import PdfView from './PdfView';

    
function SixYearJourney() {

  const pdfFile = `${process.env.PUBLIC_URL}/UIT6YearsJourney.pdf`;
  
return (
  <>
    <UltiWrapper>
      <Headline title='Six Year Journey' MyanText='ခြောက်နှစ်တာခရီးစဥ်'/>
      <div className='p-[5%]'>
      <PdfView file={pdfFile} />
      </div>
    </UltiWrapper>
  </>
)

 
}



export default SixYearJourney;