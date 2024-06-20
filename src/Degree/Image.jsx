import '../Styles/Degree.css';
import { useInView,motion,AnimatePresence } from "framer-motion";
import { useRef } from "react";

function Image() {
  const ref = useRef(null)
  const isInView = useInView(ref, {amount: 0.8,once: true});


  return (
    <center>
        <div className="sm:hidden py-[62px] sm:py-[124px] image-section gap-2.5">
        
        <div style={{ 
          width: "100%",
          opacity: 1,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }} className="gap-2.5 image-container" ref={ref} >
       
       <div className=" image inline-block " />

    

  </div>
        </div>

        <div className="hide py-[62px] sm:py-[124px] image-section gap-2.5">
        
        <div style={{ 
          width: isInView ? "100%" : 0,
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }} className="gap-2.5 image-container" ref={ref} >
       
       <div className=" image inline-block " />

    

  </div>
        </div>
        
    </center>
    
    
     
  );
}

export default Image;