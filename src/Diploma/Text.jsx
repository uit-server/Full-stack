import '../Styles/Degree.css';
import { AnimatePresence, motion,useInView } from 'framer-motion';
import { useRef } from "react";
import { useSelector } from 'react-redux';


function Text() {
  const TextRef = useRef(null);
  const language = useSelector((state) => state.language.value);
  const isInView = useInView(TextRef, {amount: 0.8,once: true});
  const para = ["The University of Information Technology offers undergraduate and postgraduate courses for bachelor’s, diploma, master’s, and doctoral level students in a wide range of subject areas: software engi neering, knowledge engineering, high performance computing, business information system.","သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို သင်ကြားပေးသည်- ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ လုပ်ငန်းအချက်အလက်စနစ်။"]

  return (
    <div className="text-section w-100 h-fit py-8 overflow-hidden fade">
      
      <AnimatePresence>
      <motion.p ref={TextRef} initial={{ opacity: 0, rotate: 2, y: 30 }} animate={{ rotate: isInView? 0: 2, opacity:isInView? 1: 0,y: isInView? 0: 30 }} transition={{ type: "spring", stiffness: 130 }} className={(language == "EN") ? "m-auto ps-4 md:w-4/6 md:ps-0 leading-8 sm:leading-10 font-thin text-[18px] sm:text-[24px] md:text-[28px] text-left tracking-wide" : "m-auto ps-4 md:w-4/6 md:ps-0 leading-8 sm:leading-10 font-thin text-[14px] sm:text-[20px] md:text-[24px] text-left tracking-wide" }
>{(language == "EN") ? para[0] : para[1]}</motion.p>
  

  </AnimatePresence>
    
      
      
      
    </div>
  );
}


export default Text;
