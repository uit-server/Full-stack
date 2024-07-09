import React from 'react';
import styled from 'styled-components';
import HeadingStyle2 from '../Components/HeadingStyle2';
import { AnimationButton } from "../Components/Footer";


const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 1px solid #F5F5F5;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 1:2:1 ratio */
  gap: 10px;
  @media (min-width: 1024px) {
    grid-gap: 0 84px; /* Adjust horizontal gap between columns on larger screens */
  }
`;

const Square = styled.div`
   /* Maintain a square aspect ratio */
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Innovation = () => {
  return (
    <Container>
      <Square>
        <HeadingStyle2
              tinyText="Our Innovation"
              space="pt-5"
              sizeLead="leading-[48px]"
              size="text-3xl"
              mobileSize="text-4xl"
              mobileSizeLead="leading-9"
              mobileSpace="pt-8"
            />
      </Square>
      <div className="flex  items-center ">
        <div className="flex flex-col gap-y-4 ps-10">
            <p className="lg:leading-[50px] leading-[40px] font-[350] lg:text-[48px] tracking-normal text-sm">
            '' Towards a Brighter Future through Innovation in ICT ''
            </p>
            
          </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-y-4 ps-10">
            <p className="text-justify font-[450] text-sm">
            If it sounds good and interesting to you, you might as well choose UIT for your future.
            </p>
            <AnimationButton value="Wanna know more"/>
          </div>
      </div>
    </Container>
  );
};

export default Innovation;
