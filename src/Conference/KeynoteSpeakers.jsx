import React,{useState} from "react";
import {motion,AnimatePresence} from 'framer-motion';
import { useSelector } from 'react-redux';
import {styled} from 'styled-components';
export default function KeynoteSpeakers() {

  const Div = styled.div`

    background: url(${props => require(`../Images/${props.image}`)});
    background-size: cover;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

  const data = useSelector((state) => state.data.value.keynote_speakers);


    return (
      <>
        <div className="py-7 md:py-8 w-full" id="invited">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full" >Keynote Speakers</h3>   
        <div className="flex flex-row gap-[15px] flex-wrap w-full justify-between">
            {data.map(item => 
            <div className=" flex justify-start gap-[10px] w-[350px]">
            <Div className="w-[50px] md:w-[75px] rounded-md" image={item[0]}></Div>
            <div className="flex flex-col">
              <p className="text-[11px] md:text-[16px] text-[#3798a6]">{item[1].split(",")[0]}</p>
              <p className="text-[10px] md:text-[16px] text-[#1c1d20]">{item[1].split(",")[1]}</p>
              <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">{item[1].split(",")[2]}</p>
            </div>
          </div>

            )}
        

              {/* <div className=" flex justify-start gap-[10px] w-[350px]">
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">Senior Lecturer.Michael Brown</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Research Lead</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">University of Melbourne Australia</p>
                </div>
              </div>

              <div className=" flex justify-start gap-[10px] w-[350px]">
                <div className="w-[50px] md:w-[75px]  bg-[#ccc] rounded-md"></div>
                <div className="flex flex-col">
                  <p className="text-[11px] md:text-[16px] text-[#3798a6]">Assistant Professor.Olivia Martinez</p>
                  <p className="text-[10px] md:text-[16px] text-[#1c1d20]">Coordinator</p>
                  <p className="text-[12px] md:text-[16px] text-[#1c1d20] opacity-50">University of Barcelona Spain</p>
                </div>
              </div> */}
            
            
        </div>

        

      </div>
      </>
      
    );
  
   
  }

  