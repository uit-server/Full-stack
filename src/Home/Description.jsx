import React from 'react'
import { motion , AnimatePresence} from 'framer-motion'

function Description() {
  return (
    <div className='overflow-hidden mx-[10%]'>
        <AnimatePresence>
            <motion.div initial={{y:-295}} animate={{y:0,display:"block"}} transition={{ delay: 1, duration: 0.5}} className='item-center justify-center text-center bg-[#F7F7F7] pt-[40px]'>
                <div className='text-[48px] text-[#3798A6] leading-[48px] py-[10px]'>Welcome to UIT</div>
                <div className='px-[15%] text-[25px] text-[#1C1D20] opacity-50 text-justify font-[300] py-4 leading-[35px]'>The UIT has amazing opportunities for the students. You are invited to take the next step forward in your way to success and join our university. Students who want to fulfil their academic ambitions, intellectual passions and the ones who want to be IT professionals can come to our University. If it sounds good and interesting to you, you might as well choose UIT for your future.</div>
                <motion.div initial={{ marginLeft:'20%', marginRight:'20%'}} animate={{ marginLeft:"40%", marginRight:"40%"}} transition={{ delay: 1.5, duration: 1}} className='bg-[#1C1D20] opacity-50 h-[7px] rounded-lg text-white'></motion.div>
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Description