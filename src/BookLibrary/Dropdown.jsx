

import { useState,useEffect } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { changeRole } from '../store/RoleSlice';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

const dpData = [
    {
        id: 0,
        heading: "I am a teacher",
        body: "You can be faculty members of our library.",
        linkText: "About borrowing books?",
        link: "",
        data: "faculty member"
    },
    {
        id: 1,
        heading: "I am a teacher / admin staff",
        body: "You can be admin / professional members of our library.",
        linkText: "About borrowing books?",
        link: "",
        data: "admin/professional staff"
    },
    {
        id: 2,
        heading: "I am an office staff",
        body: "You can be non-academic members of our library.",
        linkText: "About borrowing books?",
        link: "",
        data: "non-academic"
    },
    {
        id: 3,
        heading: "I am a student",
        body: "You can be student members of our library.",
        linkText: "About borrowing books?",
        link: "",
        data: "under-graduate"
    }
]

// "114px" : "136px"

function Dropdown() {   
    const [signal, setSignal ] = useState(0);
    const [define, setDefine ] = useState(true);
    const height = (window.innerWidth < 1024) ? "60px" : "68px";
    const bgHeight = (window.innerWidth <= 392) ? "156px" : (window.innerWidth < 1024) ? "114px" : (window.innerWidth <= 1280) ? "176px" :'136px';
    const justifyHeight = (window.innerWidth <= 392) ? "156px" : (window.innerWidth < 1024) ? "46px" : (window.innerWidth <= 1280) ? "156px" :'56px';
    const dispatch = useDispatch();
    const test  = useSelector((state) => state.role.value);
    let interval;


    const Trigger = (event, index) => {
        event.stopPropagation();
        setSignal(index);
        return () => clearInterval(interval);
    }

    const roleChange = (event, index) => {
    
        dispatch(changeRole(index));
    }

    useEffect(() => {
        

        
            interval = setInterval(() => {
                setSignal((prevSignal) => (prevSignal < 3 ? prevSignal + 1 : 0));
                }, 5000);
               
        
    
        return () => clearInterval(interval);
      }, [signal]);

     return(
        <AnimatePresence>
            <div className="w-full lg:pt-[42px] relative lg:h-[382px] h-[294px]">
            <span className=" hidden lg:inline-block absolute top-[-10px] left-0  text-xs font-normal me-[30px] lg:me-[55px]  lg:leading-[18px] lg:text-base">
            <div className=" inline-block relative bottom-[3.5px] px-[7px] text-xl text-[#3798A6]">.</div>
    
                <span className="opacity-50 leading=[18px]">Types of member {test}</span>
        </span>
            <div className="w-full">
            {
                    dpData.map(
                        (item) => 
                        <>
                         <AnimatePresence>
                         <motion.div className="w-full py-4 marker:lg:py-5 border-b-2 border-[#f5f5f5] hover:cursor-pointer" onClick={event => {Trigger(event,item.id)}} initial={{ height: {height} }} animate={{ height: (signal === item.id) ? bgHeight : height}} end={{ height: {height} }} key={`${item.id} person`} transition={{ duration: .5, ease: "linear"}}>
                            <div className="w-full flex flex-row justify-between items-center">
                                <h5 className="text-base lg:text-xl font-normal leading-7">{item.heading}</h5>
                                <div className={`w-[6px] lg:w-[8px] h-[6px] lg:h-[8px] rounded-full ${(signal === item.id) ? "bg-[#3798A6]" : "bg-[#1C1D2033]"}`}></div>

                            </div>

                            {
                                 <AnimatePresence>
                               {
                                (signal === item.id) 
                                &&
                               
                                <motion.div className="w-full mt-[8px] lg:mt-3 overflow-hidden h-[56px] " initial={{ opacity: 0,height: 0 }} animate={{ opacity: 1,height: justifyHeight}} exit={{ opacity: 0,height: 0 }} key={item.id} transition={{ duration: .5, ease: "linear"}}>
                                    <p className="lg:text-lg text-sm font-[350px] leading-5 lg:leading-7 text-[#1C1D20CC]">
                                    {item.body}
                                </p>
                                
                                <HashLink style={{ margin: 0, marginBottom: '8px', padding: 0 }} smooth to="#role"><p className="mt-[8px] lg:text-lg text-sm font-normal leading-5 lg:leading-6 text-[#1C1D20] underline decoration-solid inline-block bg-[#F5F5F5] rounded-[3px] hover:text-[#f5f5f5] hover:bg-[#3798A6] transition duration-500" onClick={event => {roleChange(event,item.data)}}>
                                    {item.linkText}
                                    
                                </p></HashLink>
                                
                            </motion.div>
                            

                               }
                               </AnimatePresence>
                                    


                                
                                

                            }

                            
                        </motion.div>
                         </AnimatePresence>
                        
                            
                            
                      </>
                    )
                }
            </div>
            
        </div>
        </AnimatePresence>
        
            
                
            
        
                  
        
    )
}

export default Dropdown;



