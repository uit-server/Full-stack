import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Images/BookLibrary/photo/satkhan.jpg'
import img2 from '../Images/BookLibrary/photo/sixyearjourney.jpg'
import img3 from '../Images/BookLibrary/photo/library1.jpg'
import img4 from '../Images/BookLibrary/photo/entrance.jpg'
import { AnimationButton } from '../Components/Footer';

const images = [
  {
    id:1,
    image: img1
  },
  {
    id:2,
    image: img2
  },
  {
    id:3,
    image: img3
  },
  {
    id:4,
    image: img4
  }
]
const CarouselSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image)=>(
        <div key={image.id} className='relative'>
          <img src={image.image} alt="Slide 1" className='w-full h-[690px]'/>
          <div className='absolute w-full h-[690px] flex flex-col bg-gradient-to-bottom top-0 '>
            <div className='h-[30%]'>

            </div>
            <div className='text-white px-[10%]'>
                <div className='text-[80px] leading-[80px]'>Study at UIT:</div>
                <div className='text-[80px] leading-[80px]'>Expreience</div>
                <div className='text-[80px] leading-[80px]'>New Technology</div>
              <div className='mt-[3%]'>
                <AnimationButton value='Register Now'/>
              </div>
            </div>
          </div>
        </div>)
      )}
    </Slider>
  );
};

export default CarouselSlider;
