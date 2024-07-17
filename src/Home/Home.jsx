import React,{ useState } from 'react';
import WhoWeAre from './WhoWeAre';
import HoverPart from './HoverPart';
import News from './News';
import DataPart from './DataPart';
import RectorWelcomeMessage from './RectorWelcomeMessage';
import Navbar from '../Nav/Navbar';
import Footer from '../Components/Footer';
import AcademicProgram from './AcademicProgram';
import Speech from './Speech';
import CarouselSlider from './CarouselSlider';


    
function Home() {
  return (
    <>
    <Navbar/>
    <CarouselSlider/>
    <WhoWeAre/>
    <RectorWelcomeMessage/>
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


