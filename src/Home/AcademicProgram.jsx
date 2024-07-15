import React, { useState } from 'react';
import { AnimationButton } from '../Components/Footer';
import { Link } from'react-router-dom';

function AcademicProgram() {
  const [hover, setHover] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  return (
    <div className='px-[10%] py-[72px]'>
      <h1 className='text-[72px] font-[400] pb-[40px] '>Academic Programs</h1>
      <div className='flex'>
        <div className='flex-grow w-1/2'>
          <div className='w-[70%] flex flex-col h-full bg-gray-100 p-[5%]'>
            <Link
              className='flex items-center py-[5%]'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ color: hover ? '#3798A6' : 'inherit' }}
              to='/academic/degree' // Change color on hover
            >
              <svg width='200' height='100' viewBox='0 0 129 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M126.25 54.5749L101.5 79.9408C100 81.0465 98.1875 81.5993 96.0625 81.5993C93.9375 81.5993 92.125 81.0302 90.625 79.892C89.125 78.7538 88.375 77.3554 88.375 75.6969C88.375 74.0383 89.125 72.6237 90.625 71.453L111.25 50.3798L90.625 29.3066C89.125 28.1359 88.375 26.7375 88.375 25.1115C88.375 23.4855 89.125 22.0871 90.625 20.9164C92.125 19.7457 93.9375 19.1603 96.0625 19.1603C98.1875 19.1603 100 19.7457 101.5 20.9164L126.25 46.1847C127.75 47.3554 128.5 48.7538 128.5 50.3798C128.5 52.0058 127.75 53.4042 126.25 54.5749ZM64.5 94.1847C64.4167 94.3798 64.2917 94.7538 64.125 95.3066C63.9583 95.8595 63.8333 96.2335 63.75 96.4286L63.3125 97.453L62.6875 98.4774L61.75 99.2579L60.4375 99.9408L58.75 100.282L56.5 100.429C54.5 100.429 52.5833 99.6156 50.75 97.9896C48.9167 96.3635 48.25 94.8026 48.75 93.3066L64.5 6.67249C65.9167 2.50989 69.9167 0.428589 76.5 0.428589C78.3333 0.428589 79.5625 1.19282 80.1875 2.72127C80.8125 4.24973 80.8333 5.85948 80.25 7.55054L64.5 94.1847ZM38.375 79.892C36.875 81.0302 35.0625 81.5993 32.9375 81.5993C30.8125 81.5993 29 81.0465 27.5 79.9408L2.75 54.5749C1.25 53.4042 0.5 52.0058 0.5 50.3798C0.5 48.7538 1.25 47.3554 2.75 46.1847L27.5 20.9164C29 19.7457 30.8125 19.1603 32.9375 19.1603C35.0625 19.1603 36.875 19.7457 38.375 20.9164C39.875 22.0871 40.625 23.4855 40.625 25.1115C40.625 26.7375 39.875 28.1359 38.375 29.3066L17.75 50.3798L38.375 71.453C39.875 72.6237 40.625 74.0383 40.625 75.6969C40.625 77.3554 39.875 78.7538 38.375 79.892Z' fill={hover ? '#3798A6' : 'black'}
                />
              </svg>
              <div className='flex-grow w-full text-center text-[47px] leading-[48px]'>Degree &nbsp; Program</div>
            </Link>
            <Link  
              className='flex items-center py-[5%]'
              onMouseEnter={() => setHoverSecond(true)}
              onMouseLeave={() => setHoverSecond(false)}
              style={{ color: hoverSecond ? '#3798A6' : 'inherit' }}
              to='/academic/diploma'
            >
              <svg width="200" height="100" viewBox="0 0 129 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.64286 92.0953H64.5V100.429H9.64286C7.21802 100.429 4.8925 99.5506 3.17788 97.9878C1.46326 96.425 0.5 94.3054 0.5 92.0953V8.76192C0.5 6.55178 1.46326 4.43217 3.17788 2.86936C4.8925 1.30656 7.21802 0.428589 9.64286 0.428589H119.357C121.782 0.428589 124.108 1.30656 125.822 2.86936C127.537 4.43217 128.5 6.55178 128.5 8.76192V50.4286H119.357V8.76192H9.64286V92.0953Z" fill={hoverSecond ? '#3798A6' : 'black'}/>
                <path d="M18.7857 17.0953H64.5V25.4286H18.7857V17.0953Z" fill={hoverSecond ? '#3798A6' : 'black'}/>
                <path d="M64.5 33.7619H18.7857V42.0953H64.5V33.7619Z" fill={hoverSecond ? '#3798A6' : 'black'}/>
                <path d="M18.7857 50.4286H46.2143V58.7619H18.7857V50.4286Z" fill={hoverSecond ? '#3798A6' : 'black'}/>
                <path d="M101.071 54.5953L109.812 70.0244L128.5 72.4994L114.786 83.7619L118.31 100.429L101.071 91.0536L83.8326 100.429L87.3571 83.7619L73.6429 72.4994L92.8429 70.0244L101.071 54.5953Z" fill={hoverSecond ? '#3798A6' : 'black'}/>
              </svg>

              <div className='flex-grow w-full text-center text-[47px] justify-center leading-[48px]'>
                <p>Diploma Program</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex-grow w-1/2 text-[20px] font-[400] text-justify items-center justify-center leading-[28px] '>
          <div className='flex flex-col my-[8%]'>
            <p className='py-[20px] flex-grow h-1/2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quam sapiente. Numquam, voluptatum dicta iusto,
              optio quas eius nemo ullam dolorem, facere repudiandae minima vel. Atque rerum iste quasi veniam?Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Labore, quam sapiente. Numquam, voluptatum dicta iusto, optio quas
              eius nemo ullam dolorem, facere repudiandae minima vel. Atque rerum iste quasi veniam?
            </p>
            <AnimationButton className='pt-[100px]' value='Learn More' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicProgram;
