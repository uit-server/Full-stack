import React from "react";
import LeftTextCon from "../../Faculty/Components/LeftTextCon";
import RightTextCon from "../../Faculty/Components/RightTextCon";

const text = {
    mission: ["The Mission of  the Department of Physics is to improve  the laboratory facilities on the same as the Universities in ASEAN countries and to evoke the scientific research paper."],
    vision: ["To achieve the leading center for University-level courses in the field of Physics among the Universities of Computer Studies in Myanmar."]
}

const leftText = "computer science";

export default function VisionTextCon(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-[32px] md:py-[48px] w-full gap-[20px] lg:gap-[114px] lg:pt-[48px] lg:pb-[64px]">
            <LeftTextCon leftText={leftText}/>
            <RightTextCon text={text}/>
        </div>
    )
}