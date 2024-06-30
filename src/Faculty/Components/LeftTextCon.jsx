import React from "react";
import { useStateContext } from "./StateContext";
import { motion } from 'framer-motion';



export default function LeftTextCon({leftText}){

    const { showFirst } = useStateContext();

    return(
        <div className=" ">
            <div className="w-[100%] lg:w-[100%] overflow-hidden whitespace-nowrap relative" >
                <motion.div initial={{ x: 0}} animate={{ transform: !showFirst ? "translateX(-100%)" : 0 }} className="inline-block w-[100%]">
                    <h1 className="text-wrap text-[32px] font-normal leading-9 lg:leading-[48px] lg:text-5xl relative top-0 ">
                        {/* <span className="inline-block relative bottom-[5px] lg:bottom-[10px]">
                            < ul className="list-disc marker:text-[#3798a6]">
                                <li className="text-xs font-normal ms-[18px] me-[30px] lg:me-[55px] opacity-50 lg:leading-[18px] lg:text-base">Vision</li>
                            </ul>
                        </span>*/}The visions of faculty of {leftText} are:  
                    </h1>
                </motion.div>
                <motion.div className="inline-block w-[100%]" initial={{ x: 0}} animate={{ transform: !showFirst ? "translateX(-100%)" : 0 }}>
                    <h1 className="text-wrap text-[32px] font-normal leading-9  lg:leading-[48px] lg:text-5xl relative top-0 w-full">
                       In support of its vision, we are committed to:  
                    </h1>
                </motion.div>

            </div>
                
           
        </div>
    )
}



