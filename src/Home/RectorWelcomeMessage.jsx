import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AnimatePresence } from 'framer-motion'; // Make sure to import AnimatePresence if you're using it elsewhere in your app
import img from '../Images/HomePage/rector.jpeg';

function RectorWelcomeMessage() {
  const controls = useAnimation();
  const containerRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top;
        const bottom = containerRef.current.getBoundingClientRect().bottom;

        // Change threshold values based on when you want the animation to start
        if (top < window.innerHeight && bottom > 0) {
          controls.start({
            y: 0,
          });
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  return (
    <>
      <div className='overflow-hidden'>
        <AnimatePresence>
          <motion.div ref={containerRef} initial={{ y: -470 }} animate={controls} transition={{ delay: 0, duration: 0.5 }}>
            <div className='flex lg:mx-[10%] lg:px-[5%] px-[20px] pt-[2%] items-center'>
              <div className='flex-grow lg:block md:block hidden w-1/4'>
                <motion.div
                  initial={{ y: -380, height: 0, opacity: 0.5 }}
                  animate={{ y: 0, height: 351, opacity: 1 }}
                  ref={containerRef}
                  transition={{ delay: 1, duration: 2 }}
                  className='lg:rounded-[32px] lg:w-[244px] lg:h-[351px] w-[50px]'
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    objectFit: 'cover',
                  }}
                ></motion.div>
              </div>
              <div className='flex-grow ms-[2%] w-3/4'>
                <div className='flex flex-col'>
                  <div className='ms-[20px]'>
                    <ul className='lg:ps-[20px] ps-[2%] list-disc marker:text-[#3798A6]'>
                      <li className='font-normal lg:text-[20px] text-[12px] lg:leading-[18px] text-[#1C1D2080]'>
                        Rector's Message
                      </li>
                    </ul>
                  </div>
                  <div className='text-[#3798A6] lg:text-[38px] lg:text-start text-center text-[20px]'>
                    Welcome to University of Information
                  </div>
                  <div className='lg:block lg:text-[18px] md:px-[100px] text-[12px] mt-[2%] font-200 text-justify'>
                    With the aim of becoming one of the best Asian Universities in its academic profile, UIT has opened
                    its doors for cooperation, research and development. The University intends to have the connection
                    and collaboration with international universities, foreign IT companies and local IT industries. The
                    current collaborations are giving the new opportunities for faculty, students and all employees.
                    These have improved the quality of teaching and research. Our university is also ready to join
                    hands with all students, industrialists and entrepreneurs who wish to support and promote technology
                    and IT education and career in Myanmar. It is convinced that every student at our University will
                    feel satisfied with our teaching environment and classroom materials. We are also sure that the
                    graduate students from our university are able to fulfill the demand for experts and professionals
                    in Myanmar IT industry and also contribute to the International IT industry. We warmly welcome you to
                    an exciting academic, business, industrial and professional environment at UIT.
                  </div>
                  <div className='text-end pt-[10px] md:px-[100px] '>
                    <div className='text-[#3798A6] lg:text-[26px] text-[18px] lg:leading-[26px]'>
                      Dr. Saw Sanda Aye
                    </div>
                    <div className='lg:text-[20px] text-[16px] opacity-50'>Rector</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ marginLeft: '20%', marginRight: '20%' }}
              animate={{ marginLeft: '40%', marginRight: '40%' }}
              transition={{ delay: 1.5, duration: 1 }}
              className='bg-[#1C1D20] opacity-40 h-[5px] mt-[1%] rounded-lg text-white'
            ></motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default RectorWelcomeMessage;
