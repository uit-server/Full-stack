import { useSelector } from 'react-redux';

function Topics() {




    const contents = useSelector((state) => state.data.value.topics);

    return (
      <>
        <div className="py-7 md:py-8 w-full" id="topics">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Topics</h3>   
        <div className="flex flex-row flex-wrap w-full justify-between">
            {contents.map((item,index) => 
            <div className="flex flex-row w-full md:w-[45%] items-center mb-[12px]" key={index}>
                
                <svg width="5" height="5" xmlns="http://www.w3.org/2000/svg" className="mt-[2px] me-[10px] text-[5px] flex-none">
                  <circle cx="2" cy="2" r="2" fill="black" />
                </svg>

                <p className="infoText mt-[5px] normal-case">{item}</p>

            </div>)}
            
        </div>
        

      </div>
      </>
      
    );
  
   
  }
  
  export default Topics;