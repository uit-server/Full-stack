import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Syllabus({syllabus}) {

  const [isHovered, setIsHovered] = useState(Array(syllabus.length).fill(false));

  const handleMouseEnter = (one) => {
    setIsHovered(prevState => {
      const newState = [...prevState];
      newState[one] = true;
      return newState;
    });
    
  };

  const handleMouseLeave = (one) => {
    setIsHovered(prevState => {
      const newState = [...prevState];
      newState[one] = false;
      return newState;
    });
  };

  
 

    

    

    return (
      <>
        <div className="py-7 md:py-8 w-full lg:scroll-mt-[214px]" id="syllabus">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">Syllabus</h3>   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-6 lg:gap-8 w-full justify-between">
            {syllabus.map((item,index) => 
            <>
            <Link to= {`/about/degree/syllabus`} >
            <div className="relative w-full p-5 rounded-[20px] bg-[#F5F5F5] cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
            >
            <AnimatePresence>
                                  <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{width: "5px" , opacity: 0, top: "23%", left: "90%" }} animate={{
                                    width: isHovered[index] ? "10px" : "5px", opacity: isHovered[index] ? 1 : 0,top: isHovered[index] ? "13%" : "23%",right: isHovered[index] ? "5%" : "100%"}}  end={{
                                      width: isHovered[index] ? "10px" : "5px", opacity: isHovered[index] ? 1 : 0,top: isHovered[index] ? "13%" : "23%",right: isHovered[index] ? "5%" : "10%"  }} key={`${index}`} className="absolute ">
<path d="M0.779113 1.48748V0.646623C0.779113 0.290584 1.06697 0.00272245 1.42112 0.00461636L8.78242 0.00272227C9.13845 0.00272229 9.42632 0.290584 9.42442 0.644729L9.42442 8.00792C9.42442 8.36396 9.13656 8.65182 8.78242 8.64993L7.94156 8.64993C7.58173 8.64993 7.29198 8.3526 7.29955 7.99277L7.4075 3.5366L1.96465 8.97945C1.71277 9.23133 1.30749 9.23133 1.05561 8.97945L0.449587 8.37343C0.197709 8.12155 0.197709 7.71627 0.449588 7.46439L5.89244 2.02154L1.43627 2.12949C1.07455 2.13896 0.777219 1.8492 0.779113 1.48748Z" fill="#1c1d20"/>
</motion.svg>
                                  </AnimatePresence>
      
            <p className=" font-[350] leading-[27px] text-[#1C1D20] text-base md:text-lg">{item.name}</p>
            <p className="font-[350] leading-[27px] text-[#1C1D2080] text-base md:text-lg" >lorem ipsum</p>
            </div>
            </Link>
           
            </>
            )}
            
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Syllabus;


  //styleName: p;
// font-family: Oldschool Grotesk;
// font-size: 18px;
// font-weight: 350;
// line-height: 27px;
// text-align: left;
