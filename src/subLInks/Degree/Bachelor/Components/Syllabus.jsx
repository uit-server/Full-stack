
import styled from 'styled-components'


function Syllabus({syllabus}) {

  const Pic = styled.div`

    background: url(${props => props.Img});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

    

    

    return (
      <>
        <div className="py-7 md:py-8 w-full lg:scroll-mt-[214px]" id="syllabus">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">Syllabus</h3>   
        <div className="flex flex-row flex-wrap w-full justify-between">
            {syllabus.map((item) => 
            <>
            <div className="relative w-full md:w-[48%] mb-[32px] md:mb-[4%] ">
            <Pic className="w-[100%] h-[51vw] md:w-[100%] md:h-[24.1vw] lg:h-[18.3vw] rounded-[32px] bg-[#D9D9D9] opacity-70" Img={item.image}>
                

            </Pic>  
            <p className="absolute bottom-[3%] left-[6%] z-10 font-normal leading-[28px] text-[#1C1D20] text-base md:text-xl">{item.name}</p>
            </div>
            </>
            )}
            
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Syllabus;


  // 