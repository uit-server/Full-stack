import '../Styles/Degree.css';
import {motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';


const headingLine = [
  {
    id: 0,
    heading: "Bachelor",

  },
  {
    id: 1,
    heading: "Master",
  },
  {
    id: 2,
    heading: "Doctorate"
  }
]

const discription = [
  {
    id: 0,
    category1: "Computer Science",
    category2: "Computer Technology",

    title1: [["B.C.Sc. (Software Engineering)","/academic/degree/bachelor/se"],["B.C.Sc. (Business Information Systems)","/academic/degree/bachelor/bis"],["B.C.Sc. (Knowledge Engineering)","/academic/degree/bachelor/ke"],["B.C.Sc. (High Performance Computing)","/academic/degree/bachelor/hpc"]],
    title2: [["B.C.Tech. (Embedded Systems)","/academic/degree/bachelor/es"],["B.C.Tech. (Communication and Networking)","/academic/degree/bachelor/networking"],["B.C.Tech. (Cyber Security)","/academic/degree/bachelor/csec"]]
  },
  {
    id: 1,
    category1: "Computer Science",
    category2: "Computer Technology",

    title1: [["M.C.Sc. (Software Engineering)","/academic/degree/bachelor/se"],["M.C.Sc. (Business Information Systems)","/academic/degree/bachelor/se"],["M.C.Sc. (Knowledge Engineering)","/academic/degree/bachelor/se"],["M.C.Sc. (High Performance Computing)","/academic/degree/bachelor/se"]],
    title2: [
      ["M.C.Tech. (Embedded Systems)","/academic/degree/bachelor/se"],
      ["M.C.Tech. (Communication and Networking)","/academic/degree/bachelor/se"],
      ["M.C.Tech. (Cyber Security)","/academic/degree/bachelor/se"]]

  },
  {
    id: 2,
    category1: "",
    category2: "",

    title1: [["Ph.D (Information Technology)","/academic/degree/bachelor/se"]],
    title2: []

  },
]



function MainSec() {

  const [activeId,setActiveId ] = useState(null);
   const [activeIds,setActiveIds ] = useState(0);

 

  function onClick(id) {
    setActiveId(id);
  }

  function onClicker(id) {
    setActiveIds(id);
  }

  


  return (
    <>
      <div className="customHide pt-24 h-fit w-100 text-[#ffffff] mt-[72px]">
        <div className="degree-container h-fit ms-[96px] gap-[177px] ">
            <div className="compo-1 h-fit mb-[253px]">
              { headingLine.map((h1) => 
                <div className="coverr">
                
                  <h1 className="max-[1170px]:text-[70px] text-[108px]  font-normal leading-[96px]  lg:py-8 border-b border-[#ffffff] block w-[100%] "  onClick={onClick.bind(this,h1.id )}>
                    <AnimatePresence>
                    <motion.span className="animator" initial={{ color: "#1C1D2080"}} animate={{ color: (h1.id === activeId) ? "#ffffff" : "#FFFFFF80"}} exit={{ color: "#1C1D2080"}} transition={{ type: "spring", stiffness: 100 }}>{h1.heading}</motion.span>
                    </AnimatePresence>
                    
                  <AnimatePresence>
                  


                  </AnimatePresence>
                  
                  </h1>
                
                
      </div>
              )}

              {/* this is comment added */}
              
              

                
            </div>
                <div className="compo-2 mb-[75px]" >
                
        <div>
        {discription.map(
          (item) => (
            item.id === activeId)
             &&
             <AnimatePresence>
               <motion.div initial={{ x: 500, opacity: 0}} animate={{ x: 0, opacity: 1}} exit={{ x: 500, opacity: 0}}  transition={{ease: 'linear'}} className={(item.id == 1) ? `pt-[174px]` : (item.id == 2) ? `pt-[325px]` : `` }>
                <h1 className={`text-[32px] leading-[45px] tracking-[0.06em] font-medium mb-3`}>{item.category1}</h1>
                <div className="ps-6 pb-8">
                  {item.title1.map((li) => (<Link reloadDocument to={li[1]} id="navigation" >
                  <li className={`leading-[35px] text-xl font-medium smallLink tracking-[0.06em] text-[#FFFFFF80] mb-2 `}>{li[0]} </li>
                  </Link>))}
                </div>
                  <h1 className="text-[32px] leading-[45px] tracking-[0.06em] font-medium mb-3">{item.category2}</h1>
                  <div className="ps-6">
                  {item.title2.map((li) => (<Link reloadDocument to={li[1]} id="navigation" >
                  <li className="leading-[35px] text-xl font-medium smallLink tracking-[0.06em] text-[#FFFFFF80] mb-2">{li[0]} </li>
                  </Link>))}
                  </div>

    
               </motion.div>
          </AnimatePresence>)}    
        </div>
        
            </div>
        </div>
      
    </div>



    <div className="hideMe pb-14 gap-2.5 h-fit w-100 rounded-t-[32px]">
        <div className="degree-container w-[90%] h-fit m-auto center">
            <div className="compo-1 h-fit pt-14 w-full  ps-[7.5%] pe-[7.5%] mb-8 mt-1 ">
              { headingLine.map((h1) => 
                <div className="coverr " >
                
                  <h1 className="font-normal max-[450px]:text-xl text-2xl lg:py-8 leading-7"  onClick={onClicker.bind(this,h1.id )}>
                    <AnimatePresence>
                    <motion.span className="animator" initial={{ color: "#ffffff"}} animate={{ color: (h1.id === activeIds) ? "#ffffff" : "#FFFFFF80"}} exit={{ color: "#ffffff"}} transition={{ type: "spring", stiffness: 100 }} >{h1.heading}</motion.span>
                    </AnimatePresence>
                    
                  <AnimatePresence>
                  {(h1.id === activeIds) && <motion.div initial={{ opaicty: 0, width: "0%"}} animate={{opacity: 1, width: "100%"}} exit={{ opacity: 0, width: "0%" }} transition={{ type: "spring", stiffness: 100 }} className="line"></motion.div>}


                  </AnimatePresence>
                  
                  </h1>
                
                
      </div>
              )}
              
              

                
            </div>
            <div className="compo-2" >
                <div className="sm:p-3">
        <div>
        {discription.map(
          (item) => (
            item.id === activeIds)
             &&
             <AnimatePresence mode="sync">
               <motion.div initial={{ y: -500, opacity: 0}} animate={{ y: 0, opacity: 1}} key={item.id} exit={{ y: -500, opacity: 1}}  transition={{ease: 'linear'}} >
               <h1 className="mb-[8px] pt-8 font-[500] text-xl leading-[35px]  text-left degreeHead mt-[30px]">{item.category1}</h1>
                <div className="ps-6">
                  {item.title1.map((li) => (<Link reloadDocument to={li[1]} id="navigation" >
                  <li className="leading-[30px] font-[500] text-xs md:text-lg smallLink tracking-[0.06em] text-[#FFFFFF80] pb-2">{li[0]} </li>
                  </Link>))}
                </div>
                  <h1 className="mb-[8px] pt-4 font-[500] text-xl leading-[35px]  text-left degreeHead">{item.category2}</h1>
                  <div className="ps-6">
                  {item.title2.map((li) => (<Link reloadDocument to={li[1]} id="navigation" >
                  <li className="leading-[30px] font-[500] text-xs md:text-lg smallLink tracking-[0.06em] text-[#FFFFFF80] pb-2">{li[0]}</li>
                  </Link>))}
                  </div>

               
               </motion.div>
               </AnimatePresence>
          )}    
        </div>
        
        
    </div>
            </div>
        </div>
      
    </div>
    </>
  );
}

export default MainSec;





// font-family: Degular Display;
// font-size: 16px;
// font-weight: 500;
// line-height: 30px;
// letter-spacing: 0.06em;
// text-align: left;






