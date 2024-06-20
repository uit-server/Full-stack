import React from "react";
import { AnimationButton } from "../Components/Footer";
import { useSelector } from 'react-redux';


export default function RegistrationFees(){

    const localFee = useSelector((state) => state.data.value.local_fee);
    const foreignFee = useSelector((state) => state.data.value.foreign_fee);
    const email = useSelector((state) => state.data.value.email);
    return(
        <div className="py-7 md:py-8 flex flex-col justify-around" id='fee'>
            <h3 className="capital mb-4 leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Registration fees</h3>   
            <div className="flex flex-col items-between gap-[10px]">
                <p style={{fontWeight:350}} className="text-[14px] md:text-[18px] text-[#1c1d20] opacity-80">Foreign participants - {foreignFee}USD </p>
                <p style={{fontWeight:350}} className="text-[14px] md:text-[18px] text-[#1c1d20] opacity-80">Local participants - {localFee}USD </p>
                <div className="flex items-center sm:justify-start justify-between sm:gap-[10px]">
                    <p style={{fontWeight:350}} className="text-[14px] md:text-[18px] text-[#1c1d20] opacity-80">To submit- </p>
                    <AnimationButton value={email} width='400px' left='55%' />
                </div>
            </div>
        </div>
    )
}