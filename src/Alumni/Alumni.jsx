import UltiWrapper from "../Components/UltiWrapper";
import Benefits from "./Benefits";
import CuroselDesktop from "./CuroselDesktop";
import FirstPara from "./FirstPara";
import Headline from "./Headline";
import Upcoming from "./Upcoming";

function Alumni(){
    return (
        <div className="alumni">
            <UltiWrapper>
                <Headline />
                <FirstPara />
                <CuroselDesktop />
                <Upcoming />
                <Benefits />
            </UltiWrapper>
        </div>
    )
}

export default Alumni;