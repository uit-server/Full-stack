import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Div = styled.div`

`;

function UiLi({value="Hello",des}) {
  return (
    <div className='border-b-4 w-full overflow-hidden'>
    <motion.div initial={{x:-150}} whileHover={{x:0,opacity:0.6}} className='flex py-[10px] items-center justify-start'>
        <div className='flex flex-row'>
          <Div className="aspect-square h-[120px] rounded-[32px] w-[140px] bg-[#d9d9d9]"></Div>
        </div>
          <Link reloadDocument to={des} >
            <p className='text-[80px] ps-[50px] pt-[20px]'>{value}</p>
          </Link>
    </motion.div>
    </div>
  )
}

export default UiLi;