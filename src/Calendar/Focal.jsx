import styled from 'styled-components';
import Desc from './Desc';
import Calendar from '../Images/calendar.jfif'

const Div = styled.div`
  background: url(${Calendar});
  background-size: cover;
    object-fit: cover;
    background-position: center center;
`;

    
function Focal() {


  
return (
  <div className="w-full lg:pt-[72px] lg:pb-14 pt-14 border-t-[1px] border-[#F5F5F5] grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-x-[84px] ">
    <Div className="aspect-square rounded-[32px] w-full bg-[#d9d9d9]"></Div>
    <div className="flex justify-center items-center"><Desc /></div>
    
    

  </div>
)

 
}



export default Focal;