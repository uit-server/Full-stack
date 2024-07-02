import React from "react";
import TitleCon from "./Components/TitleCon";
import TextCon from "./Components/TextCon";
import { StateProvider } from "./Components/StateContext";

function GoalMission(){
    return (
        <StateProvider>
            <div className="visionWrap py-[56px] md:py-[72px] px-[5%] w-[112%] ms-[-6%]">
                <div className="flex justify-center items-center flex-col gap-10">
                    <TitleCon/>
                    <TextCon/>
                </div>
            </div>
        </StateProvider>
    )
}

export default GoalMission;