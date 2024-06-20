import Img from '../Images/syllabus.png';
import styled from 'styled-components';
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 51vw;

  @media only screen and (min-width: 1024px) {
    height: 37.6vw;
  }
`;

const Pic1 = styled.div`
  background: url(${Img});
  background-size: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center center;
  border-radius: 32px;
`;

// insert //props => props.img in Img

const Pic2 = styled.div`
  background: url(${Img});  
  background-size: cover;
  object-fit: cover;
  background-position: center center;
  border-radius: 32px;
  opacity: 0.7;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PortraitWrapper = styled.div`
  width: 49%;
  margin-bottom: 8%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 4%;
  }
  .pic {
    width: 100%;
    height: 51vw;
    @media only screen and (min-width: 768px) {
      height: 24.1vw;
    }
    @media only screen and (min-width: 1024px) {
      height: 18.3vw;
    }
  }
`;


function ImageSection() {

  // const {data,loading,error} = useFetch('http://localhost:4000/confrence/1','GET');

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!data || !data.images || data.images.length === 0) return <div>No images found</div>;

  const images = [
    {"img":"20240516171320_Americano.jpg","style":"landscape"},
    {"img":"20240516171320_Americano.jpg","style":"portrait"},
    {"img":"20240516171320_Americano.jpg","style":"portrait"},
    {"img":"20240516171320_Americano.jpg","style":"landscape"},
    {"img":"20240516171320_Americano.jpg","style":"portrait"},
    {"img":"20240516171320_Americano.jpg","style":"landscape"},
    {"img":"20240516171320_Americano.jpg","style":"portrait"},
    {"img":"20240516171320_Americano.jpg","style":"portrait"},
    {"img":"20240516171320_Americano.jpg","style":"portrait"}
  ]

  const imgOne = useSelector((state) => state.data.value.images.landscape);
  const imgTwo = useSelector((state) => state.data.value.images.portrait);

  const landscapes = (imgOne.length == 0) ? images.filter(image => image.style === 'landscape') : imgOne;
  const portraits = (imgTwo.length == 0) ? images.filter(image => image.style === 'portrait') : imgTwo;

  // const landscapes = useSelector((state) => state.data.value.images.landscape) || useSelector((state) => state.data.value.images.potrait) ;
  // const portraits = useSelector((state) => state.data.value.images.potrait) || images.filter(image => image.style === 'portrait');



  const groupedImages = [];
  let i = 0, j = 0;

  while (i < landscapes.length && j < portraits.length - 1) {
    const group = [
      landscapes[i],
      portraits[j],
      portraits[j + 1]
    ];
    groupedImages.push(group);
    i++;
    j += 2;
  } 



  return (
    <div className="pt-5" id="image">
      {groupedImages.map((group, index) => (
        <div key={index} className='flex flex-col gap-[6px] md:gap-[15px]'>
          <Container>
            <Pic1 img={group[0].img} />
          </Container>
          <GroupContainer>
            {group.slice(1).map((image, idx) => (
              <PortraitWrapper key={idx}>
                <Pic2 img={image.img} className="pic" />
              </PortraitWrapper>
            ))}
          </GroupContainer>
        </div>
      ))}
    </div>
  );
};
  
  export default ImageSection;


  // 