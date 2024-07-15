import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Images/BookLibrary/photo/satkhan.jpg'
import img2 from '../Images/BookLibrary/photo/sixyearjourney.jpg'
import img3 from '../Images/BookLibrary/photo/library1.jpg'
import img4 from '../Images/BookLibrary/photo/entrance.jpg'

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
    // waitForAnimate: false,
    pauseOnHover: false
  };

  return (      
    <Slider {...settings}>
      <div >
        <img src={img1} alt="Slide 1" className='w-full h-[50vh]'/>
      </div>
      <div>
        <img src={img2} alt="Slide 2" className='w-full h-[50vh]'/>
      </div>
      <div>
        <img src={img3} alt="Slide 3" className='w-full h-[50vh]'/>
      </div>
      <div>
        <img src={img4} alt="Slide 4" className='w-full h-[50vh]'/>
      </div>
    </Slider>
  );
};

export default CarouselSlider;
