
import Overview from './Components/Overview';
import Image from '../Images/researchLab.png';
import ImgSection from './Components/ImgSection';
import ShareSpace from './layout/ShareSpace';
import { useSelector } from 'react-redux';
import React from 'react';
import { domRender} from '../utils/domRender';


const Img =[Image];


function BgPart() {



  let body = domRender(useSelector((state) => state.blog.value.body));

  const potrait = useSelector((state) => state.blog.value.images.portrait);
  const landscape = useSelector((state) => state.blog.value.images.landscape);
  const head = useSelector((state) => state.blog.value.title);



    return (
      <>
      <div className="lg:ms-7">
        <Overview head={head} paragraph={body} />
        <ImgSection Img={Img} potrait={potrait} landscape={landscape}/>
      </div>
      
      {(window.innerWidth < 1024 ) && <div className=" mb-[68px]"><ShareSpace /></div>}
     
      </>
    );
    
   
  }
  
  export default BgPart;


