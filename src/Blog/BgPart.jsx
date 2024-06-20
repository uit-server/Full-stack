
import Overview from './Components/Overview';
import Image from '../Images/researchLab.png';
import Img2 from '../Images/Faculty/CS/Teachers/Teacher_2.png';
import ImgSection from './Components/ImgSection';
import ShareSpace from './layout/ShareSpace';
import { useSelector } from 'react-redux';
import React from 'react';


const Img =[Image];

// const landscape = [Image,Image,Image,Image,Image];
// const potrait = [Img2, Img2];



function BgPart() {

  const paragraph = [useSelector((state) => state.blog.value.body).split('\r\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))];
  const potrait = useSelector((state) => state.blog.value.images.portrait);
  const landscape = useSelector((state) => state.blog.value.images.landscape);
  const head = useSelector((state) => state.blog.value.title);



    return (
      <>
      <div className="lg:ms-7">
        <Overview head={head} paragraph={paragraph} />
        <ImgSection Img={Img} potrait={potrait} landscape={landscape}/>
      </div>
      
      {(window.innerWidth < 1024 ) && <div className=" mb-[68px]"><ShareSpace /></div>}
      </>
      
    );
  
   
  }
  
  export default BgPart;


