
import Main from './Main'
import TinyNav from './TinyNav';

function Pc({bgPart}) {

  const BgPart = bgPart;

    return (
      
      <div className="" >
       
        <TinyNav className=" w-72 sticky top-[20px] z-10 overflow-y-auto me-0 inline-block" attr={0}/>

    
        <Main className="ms-72 mt-[-238px]" style={{ marginTop: "232px"}}>
          <BgPart />
        </Main>

       
      </div>

    );
  
   
  }
  
  export default Pc;