import React from "react";
import {motion} from 'framer-motion';

export default function Guideline(){
    return(
        <div className="py-7 md:py-8 flex flex-col justify-around" id="guideline">
            <h3 className="capital mb-3 leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Paper submission guidelines</h3> 

            <a href={require(`../Document/ICAIT-Paper-Template.doc`)} download="ICAIT_Paper_Template.doc">
            <div>
            
            <motion.span whileHover={{backgroundColor:"#3798a6",color:'#fff'}} className="text-center text-[14px] md:text-[18px] py-1 rounded text-[#1c1d20] inline cursor-pointer underline">ICAIT Paper Template</motion.span>
        </div>
            </a>
            
        </div>
    )
}