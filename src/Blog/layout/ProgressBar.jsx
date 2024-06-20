import { useState,useEffect } from 'react';

function ProgressBar() {
    const [data, setData ] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = ((scrollY / (documentHeight - windowHeight)) * 100)

            if(scrollPercent > 12) {
                setData(scrollPercent);
            } else {
                setData(0);
            }

            
        }

        window.addEventListener("scroll",handleScroll);

        return ()=> {
            window.removeEventListener("scroll",handleScroll);
        }

    },[])




    return (
      
      <div className="mt-8 w-full h-[6px] bg-[#f5f5f5]" >
            <div className={`h-[6px]  bg-[#1C1D20]`} style={{
                width: `${data}%`,
                transition: 'all .1s linear'
            }}></div>
       
        </div>

    );
  
   
  }
  
  export default ProgressBar;