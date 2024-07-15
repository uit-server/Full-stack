

import React from 'react';
import UltiWrapper from '../Components/UltiWrapper';
import Name from '../utils/Name';
import ImageHeader from '../Components/ImageHeader';
import BodyPart from './BodyPart';
import useResize from '../utils/useResize';
    
function Visimisi() {
  const title = "Vision and Mission";
  Name(title);
  useResize();
  // const language = useSelector((state) => state.language.value);

  
  // const MyanText = "မျှော်မှန်းချက်နှင့် မစ်ရှင်";

  // const display = (language == "EN") ? title : MyanText;

  return (
    <UltiWrapper className='p-[5%]'>
      <ImageHeader name="Vision and Mission" />
      <BodyPart />
      
    </UltiWrapper>
     
  );

 
}



export default Visimisi;