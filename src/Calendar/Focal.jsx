import styled from 'styled-components';
import sixyearjourney from '../Images/BookLibrary/photo/theatre.jpg';
import Desc from './Desc';

const Div = styled.div``;

    
function Focal() {


  
return (
  <div className="w-full lg:pt-[72px] lg:pb-14 pt-14 border-t-[1px] border-[#F5F5F5] grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-x-[84px] ">
    <Div className="aspect-square rounded-[32px] ps-8 w-full">
 <div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} className='w-[120%] ms-[-5.6%] mt-[-5.6%] w-full h-full rounded-[32px] ' style={{backgroundImage: `url(${sixyearjourney})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat',backgroundPosition: 'center'}}>
</div>
    </Div>
    <div className="flex justify-center items-center"><Desc /></div>
    
    

  </div>
)

 
}



export default Focal;