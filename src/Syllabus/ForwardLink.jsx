import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';

function ForwardLink({prevSyl,nextSyl}) {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
    
  };


  const handleMouseLeave1 = () => {
    setIsHovered1(false);
    }

  const handleMouseLeave = () => {
    setIsHovered(false);
    }

    return (
      <div className="lg:p-5 lg:mt-12 flex items-center justify-between border-t-[2px] border-[#F7F7F7]">
        <div className="flex flex-col">
            <div className="flex items-center  gap-x-2">
            <h5 className="font-normal leading-[22px] text-base lg:leading-7 lg:text-xl text-[#1C1D20CC]" >Previous syllabus</h5>
            <AnimatePresence>
            <motion.svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0, x: 20 }} animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}  end={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }} key="next" className="mt-[-5px] lg:w-[10px] lg:h-[10px] w-[7px] h-[7px]">
<path d="M6.89789 11.6453L6.30331 12.2399C6.05156 12.4916 5.64446 12.4916 5.39538 12.2399L0.188818 7.03598C-0.0629394 6.78422 -0.0629394 6.37713 0.188818 6.12805L5.39538 0.921484C5.64714 0.669727 6.05423 0.669727 6.30331 0.921484L6.89789 1.51606C7.15233 1.7705 7.14697 2.18563 6.88718 2.43471L3.65986 5.50937H11.3572C11.7134 5.50937 12 5.79594 12 6.15215V7.0092C12 7.36541 11.7134 7.65198 11.3572 7.65198H3.65986L6.88718 10.7266C7.14965 10.9757 7.155 11.3909 6.89789 11.6453Z" fill="#1C1D20" fill-opacity="1"  />

</motion.svg>
                                  </AnimatePresence>
            

            </div>
            
            <h5 className="font-normal lg:leading-7 lg:text-xl cursor-pointer leading-[22px] text-base" onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}>{prevSyl}</h5>
        </div>
        <div className="flex flex-col">
        <div className="flex items-center  gap-x-2">
        <AnimatePresence>
        <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"  animate={{ opacity: isHovered1 ? 1 : 0, x: isHovered1 ? 0 : -20 }}  end={{ opacity: isHovered1 ? 1 : 0, x: isHovered1 ? 0 : -20 }} key="previous" className="mt-[-5px] lg:w-[10px] lg:h-[10px] w-[7px] h-[7px]">
<path d="M4.25176 0.779561L4.74724 0.284081C4.95704 0.0742832 5.29628 0.0742832 5.50385 0.284081L9.84265 4.62065C10.0524 4.83045 10.0524 5.1697 9.84265 5.37726L5.50385 9.71606C5.29405 9.92586 4.9548 9.92586 4.74724 9.71606L4.25176 9.22058C4.03973 9.00855 4.04419 8.66261 4.26069 8.45504L6.95012 5.89283H0.535655C0.238813 5.89283 5.96046e-07 5.65402 5.96046e-07 5.35718V4.64297C5.96046e-07 4.34613 0.238813 4.10731 0.535655 4.10731H6.95012L4.26069 1.5451C4.04196 1.33753 4.0375 0.991591 4.25176 0.779561Z" fill="#1C1D20"/>
</motion.svg>
            
                                  </AnimatePresence>
            <h5 className="font-normal lg:leading-7 lg:text-xl text-[#1C1D20CC] leading-[22px] text-base" >Next syllabus</h5>
           
            

            </div>
            <h5 className="font-normal lg:leading-7 lg:text-xl text-right cursor-pointer leading-[22px] text-base" onMouseEnter={() => handleMouseEnter1()}
              onMouseLeave={() => handleMouseLeave1()}>{nextSyl}</h5>
           
        </div>
    


      </div>
    );
  
   
  }
  
  export default ForwardLink;

// //styleName: H5;
// font-family: Oldschool Grotesk;
// font-size: 20px;
// font-weight: 400;
// line-height: 28px;
// text-align: left;


  