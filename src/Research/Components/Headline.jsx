
import { AnimatedText } from '../../Components/AnimatedText';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { HPC } from '../../Images/Images';








    
function Headline({header, headerMobile}) {


  

  // const title = "Admissions infromation and requirements";
  // const MyanText = "Admissions infromation and requirements";

  // const display = (language == "EN") ? title : MyanText;

  return (
    <>
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 0.8}} exit={{ opacity: 0 }} className='w-[120%] ms-[-5.6%] mt-[-5.6%] ' style={{backgroundImage: `url(${HPC})`,backgroundSize: 'cover',backgroundPosition: 'center center'}}>
    <div className="hide hero py-14 px-[4%]">
    {header.map((header) => 
       <span className="overflow-hidden fade">
          <AnimatedText
          once
          text={header}
          el="h1"
          className="lg:text-7xl text-4xl font-normal leading-9 lg:leading-[80px] text-[#fff]"
          language="EN"
          
        />
      </span>
        
  
)}
</div>
<div className="sm:hidden hero py-14 ">
{headerMobile.map((header) => 
       <span className="overflow-hidden fade">
        <AnimatedText
       once
       text={header}
       el="h1"
       className="lg:text-7xl text-4xl font-normal leading-9 lg:leading-[80px] text-[#fff]"
       language="EN"
       
     />
       </span>
       
 
)}

  </div>
    </motion.div>
     
  
    </>
  );

 
}

export default Headline;



