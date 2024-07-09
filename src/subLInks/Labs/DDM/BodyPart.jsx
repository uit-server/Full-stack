import Mobile from '../../Degree/Bachelor/layout/Mobile';
import Pc from '../../Degree/Bachelor/layout/Pc';
import BgPart from './BgPart';
function BodyPart({condition}) {

  const bgPart = BgPart;

  const links = [
    ["About","#About"],
    ["Research lab","#image"],
    ["Members","#Members"],
    ["Objectives","#Objectives"],
    ["Publications","#Publications"],
]

    return (
      
      <section className="py-[88px] border-t-2 border-[#F5F5F5]">
        {(window.innerWidth < 1024 ) ? <Mobile bgPart={bgPart} links={links}/> : <Pc bgPart={bgPart} links={links}/>}
      </section>

    );
  }
  
  export default BodyPart;







