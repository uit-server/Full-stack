import React from "react";
import Text from "./Text";

const text = {
    goal: ["To become a Research-Based University in Computing and Information Sciences and a Research-oriented University in National, Regional, Continental and International Levels."],
    mission: ["To provide Computing and Information Solutions for IT-sector Development."]
}


export default function TextCon(){
    return (
        <div className="sm:w-[400px] w-full sm:px-0 px-[5px]">
            <Text text={text}/>
        </div>
    )
}