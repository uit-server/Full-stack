
import '../Styles/Degree.css';
import Headline from './Headline';
import MainSec from './MainSec';

import Image from './Image';
import Text from './Text';
import React from 'react';
import useResize from '../utils/useResize';
import UltiWrapper from '../Components/UltiWrapper';

function App() {
    const windowWidth = useResize("Diploma Programs");



  
  return (
      <>
          <UltiWrapper className='p-[5%]'>
          
          <Headline />
          <Image />
          <Text />
          <MainSec />
          {/* <Trivia /> */}
      
    </UltiWrapper>
    </>
    
  );
}

export default App;
