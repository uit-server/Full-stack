import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ title, subtitle, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-gray-100 rounded-[32px] overflow-hidden shadow-sm my-5">
      <div
        className=" lg:px-4 lg:pt-4 pb-0 px-2 pt-2 flex justify-between items-center lg:gap-[10px] gap-0 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center lg:gap-5 gap-2 '>
            <div className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-gray-200 rounded-[32px]'></div>
            <div className='w-[220px] lg:w-auto'>
            <h2 className=" lg:text-[25px] text-[18px] leading-[26px]  lg:leading-[36px] ">{title}</h2>
            {!isOpen && <div className="text-[#1c1d20] opacity-50 lg:text-[18px] text-[12px]">{subtitle}</div>}
            </div>
        </div>
        <motion.div
          className="text-xl"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ⌄
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-gray-100 px-4 lg:py-2 py-1"
      >
        <div className=''>
          {content}
        </div>
      </motion.div>
    </div>
  );
};

const IndividualMember = ({member}) => {
  return (
    <div className="">
      <Accordion
        title={member.name}
        subtitle={member.subtitle}
        content={
          <div className='lg:px-5 px-0 pt-2'>
                <p className="lg:text-[19px] text-[16px] opacity-80 font-semibold text-[#1c1d20]">{member.subtitle}</p>
                <ul className="list-none pl-0 mt-2 space-y-2 mb-3">
                    {member.degree.map((item,index)=>(
                    <li key={index} className='flex lg:items-center items-start gap-2'>
                        <div className='w-[10px] h-[10px] bg-[#077d81] rounded-full lg:mt-0 mt-[0.3rem]'></div>
                        <p className='lg:text-[18px] text-[16px] lg:max-w-full xs:max-w-[335px] max-w-[250px]'>received <span className="text-[#077d81]">{item.type}</span> in {item.subject} from {item.palace}</p>
                    </li>
                    ))}
                    
                
                </ul>
                <h3 className="lg:text-[19px] text-[16px] opacity-80 font-semibold text-[#1c1d20]">Research Interests</h3>
                <ul className="list-none pl-0 mt-2 space-y-2">
                    
                    {member.interest.map((item,index)=>(
                    <li key={index} className='flex items-center gap-2'>
                        <div className='w-[10px] h-[10px] bg-[#077d81] rounded-full'></div>
                        <p className='lg:text-[18px] text-[16px]'>{item}</p>
                    </li>
                    ))}
                </ul>
          </div>
        }
      />
    </div>
  );
};

export default IndividualMember;
