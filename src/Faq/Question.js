import React from 'react';
import '../Styles/Faq.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';



function Question(props) {



    const [ show, setShow ] = useState(false);
    // const language = useSelector((state) => state.language.value);
    const height = (window.innerWidth < 1024) ? "60px" : "68px";
   
   
  
  
   
  
  
      // (change) ? animate(".answer", { height: 'auto', opacity: 1, transiton: "all 2s linear ease-in-out" }) :  animate(".answer",{
      //   height: 0, opacity: 0
      // } ) ;
    
     
    

    const Trigger = (event) => {
      event.stopPropagation();
      setShow(!show);
  }

 

  
    
    return(
      
        <div className="">

<div className="w-full">
           
                         <AnimatePresence>
                         <motion.div className="w-full py-6 px-8 marker:lg:py-5 hover:cursor-pointer rounded-[32px] bg-[#F5F5F5]" onClick={event => {Trigger(event,props.id)}} initial={{ height: {height} }}  end={{ height: {height} }} key={`${props.id} person`} transition={{ duration: .5, ease: "linear"}}>
                            <div className="w-full flex flex-row justify-between items-center">
                                <h5 className="w-full text-base lg:text-xl font-normal lg:leading-7 leading-[22px]">{props.question}</h5>
                                <div className="p-4 rounded-full bg-[#1C1D20] lg:ms-14 ms-8  ">
                                  <AnimatePresence>
                                  <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ transform: "rotate(0)" }} animate={{ transform: show ? "rotate(-180deg)": "rotate(0deg)"}}  end={{transform: show ? "rotate(-180deg)": "rotate(0deg)" }} key={`${props.id}`} >
<path d="M0.779113 1.48748V0.646623C0.779113 0.290584 1.06697 0.00272245 1.42112 0.00461636L8.78242 0.00272227C9.13845 0.00272229 9.42632 0.290584 9.42442 0.644729L9.42442 8.00792C9.42442 8.36396 9.13656 8.65182 8.78242 8.64993L7.94156 8.64993C7.58173 8.64993 7.29198 8.3526 7.29955 7.99277L7.4075 3.5366L1.96465 8.97945C1.71277 9.23133 1.30749 9.23133 1.05561 8.97945L0.449587 8.37343C0.197709 8.12155 0.197709 7.71627 0.449588 7.46439L5.89244 2.02154L1.43627 2.12949C1.07455 2.13896 0.777219 1.8492 0.779113 1.48748Z" fill="white"/>
</motion.svg>
                                  </AnimatePresence>
                                
                                </div>

                            </div>

                            {
                                 <AnimatePresence>
                               {
                                (show) 
                                &&
                               
                                <motion.div className="w-full mt-4 lg:mt-[19px] overflow-hidden h-auto  " initial={{ opacity: 0,height: 0 }} animate={{ opacity: 1,height: "auto"}} exit={{ opacity: 0,height: 0 }} key={props.id} transition={{ duration: .3, ease: "linear"}}>
                                    <pre className="lg:text-lg text-sm font-[350] leading-[21px] lg:leading-7 w-full text-wrap font-['DegularRegular'] text-[#1C1D20CC]">
                                    {props.answer}
                                </pre>
            
                                
                            </motion.div>
                            

                               }
                               </AnimatePresence>
                                    


                                
                                

                            }

                            
                        </motion.div>
                         </AnimatePresence>
                        
                            
                            
                    
            </div>
        
          {/* <div className="w-full" onClick={ onClick } >
      <div className="mt-7 question p-3.5" >
        <p className={(language === "EN") ? "text-xl lg:text-3xl" : "text-lg lg:text-2xl"} >{props.question}</p>
        <div className="circle p-2" >
          <div className="trivia"></div>
            {(change && props.answer ) ? <svg id="svg"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> : <svg id="svgg"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>}
         
          
          
          
        </div>
       
        
      </div>
  
      <AnimatePresence>
        { 
          !change && <motion.div initial={{ opacity: 0 , height: 0}}
          animate={{ opacity: 1 , height: "auto"}}
          exit={{ opacity: 0, height: 0 }} transition={{ type: "spring", stiffness: 100 }}>
          <pre className={(language === "EN") ? "para text-lg answer p-3.5":  "para text-base answer p-3.5"} >
              {props.answer}
          </pre>
      </motion.div>
        }
          
      </AnimatePresence>
      
      
      </div>
         */}
      </div>
      
      
    );
  
    
  };
  

  export default Question;

//styleName: p - mobile;
// font-family: Oldschool Grotesk;
// font-size: 14px;
// font-weight: 350;
// line-height: 21px;
// text-align: left;



