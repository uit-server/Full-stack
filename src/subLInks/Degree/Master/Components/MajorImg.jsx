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
        <div className="pt-7 md:pt-8 lg:scroll-mt-[134px] h-auto" id="image">
            <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">Research lab</h3>
            <Container>
            {Img.map((img) => <Pic className="rounded-[32px] mb-7 md:mb-8" image={img}></Pic>   )}
            </Container>
            
      
        </div>
         
  );
}

export default MajorImg;

