import Main from './Main'
import TinyNav from './TinyNav';
import BgPart from '../BgPart';


function Mobile({condition}) {

    return (
      
      <div className="" >
       
        <TinyNav className=" w-72 fixed bottom-[4%] right-[6%] z-50 " attr={1} />

    
        <Main className="" >
            <BgPart />
        </Main>
        
        
      </div>

    );
  
   
  }
  
  export default Mobile;