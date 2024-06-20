import React from "react";
import LeftTextCon from "../Components/LeftTextCon";
import RightTextCon from "../Components/RightTextCon";

const text = {
    mission: ["Provide a learning atmosphere to enhance innovations, problem solving skills, leadership qualities, team-spirit and ethical responsibilties.","Revise our curriculum yearly to be the quality education to meet the needs of profession and society.","Faster research-based projects/activities in the emerging areas of technology convergence.","Establish private-public partnership program to enhance the entrepreneurship skills","Educate our students with the quality of leadership skill and life-long learners."],
    vision: ["to become a center of excellence in teaching and research by building a strong research and teaching environment","to produce the highly qualified human resources as industry ready IT professionals and innovative leaders in the fields of computer science and the information technology related areas for the development of the country’s IT industry needs"]
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