import styled from 'styled-components';
import React from 'react';
import HeadingStyle2 from '../Components/HeadingStyle2';
import { AnimationButton } from "../Components/Footer";
import PaginatedItems from './PaginatedItems';

const Container = styled.div`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  border-top: 1px solid #F5F5F5;
  display: grid;
  grid-template-columns: 1fr 3fr; /* 1:3 ratio */
  gap: 10px;
  @media (max-width: 1023px) {
    grid-template-columns: 1fr; /* For smaller screens, use 1 column */
  }
`;


const News = () => {
  return (
    <div>
      <Container>
        <div className="aspect-square rounded-[32px] flex flex-col justify-start mt-[50px] items-start">
            <HeadingStyle2
                name="The latest from UIT"
                tinyText="The News"
                space="pt-[20px]"
                sizeLead="leading-[50px]"
                size="text-[50px]"
                mobileSize="text-4xl"
                mobileSizeLead="leading-9"
                mobileSpace="pt-8"
                />
            <AnimationButton value="Wanna know more"/>
                
        </div>
        <div className="flex justify-center items-center pt-5">
          <PaginatedItems/>
        </div>
      </Container>
    </div>
  );
};

export default News