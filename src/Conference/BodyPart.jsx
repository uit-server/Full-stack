import Mobile from './layout/Mobile';
import Pc from './layout/Pc';
function BodyPart({condition}) {

    return (
      
      <section className="py-0 md:py-[88px] border-t-2 border-[#F5F5F5]">
        {(window.innerWidth < 1024 ) ? <Mobile /> : <Pc />}
      </section>

    );
  }
  
  export default BodyPart;







