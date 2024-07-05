import styled from 'styled-components';
import React from 'react';
import HeadingStyle2 from '../Components/HeadingStyle2';
import { AnimationButton } from "../Components/Footer";

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 1px solid #F5F5F5;
  display: grid;
  grid-template-columns: 1fr 3fr; /* 1:3 ratio */
  gap: 10px;
  @media (max-width: 1023px) {
    grid-template-columns: 1fr; /* For smaller screens, use 1 column */
  }
`;

const Square = styled.div``;

const WhoWeAre = () => {
  return (
    <div>
      <Container>
        <div className=" rounded-[32px] flex justify-center items-center">
        <HeadingStyle2
              tinyText="Who we are?"
              space="pt-5"
              sizeLead="leading-[48px]"
              size="text-5xl"
              mobileSize="text-4xl"
              mobileSizeLead="leading-9"
              mobileSpace="pt-8"
            />
        </div>
        <div className="flex justify-center items-center pt-5">
          <div className="flex flex-col gap-y-4 ps-10">
            <p className="lg:leading-[35px] leading-[40px] text-justify font-[350] lg:text-3xl tracking-normal text-sm">
            &emsp;&emsp;&emsp;&emsp;The UIT has amazing opportunities for the students. You are invited to take the next step forward in your way to success and join our university. Students who want to fulfil their academic ambitions, intellectual passions and the ones who want to be IT professionals can come to our University.
            </p>
            <AnimationButton value="Wanna know more"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeAre;
