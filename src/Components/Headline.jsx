import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import sixyearjourney from '../Images/BookLibrary/photo/sixyearjourney.jpg';
import Img from '../Images/BookLibrary/photo/library1.jpg'


    
function Headline({title,MyanText}) {
  const language = useSelector((state) => state.language.value);

 
  const display = (language == "EN") ? title : MyanText;

  

  return (
    <>
     

  
     <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} className='relative' >
      <div className='relative'>
        <img src={sixyearjourney} className='lg:h-[40vh] h-[30vh]  w-full'/>
        <div className='absolute z-3 bg-gradient-to-bottom w-full lg:h-[40vh] h-[30vh] top-0 '></div>
      </div>
   <div className="hide hero ps-14 absolute top-[50%]">
<span className="overflow-hidden fade">
<AnimatedText
     once
     text={display}
     el="h1"
     className="lg:text-7xl text-6xl text-white opacity-90 font-medium"
     language={language}
   />
</span>
</div>
<div className="sm:hidden hero ps-4 absolute top-[20%]">
  <span className="overflow-hidden fade">
   <AnimatedText
  once
  text={display}
  el="h1"
  className="text-4xl font-medium text-white opacity-90"
  language={language}
/>

  </span>
</div>
 </motion.div> 
 


</>
  )

 
}



export default Headline;