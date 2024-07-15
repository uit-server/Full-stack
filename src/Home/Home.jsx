
import Heading from './Heading';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import UltiWrapper from '../Components/UltiWrapper';
import WhoWeAre from './WhoWeAre';
import Innovation from './Innovation';
import HoverPart from './HoverPart';
import News from './News';
import DataPart from './DataPart';


    
function Home() {


  const language = useSelector((state) => state.language.value);

  const title = "Home";
  const MyanText = "အိမ်";

  const display = (language === "EN") ? title : MyanText;
  const windowWidth = useResize(title);

  const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };

  return (
    <>
    <UltiWrapper className='p-[5%]'>
    <Heading name="The University of Information Technology" />
    <WhoWeAre/>
    <Innovation/>
    <HoverPart/>
    <News/>
    <DataPart/>
    </UltiWrapper>
    </>
  );

 
}



export default Home;


