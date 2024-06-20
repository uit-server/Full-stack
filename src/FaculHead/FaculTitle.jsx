import '../Styles/Degree.css';
import { AnimatedText } from '../Components/AnimatedText';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";


const header = [
  "Our Faculties",
]


const headerMobile = [
  "Our Faculties",
  
]



    
function FaculTitle() {


  

  // const title = "Admissions infromation and requirements";
  // const MyanText = "Admissions infromation and requirements";

  // const display = (language == "EN") ? title : MyanText;

  return (
    <>
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} >
    <div className="hide hero py-14">
        {header.map((header,index) => 
        <span className=" inline-block h-auto relative w-auto border-b-2 border-[rgba(0,0,0,0.09)]" key={index}>
            <AnimatedText
            once
            text={header}
            el="h1"
            className="lg:text-7xl text-4xl font-normal leading-9 lg:leading-[80px]"
            language="EN"
            
            />
            
        </span>)}

       
  
</div>
<div className="sm:hidden hero pt-14 pb-5">
{headerMobile.map((header,index) => 
       <span className="inline-block h-auto relative w-auto " key={index}>
        <AnimatedText
       once
       text={header}
       el="h1"
       className="lg:text-7xl text-3xl font-normal leading-9 lg:leading-[80px]"
       language="EN"
       
     />
        

       </span>
       
 
)}

  </div>
    </motion.div>
     
  
    </>
  );

 
}

export default FaculTitle;



