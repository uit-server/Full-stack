import TableMobile from '../Components/TableMobile';
import { motion, AnimatePresence } from "framer-motion";
import React,{useState } from 'react';

function TableText({name,dataHeader,data}) {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
    
  };
    return (
      <div className="flex flex-col gap-y-5 lg:gap-y-6 lg:pb-[72px]">
        <div className="flex items-center"><h5 className="font-normal lg:leading-7 lg:text-xl text-base leading-[22px] w-[80%]">{name}</h5>
        <AnimatePresence>
          {
            isClicked ? <motion.h5 initial={{ opacity: 0}} transition={{ duration : 0.7 }} animate={{ opacity: 1 }} end={{ opacity: 0 }} key="hideShow" className="font-normal  text-base leading-[22px] underline underline-offset-8 cursor-pointer" onClick={handleClick}>Hide -</motion.h5> :
            <motion.h5 initial={{ opacity: 0}} transition={{ duration : 0.7 }} animate={{ opacity: 1 }} end={{ opacity: 0 }} key="hideShow2" className="font-normal  text-base leading-[22px] underline underline-offset-8 cursor-pointer" onClick={handleClick}>show +</motion.h5>
          }
        
        </AnimatePresence>
        </div>
        <AnimatePresence>
        <motion.div className="overflow-hidden" initial={{ height: 'auto'}} transition={{ duration: 0.7 }} animate={{ height: !isClicked ? 0 :'auto' }} end={{ height: !isClicked ? 0 :'auto' }} key="table" >
    <TableMobile dataHeader={dataHeader} data={data} />
    </motion.div>
        </AnimatePresence>
    
    


      </div>
    );
  
   
  }
  
  export default TableText;
  

