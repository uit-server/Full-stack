import Mobile from '../layout/Mobile';
import Pc from '../layout/Pc';
import BgPart from './BgPart';
function BodyPart({condition}) {

  const bgPart = BgPart;

    return (
      
      <section className="py-[88px] border-t-2 border-[#F5F5F5]">
        {(window.innerWidth < 1024 ) ? <Mobile bgPart={bgPart} /> : <Pc bgPart={bgPart} />}
      </section>

    );
  }
  
  export default BodyPart;







