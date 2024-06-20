import React from "react";
import { useStateContext } from "./StateContext";
import {  motion } from 'framer-motion';



export default function RightTextCon({text}){

    const { showFirst } = useStateContext();

    return(
        <div className="w-full">
            {showFirst ? 
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="vision" transition={{ duration: 0.5, ease: "linear"}} className="opacity-80 w-full list-disc ms-[16px]">
            {text.vision.map((item) => <>
            <div> <li className="mb-[10px] md:mb-[16px] w-full opacity-80"  >
                        <p className="text-sm md:text-lg font-[350px] leading-5 md:leading-7 text-[#1c1d20] opacity-80 ">{item}</p>
                        </li></div>
                           
                            
                            </>)}
            </motion.ul>:
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} key="mission" transition={{ duration: 0.5, ease: "linear"}} className="w-full list-disc ms-[16px] opacity-80">
            {text.mission.map((item) => <>
                            <li className="mb-[10px] md:mb-[16px] opacity-80"  >
                        <p className="text-sm md:text-lg font-thin leading-5 md:leading-7 text-[#1c1d20] opacity-80 ">{item}</p>    
                        </li>
                            
                            </>)}
            </motion.ul>}
            
           
        </div>
    )
}

