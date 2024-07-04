import React from 'react';
import Name from '../utils/Name';
import Vision from './Vision';
import Mission from './Mission';
import Value from './Value';

function BgContentGroup() {
  const title = "Vision and Mission";
  Name(title);
  // const language = useSelector((state) => state.language.value);

  
  // const MyanText = "မျှော်မှန်းချက်နှင့် မစ်ရှင်";

  // const display = (language == "EN") ? title : MyanText;

 

  return (
    <div className="ps-6 lg:pt-0 pt-10">
        <div className="grid grid-cols-1 gap-16 lg:mt-[50px]">
        <Vision />
        <Mission />
        <Value />
        </div>
        
    
       
    </div>
    
     
  );

 
}



export default BgContentGroup;