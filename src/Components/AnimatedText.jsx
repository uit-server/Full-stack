import '../Styles/Degree.css';
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";


const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
    },
   
  }
  export const AnimatedText = ({
    text,el: Wrapper = "p", className,language}) => {
      const ref = useRef(null);
      const isInView = useInView(ref, {amount: 0.8, once: true});
      return (<Wrapper className={className}>
        <AnimatePresence>
          {
            (language == "EN") ?
            <motion.span ref={ref} initial="hidden" key="modal" animate={isInView ? "visible" : "hidden"}  transition={{ staggerChildren: 0.04 }} aria-hidden>
          {text.split(" ").map((word,index) => (
            <span className="inline-block" key={index}>
            {word.split('').map((char,i) => <motion.span className="inline-block" variants={defaultAnimations} key={i}>{char}</motion.span>)}
            <span  className="inline-block">&nbsp;</span>
            </span>
            
          ))}
          </motion.span>
          :
          <motion.p key={text} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0}} exit={{ opacity: 1}} className="py-5" >{text}</motion.p>}


        
        </AnimatePresence>
        </Wrapper>)
  
    };