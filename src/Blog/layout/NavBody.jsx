import styled from 'styled-components'
import { useState } from 'react';
import React from 'react';
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';
import ProgressBar from './ProgressBar';
import ReadTime from './ReadTime';
import ShareSpace from './ShareSpace';

function NavBody() {

    const [data, setData ] = useState(0);
    const [prev, setPrev ] = useState(0);
    const history = [0];

    const links = [
        ["discription","#overview"],
        ["Photo","#photo"]
    ]

    const Ball = styled.div`
        width: 10px;
        height: 100%;
        position: absolute;
        left: -9%;
        


    `;

    const Element = styled(motion.div)`
            background-color: #1C1D20;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            position: absolute;
            transition: all .1s ease-out;
        }

    `;

    const handleClick = (event,index) => {
        event.stopPropagation();
        setPrev(data);
        setData(index);
    }


    return (
      <div style={{ position: 'sticky', top: '50%'}}>
      <div className="p-[32px] rounded-[32px] bg-[#F5F5F5]">
           <h5 className="text-left leading-[18px] text-[#1C1D2080] font-normal text-base mb-5">Contents</h5> 
                <div className="relative">
                <Ball>
                    <Element index={data} initial={{ top: `${50*prev + 7}%` }} animate={{top: `${50*data + 7}%` }} ></Element>    
                </Ball> 
                <nav className="list-none flex-col text-left hover:cursor-pointer">
                    {links.map((li,index) =>
                        <HashLink style={{ margin: 0, marginBottom: '8px', padding: 0}}  smooth to={li[1]}  key={index} className="text-base font-normal leading-[18px] mb-[8px] text-[#1C1D20]" onClick={(event) => handleClick(event,index)}>{li[0]}</HashLink>)}
                </nav>
                </div>

               
    </div>
    <ProgressBar />
    <ReadTime />
    <ShareSpace />
   
    </div>
    );
  
   
  }
  
  export default NavBody;






  

