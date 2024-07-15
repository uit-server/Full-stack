import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function UiLi({value="Hello",des, img}) {

  let navigate = useNavigate()
  return (
    <div className='border-b-4 w-full overflow-hidden'>
    <motion.div initial={{x:-150}} whileHover={{x:0,opacity:0.6}} className='flex py-[10px] items-center justify-start'>
        <div className='flex flex-row'>
          <img className="h-[120px] w-[140px] " src={img}/>
        </div>
          <div onClick={() => navigate(des)} >
            <p className='text-[80px] ps-[20px] pt-[20px]'>{value}</p>
          </div>
    </motion.div>
    </div>
  )
}

export default UiLi;