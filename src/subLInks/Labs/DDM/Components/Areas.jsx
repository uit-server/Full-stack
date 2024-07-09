import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Areas({career,title,icon}) {

  

   

    return (
      <>
        <div className="py-7 md:py-8 w-full lg:scroll-mt-[194px]" id="career">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full">{title}</h3>   
        <div className="flex flex-row flex-wrap w-full justify-between">
            {career.map((item) => 
            <div className="flex flex-row  w-full md:w-[45%] items-start mb-[12px]">
                <FontAwesomeIcon icon={icon} className="me-[10px] flex-none text-[#3798a6] lg:text-[16px] text-[12px]"/>
                <p className="infoText lg:text-[16px] text-[12px] leading-[25px]">{item}</p>

            </div>)}
            
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Areas;