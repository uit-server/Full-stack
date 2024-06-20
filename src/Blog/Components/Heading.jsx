

import { useSelector } from 'react-redux';

    




function Heading({name}) {


  return (
    <>
    <section className="py-14 border-b-2 border-[#F5F5F5]">
        <h1 className="text-[40px] md:text-6xl lg:text-[80px] font-normal leading-10 lg:leading-[80px] text-left" >{name}</h1>
    </section>
  
    </>
  );

 
}

export default Heading;

// //styleName: H1 - mobile;
// font-family: Oldschool Grotesk;
// font-size: 40px;
// font-weight: 400;
// line-height: 40px;
// text-align: left;


