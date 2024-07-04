import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import arrow from '../Images/history1.svg';
import item1 from '../Images/logoIcon.svg';
import item2 from '../Images/graduateIcon.svg';
import item3 from '../Images/buildingIcon.svg';
import toward from '../Images/towards.svg';
import uitlogo from '../Images/uitlogo.jpg';
import UltiWrapper from '../Components/UltiWrapper';
import Headline from './Headline';
    
function History() {

  const itemsData =[
    {
      id:1,
      logo: item1,
      title:"Officially renamed in 15th January, 2015",
      p:"UIT produces about 200 Undergraduate students every year."
    },
    {
      id:2,
      logo: item2,
      title:"What we offers",
      p:"UIT offers Undergraduate and Post-graduate courses for Bachelor, Diploma,  Master’s and Doctorate level students in a wide range of subject areas"
    },
    {
      id:3,
      logo: item3,
      title:"Myanmar’s main center of research in ICT ",
      p:"UIT promotes the productivity and the standard of living of the nation."
    }
  ]
  
  return(
    <>
      <UltiWrapper>
        <Headline />
        
          <div className='flex flex-col md:grid md:grid-cols-2 p-[4%]'>
            <div className='w-full flex justify-center'>
            <img src={arrow} alt="" className='w-[350px] md:w-[450px]'/>

            </div>
          <span className=' ml-20 mt-12'>
            <h1 className='text-2xl text-center'>History of UIT</h1>
            <p className='p-5 text-justify'>The University Computer Center (UCC) was established in 1971 but it  changed into the Institute of Computer Science and Technology (ICST) in  1988. On 1st July, 1998, it became the University of Computer Studies,  Yangon. There are currently altogether 25 Computer Universities around  the country. The University of Computer Studies (Bahan Campus) was  separately established on 3rd December, 2012, as the Center of  Excellence to produce the competent computer professionals and  specialists who will become invaluable human resources in ICT sector.</p>
          </span>
          </div>
          <div>
            <div className='mb-16 w-full flex flex-col'>
              <img src={uitlogo} alt="" className='w-full hidden max-1052:block' />
              <div className='w-full hidden max-1052:block mt-[60px] text-[#077d81] text-[40px]'>
                <p className='text-center'>"Towards a brighter future through innovation in ICT"</p>
              </div>
            </div>
            <img src={toward} alt="" className='w-full max-1052:hidden block' />
          </div>
          
          <ul className='flex flex-row xl:grid xl:grid-cols-3 xl:gap-x-[20px] gap-x-[15px] max-1052:justify-center justify-between w-full items-center flex-wrap xl:gap-y-[20px] gap-y-[30px] mt-10 mb-12'>
        {itemsData.map((item) => (
          <li key={item.id}>
            <div className='flex flex-col gap-[20px] justify-center items-center sm:justify-start sm:items-start'>
              <div className='2xl:w-[520px] xl:w-[380px] xl:h-[380px] w-[300px] h-[350px] rounded-[32px] bg-[#f0f8ff] p-[15%] text-center'>
                <div className='w-full h-14 flex justify-center'>
                <img src={item.logo} alt="" />
                </div>
                <div className='text-lg h-[40px] mt-6 mb-10'>
                  {item.title}
                </div>
                <div className='mt-3 text-gray-400'>
                  {item.p}
                </div>
               
              </div>
              
            </div>
          </li>
        ))}
      </ul>
        
      </UltiWrapper>
    </>
  );

 
}



export default History;