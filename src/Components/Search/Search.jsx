import React,{useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SearchBox from '../SearchBox';
import useResize from '../../utils/useResize';
const quickLink = [
  "facebook",
  "facebook",
  "facebook",
  "facebook",
]

const Search = ({ message }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [appear, setAppear] = useState(true);
  useResize();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setAppear(!appear);
    window.location.reload();
    
  };

  return (
    <div className="fixed w-[100%] h-[191%] min-h-screen bg-[#00000014] bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg border border-white border-opacity-20 shadow-lg z-40 ms-[-24px] lg:ms-[-24px] xl:ms-[-1px]">
      {
        appear &&
        <AnimatePresence>
          <motion.div className="fixed top-[54%] left-1/2 transform -translate-x-1/2  bg-[#FFFFFF]  rounded-[32px] w-[86%] py-[48.5px] md:py-[84.5px] px-[5%] md:px-[17%]"
     initial={{ opacity: 0 }}
      animate={{ opacity: appear ? 1 : 0 }}
      exit={{ opacity: appear ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      key="mainSearch"
     >
       <motion.svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[51.5px] right-[49px] cursor-pointer" 
       initial={{ transform: "rotate(0deg)",width: "18px",height: "18px" }}
       animate={{ transform: isHovered ? "rotate(180deg)": "rotate(0deg)",width: isHovered ? "23px": "18px",height: isHovered ? "23px": "18px" }}
       exit={{ transform: isHovered ? "rotate(180deg)": "rotate(0deg)",width: isHovered ? "23px": "18px",height: isHovered ? "23px": "18px" }}
       key="mainOut"
       onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
       >
                            <path d="M8.27455 6L11.686 2.58852C12.1047 2.16989 12.1047 1.49114 11.686 1.07216L10.9278 0.313977C10.5092 -0.104659 9.83045 -0.104659 9.41148 0.313977L6 3.72545L2.58852 0.313977C2.16989 -0.104659 1.49114 -0.104659 1.07216 0.313977L0.313977 1.07216C-0.104659 1.4908 -0.104659 2.16955 0.313977 2.58852L3.72545 6L0.313977 9.41148C-0.104659 9.83011 -0.104659 10.5089 0.313977 10.9278L1.07216 11.686C1.4908 12.1047 2.16989 12.1047 2.58852 11.686L6 8.27455L9.41148 11.686C9.83011 12.1047 10.5092 12.1047 10.9278 11.686L11.686 10.9278C12.1047 10.5092 12.1047 9.83045 11.686 9.41148L8.27455 6Z" fill="#1C1D20" />
                        </motion.svg>

     {(window.innerWidth > 600) && 
      <>
        <ul className="list-disc marker:text-[#3798A6] ms-5">
      <li className="text-[#1C1D2080] font-normal leading-[18px] text-base ">Shortcuts</li>
     </ul>
     <div className="mt-4 flex items-center gap-x-6">
      <p className="text-[#1C1D2080] font-normal leading-[18px] text-base "><span className="me-3">01</span>Press / to focus the search box</p>
      <p className="text-[#1C1D2080] font-normal leading-[18px] text-base "><span className="me-3">02</span>Press enter to search</p>
     </div>
      
      </>
     } 
     
     <SearchBox />
     <div className="mt-12 flex flex-col gap-y-3 m-auto md:m-0 md:mt-12" >
     <ul className="list-disc marker:text-[#3798A6] ms-5">
      <li className="text-[#1C1D2080] font-normal leading-[18px] text-base ">Quick Links</li>
     </ul>
     <div className="flex gap-6 flex-wrap">
     {quickLink.map((item,index) => <p key={index} className=" font-normal leading-[18px] text-base">{item}</p>)}
     </div>
     

     </div>
    

    
</motion.div>
        </AnimatePresence>
        
      }
     

    
    
</div>
    // <motion.div
    //   initial={{ opacity: 0, y: -20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   exit={{ opacity: 0, y: -20 }}
    //   transition={{ duration: 0.5 }}
    //   className="fixed top-4 right-4 bg-[#3798a6] text-white py-2 px-4 rounded-lg shadow-lg"
    // >
    //   I am search Box
    // </motion.div>
  );
};

export default Search;

// //styleName: H6;
// font-family: Oldschool Grotesk;
// font-size: 16px;
// font-weight: 400;
// line-height: 18px;
// text-align: left;
