import styled from 'styled-components'



    const Container = styled.div`

    display: grid;
    grid-template-column: 1fr;

    `;

function MajorImg({Img}) {

    const Pic = styled.div`

    background: url(${props => props.image});
    background-size: cover;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;


  return (
        <div className="pt-[10px] lg:scroll-mt-[134px] h-auto" id="image">
            <Container>
            {Img.map((img) => <Pic className="rounded-[32px] lg:mb-0 mb-10" image={img}></Pic>   )}
            </Container>
            
      
        </div>
         
  );
}

export default MajorImg;

