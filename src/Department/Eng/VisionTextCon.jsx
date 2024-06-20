import React from "react";
import LeftTextCon from "../../Faculty/Components/LeftTextCon";
import RightTextCon from "../../Faculty/Components/RightTextCon";

const text = {
    mission: ["Fulfilling the needs of the labor market of professionals and qualified technical expertise","Capable of development and innovation in science and information technology programs","Developing teaching and learning methods","Focusing on the priorities of scientific research","Selecting and encouraging qualified and experienced academic personnel","Implementing competitiveness and quality assurance standards."],
    vision: ["Towards the competence faculty which endorse individual strengths to increase the quality of teaching and research in information science."]
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