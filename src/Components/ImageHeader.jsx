import styled from 'styled-components';
import img from '../Images/visimisi/photo.png';

const Div = styled.div`
  background-image: url(${img});
  width: 111.5%;
  margin-left: -6%;
  object-fit: contain;
  margin-top: -5.5%;
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat
  opacity: 50%;

`;

const Div2 = styled.div`
  background: linear-gradient(187.79deg, rgba(233, 233, 233, 0.5) 5.9%, rgba(0, 0, 0, 0.5) 93.9%);
`

function ImageHeader({name}) {

    return (
      <Div className="py-[27.5px] lg:py-14 lg:px-97 relative">
        <h1 className="relative ms-[5%] font-normal text-[40px] leading-[40px] lg:text-[80px] lg:leading-[80px] text-[#ffffff]" style={{ zIndex: 1}}>{name}</h1>
        <Div2 className=" absolute top-0 w-full h-full z-0"></Div2></Div>
    );
  
   
  }
  
  export default ImageHeader;

//   font-family: Actor;
// font-size: 40px;
// font-weight: 400;
// line-height: 40px;
// text-align: left;



