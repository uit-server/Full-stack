import React from "react";
import { useSelector } from 'react-redux';
import { AnimationButton } from "../Components/Footer";

function Frame6(){
    let para = ["Annual student intake :","နှစ်စဉ် ကျောင်းသား ဝင်ခွင့် :"];
    let num = ["200","၂၀၀"]
    const language = useSelector((state) => state.language.value);
    return (
        <div className="frame6 w-full pb-16 pt-0 lg:pb-26 lg:pt-[6rem]">
            <div className="frame5 sm:w-[405px] sm:h-[288px] mx-auto">
                <p className={(language == "EN") ? "font-light text-6xl md:text-7xl opacity-60 tracking-wider w-full text-center" : "font-light text-5xl md:text-6xl opacity-60 tracking-wider w-[90%] text-center" }>{(language == "EN") ? para[0] : para[1]}</p>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                    <p className={(language == "EN") ? "font-light text-6xl md:text-7xl opacity-100 tracking-wider w-full text-center" : "font-light text-5xl md:text-6xl opacity-100 tracking-wider w-[90%] text-center pt-5"}>{(language == "EN") ? num[0] : num[1]}</p>
                    <div className="pl-10">
                        <AnimationButton />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Frame6;