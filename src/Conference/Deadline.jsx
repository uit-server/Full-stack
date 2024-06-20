import React from "react";
import { useSelector } from 'react-redux';

export default function Deadline(){

    const date = useSelector((state) => state.data.value.updated_deadline);
    const date2 = useSelector((state) => state.data.value.original_deadline)

    let updatedDeadline = date.split("-");
    let originalDeadline = date2.split("-");

    const month = new Date(date);   
    const month2 = new Date(date2);
    updatedDeadline[1] = month.toLocaleDateString('en-US', { month: 'long' });
    originalDeadline[1] = month2.toLocaleDateString('en-US', { month: 'long' });
    
    




    


    return(
        <div className="py-7 md:py-8 flex flex-col justify-around" id="deadline">
            <h3 className="capital mb-5 leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Importance dates</h3>
            <div  className="flex justify-start gap-[15px] md:gap-[30px] items-center">
                
            <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="flex flex-col jusify-around items-center p-[20px] md:p-[24px] px-6 rounded-[15px] bg-[#f0f8ff]">
                    <h4 className="text-[21px] sm:text-[24px] md:text-[32px] text-[#1c1d20]">{updatedDeadline[2]}</h4>
                    <p className="text-[10px] sm:text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">{updatedDeadline[1]} {updatedDeadline[0]}</p>
                </div>
                <p className="text-[10px] sm:text-[12px] text-center md:text-[18px] text-[#1c1d20] opacity-50">Updated Deadline</p>
            </div>                                               

            <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="flex flex-col jusify-around items-center p-[20px] md:p-[24px] px-6 rounded-[15px] bg-[#f0f8ff]">
                    <h4 className="text-[21px] sm:text-[24px] md:text-[32px] text-[#1c1d20]">{originalDeadline[2]}</h4>
                    <p className="text-[10px] sm:text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">{originalDeadline[1]} {originalDeadline[0]}</p>
                </div>
                <p className="text-[10px] sm:text-[12px] text-center md:text-[18px] text-[#1c1d20] opacity-50">Original Deadline</p>
            </div>       
                    
                  
            </div>
        </div>
    )
}