import '../Styles/Degree.css';
import { AnimatedText } from '../Components/AnimatedText';
import { motion } from "framer-motion";


const header = [
  "Diploma Programs",
  "We Offer"
]

const headerMobile = [
  "Diploma",
  "Programs",
  "We Offer"
]



    
function Headline() {



  


  return (
    <>
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} >
     <div className="hide hero ps-14 pt-[8rem]  lg:pb-24">
    {header.map((header) => 
       <span className="overflow-hidden fade">
          <AnimatedText
          once
          text={header}
          el="h1"
          className="lg:text-7xl text-6xl font-medium"
          language="EN"
        />
      </span>
        
  
)}
</div>
<div className="sm:hidden hero ps-4 pt-[5rem] lg:pt-72">
{headerMobile.map((header) => 
       <span className="overflow-hidden fade">
        <AnimatedText
       once
       text={header}
       el="h1"
       className="text-5xl font-medium"
       language="EN"
     />
       </span>
       
 
)}

  </div>
  </motion.div>
  
    </>
  );

 
}

export default Headline;



