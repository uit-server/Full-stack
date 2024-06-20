import React from "react";
import TitleCon from "../../Faculty/Components/TitleCon";
import VisionTextCon from "./VisionTextCon";
import { StateProvider } from "../../Faculty/Components/StateContext";

function Vision(){
    return (
        <StateProvider>
            <div className="visionWrap py-[56px] md:py-[72px] px-[5%] w-[112%] ms-[-6%]">
                <div className="visionCon">
                    <TitleCon/>
                    <VisionTextCon/>
                </div>
            </div>
        </StateProvider>
    )
}

export default Vision;