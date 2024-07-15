import UltiWrapper from "../Components/UltiWrapper";
import Benefits from "./Benefits";
import CuroselDesktop from "./CuroselDesktop";
import FirstPara from "./FirstPara";
import Headline from "../Components/Headline";
import Upcoming from "./Upcoming";

function Alumni(){
    return (
        <div className="alumni">
            <UltiWrapper>
                <Headline title='Stay Connected with Our Alumni Network' MyanText='ကျောင်းသားဟောင်းများ'/>
                <div className="px-[5%]">
                    <FirstPara />
                    <CuroselDesktop />
                    <Upcoming />
                </div>
                <Benefits />
                
            </UltiWrapper>
        </div>
    )
}

export default Alumni;