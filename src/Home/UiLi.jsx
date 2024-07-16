import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function UiLi({value="Hello",des, img}) {

  return (
    <div className='border-b-4 w-full overflow-hidden'>
    {window.innerWidth > 360 ? 
    <motion.div initial={{x:-150}} whileHover={{x:0,opacity:0.6}} className='flex py-[10px] lg:ps-0 ps-[5%] items-center justify-start'>
        <div className='flex flex-row'>
          <img className="lg:h-[120px] lg:w-[140px] h-[90px] w-[100px] " src={img}/>
        </div>
          
        <Link to={des} className='lg:text-[80px] text-[40px] ps-[20px] pt-[20px]'>{value}</Link>
    </motion.div> : 
    <div initial={{x:-150}} whileHover={{x:0,opacity:0.6}} className='flex py-[10px] lg:ps-0 ps-[5%] items-center justify-start'>
        <div className='flex flex-row'>
          <img className="lg:h-[120px] lg:w-[140px] h-[90px] w-[100px] " src={img}/>
        </div>
          
        <Link to={des} className='lg:text-[80px] text-[40px] ps-[20px] pt-[20px]'>{value}</Link>
    </div>
    
    }
    </div>
  )
}

export default UiLi;