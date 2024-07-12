import FirstText from './Components/FirstText';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./Components/ButtonGroup";
import React, { useRef,useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { domRenderShort } from '../utils/domRender';
function CuroselDesktop() {
  
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const [stop, setStop] = useState(0);
  const { id } = useParams();
  

  // Ensure `id` is parsed to an integer
  const parsedId = parseInt(id, 10);


  const dataa = useSelector((state) => state.post.value).filter((item) => item.id !== parsedId);

  



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.3,
      slidesToSlide: 2.3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const data = [
    {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  },
  {
      title: "News title",
      type: "News type",
      discription: "UIT has amazing opportunities for the students. You are invited to take the next step forward UIT has amazing opportunities for the students. You are invited to take the next step forward"
  }
  ];

  useEffect(() => {
    setStop((window.innerWidth < 1024) ? Math.ceil(data.length/2) : Math.ceil(data.length/3) )
  },[])

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const afterChange = (previousSlide, { currentSlide }) => {
    setCurrentSlide(currentSlide);
    if (currentSlide === 0) {
      setLeft(false);
    } else {
      setLeft(true);
    }
    if (currentSlide >= stop) {
      setRight(false);
    } else {
      setRight(true);
    }
  };


  return (
    <div className="lg:py-20 py-16 relative flex lg:flex-row flex-col w-full lg:w-[111%] lg:ms-[-5.5%] lg:gap-y-0 gap-10 lg:gap-0">
      <div className="lg:ps-[5%] me-[57px] flex flex-col justify-between w-full">
        <FirstText />
        <ButtonGroup handleNext={handleNext} handlePrevious={handlePrevious} left={left} right={right} />
      </div>
      <div className="block w-[103%] lg:w-[67%] min-[1250px]:w-[77%] cursor-grab active:cursor-grabbing">
        <Carousel
          responsive={responsive}
          ref={carouselRef}
          arrows={false}
          renderButtonGroupOutside={true}
          afterChange={afterChange}
        >
          {dataa.map((item, index) => (
           
                <div key={index} className="flex flex-col me-[32px]">
                   <Link to= {`/about/news/${item.id}`} className="" onClick={
              (event) => {
                
                setTimeout(() => {
                  window.location.reload(false);
                },200);
                
              }}
              >
                {(item.image) ? <Div className="rounded-[32px] w-full aspect-video bg-[#D9D9D9]" image={item.image}></Div> : <Div2 className="rounded-[32px] w-full aspect-video bg-[#D9D9D9]"></Div2> }
              </Link>
              
              <div className="relative mt-5">
                <ul className="absolute top-0 left-[15px] list-disc marker:text-[#3798A6]">
                  <li className="font-normal text-xs lg:text-base leading-[18px] text-[#1C1D2080]">{item.type}</li>
                </ul>
                <h5 className="lg:text-xl text-base font-normal leading-7 pt-[22px] lg:pt-[26px]">
                  <Link to= {`/about/news/${item.id}`} className="hover:hoverMode" onClick={
                    (event) => {
                      
                      setTimeout(() => {
                        window.location.reload(false);
                      },200);
                      
                    }}
                    >{item.title}</Link>
                  
                </h5>
              </div>
              <p className="pt-3 lg:pt-5 font-[350] leading-[21px] lg:leading-[27px] text-sm lg:text-lg inline-block" dangerouslySetInnerHTML={{ __html: domRenderShort(item.body) }}>
            
              </p>
            </div>
              
            
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const Div = styled.div`

    background: url(${props => require(`../Images/${props.image}`)});
    background-size: cover;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

    const Div2 = styled.div`

    background-size: cover;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

export default CuroselDesktop;
