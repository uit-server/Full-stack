import styled from 'styled-components'



    const Container = styled.div`

    display: grid;
    grid-template-column: 1fr;

    `;

    const Pic = styled.div`

    background: url(${props => props.image});
    background-size: cover;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

function MajorImg({Img}) {

   



  return (
        <div className="pt-[10px] lg:scroll-mt-[134px] h-auto" id="image">
            <Container>
            {(Img.length !== 0) ?  Img.map((img,index) => <Pic key={index} className="rounded-[32px] lg:mb-0 mb-10" image={img}></Pic>   ) : <p></p>}
            </Container>
            
      
        </div>
         
  );
}

export default MajorImg;

