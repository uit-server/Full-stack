import styled from 'styled-components'
import Img from '../Images/researchLab.png';
import { useSelector } from 'react-redux';



    const Container = styled.div`

    position: relative;
    width: 100%;
    height: 51vw;

    @media only screen and (min-width: 1024px) {
    
        height: 37.6vw;
    }
      

    
        


    `;

function MajorImg() {

    const majorImg = useSelector((state) => state.data.value.images.heading[0]) || Img;




    const Pic = styled.div`

    background: url(${props => require(`../Images/${props.image}`)});
    background-size: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;


  return (
        <div className="py-7" id="image">
            
            <Container>
            <Pic className="rounded-[32px]" image={majorImg}></Pic>  
            </Container>
            
      
        </div>
         
  );
}

export default MajorImg;
