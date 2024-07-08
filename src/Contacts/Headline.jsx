import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import bgHis from './../Images/his-bg.jpg';
    
function Headline() {
  const language = useSelector((state) => state.language.value);

  const title = "Contact Us";
  const MyanText = "အဆက်အသွယ်";
  const display = (language == "EN") ? title : MyanText;

  

  return (
    <>
     

  

     <motion.div initial={{ opacity: 0}} animate={{ opacity: 0.8}} exit={{ opacity: 0 }} className='w-[120%] ms-[-5.6%] mt-[-5.6%] ' style={{backgroundImage: `url(${bgHis})`,backgroundSize: 'cover',backgroundPosition: 'center center'}}>
     <div className="hide hero ps-14 py-[2rem]  lg:py-[4rem]">
<span className="overflow-hidden fade">
<AnimatedText
     once
     text={display}
     el="h1"
     className="xl:text-7xl text-6xl font-medium text-white"
     language={language}
   />
</span>
</div>
<div className="sm:hidden hero ps-4 py-[2rem]">
  <span className="overflow-hidden fade">
   <AnimatedText
  once
  text={display}
  el="h1"
  className="text-3xl font-medium text-white"
  language={language}
/>

  </span>
</div>
 </motion.div> 
 


</>
  )

 
}



export default Headline;