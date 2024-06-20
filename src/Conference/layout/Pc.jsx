
import Main from './Main'
import TinyNav from './TinyNav';
import BgPart from '../BgPart';
import MajorImg from '../MajorImg';
import DownloadLinks from '../DownloadLinks';

function Pc() {

    return (
      
      <div className="" >

        <MajorImg/>
       
        <TinyNav className=" w-72 sticky top-[20px] z-10 overflow-y-auto me-0 inline-block" attr={0}/>
    
        <Main className="ms-72 mt-[-390px]" style={{ marginTop: "232px"}}>
          <BgPart />
        </Main>

       
      </div>

    );
  
   
  }
  
  export default Pc;