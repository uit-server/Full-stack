
import Heading from './Heading';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';

import { useSelector } from 'react-redux';
import WhoWeAre from './WhoWeAre';
import HoverPart from './HoverPart';
import News from './News';
import DataPart from './DataPart';
import Description from './Description';
import Navbar from '../Nav/Navbar';
import Footer from '../Components/Footer';
import AcademicProgram from './AcademicProgram';
import Speech from './Speech';


    
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
<<<<<<< HEAD
    <UltiWrapper className='p-[5%]'>
=======
    <Navbar/>
>>>>>>> upstream/master
    <Heading name="The University of Information Technology" />
    <WhoWeAre/>
    <Description/>
    <AcademicProgram/>
    <HoverPart/>
    <News/>
    <DataPart/>
    <Speech/>
    <Footer/>
    </>
  );

 
}



export default Home;


