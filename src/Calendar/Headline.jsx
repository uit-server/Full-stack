import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

    
function Headline() {
  const language = useSelector((state) => state.language.value);

  const title = "Calendar";
  const MyanText = "ပြက္ခဒိန်";
  const display = (language == "EN") ? title : MyanText;

  

  return (
    <>
     

  

 <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} >
   <div className="hide hero ps-14 pt-[8rem]  lg:pb-24">
<span className="overflow-hidden fade">
<AnimatedText
     once
     text={display}
     el="h1"
     className="lg:text-7xl text-6xl font-medium"
     language={language}
   />
</span>
</div>
<div className="sm:hidden hero ps-4 pt-[5rem] lg:pt-72">
  <span className="overflow-hidden fade">
   <AnimatedText
  once
  text={display}
  el="h1"
  className="text-5xl font-medium"
  language={language}
/>

  </span>
</div>
 </motion.div> 
 


</>
  )

 
}



export default Headline;