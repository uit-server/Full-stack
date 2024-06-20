

import { useSelector } from 'react-redux';



    




function Heading() {

  const data = useSelector((state) => state.data.value.name);

  

  return (
    <>
    <section className="py-14 ">
        <h1 className="text-3xl md:text-6xl lg:text-[70px] font-normal leading-80 text-left" >{data}</h1>
    </section>
  
    </>
  );

 
}

export default Heading;

