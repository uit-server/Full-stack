import React from "react";
import { useStateContext } from "./StateContext";
import {  motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLightbulb } from '@fortawesome/free-solid-svg-icons'


export default function Text({text}){

    const { showFirst } = useStateContext();

    return(
        <div className="w-full">
            {showFirst ? 
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="vision" transition={{ duration: 0.5, ease: "linear"}} className="opacity-80 w-full list-none">
            {text.goal.map((item) => (
            <>

                
                <div className="flex justify-center items-center flex-col gap-5">
                    <FontAwesomeIcon className="text-[45px]" icon={faMagnifyingGlass} style={{color: "#3798a6"}} />
                    <li className="mb-[10px] md:mb-[16px] w-full opacity-80"  >
                        <p className="text-sm text-justify md:text-xl font-[350px] tracking-wide leading-5 md:leading-7 text-[#1c1d20] opacity-80 ">{item}</p>
                    </li>
                </div>
                           
                            
            </>))}
            </motion.ul>:
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}} key="mission" transition={{ duration: 0.5, ease: "linear"}} className="w-full list-none opacity-80">
            {text.mission.map((item) => (
            <>
                <div className="flex flex-col justify-center items-center gap-5">
                    <FontAwesomeIcon className="text-[45px]" icon={faLightbulb} style={{color: "#3798a6"}} />
                    <li className="mb-[10px] md:mb-[16px] opacity-80"  >
                        <p className="text-sm text-justify md:text-xl tracking-wide font-thin leading-5 md:leading-7 text-[#1c1d20] opacity-80 ">{item}</p>    
                    </li>
                </div>
                
            </>
            ))}
            </motion.ul>}
            
           
        </div>
    )
}

