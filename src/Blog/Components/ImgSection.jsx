import styled from 'styled-components'




function MajorImg({Img,potrait,landscape}) {

    const Div = styled.div`

    background: url(${props => require(`../../Images/${props.image}`)});
    background-size: cover;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    background-position: center center;
    border-radius: 32px;
    
    
        


    `;

    const Div2 = styled.div`

    background: url(${props => require(`../../Images/${props.image}`)});
    background-size: cover;
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    background-position: center center;
    border-radius: 32px;
    
    
        


    `;

    

    let boxOne = [...potrait];
    let boxTwo = [...landscape];
    let data = [];


    let length = (Math.ceil(boxOne.length/2) > boxTwo.length) ? Math.ceil(boxOne.length / 2) : boxTwo.length;

    let i = 0;
    while(i < length) {
        let landscape;
        let potrait = [];
        if(boxOne.length >= 1 )  {
            potrait[0] = boxOne.pop();
            potrait[1] = boxOne.pop(); 



        } 

        if(boxTwo.length > 0)  landscape = boxTwo.pop();

        data.push({
            potrait: potrait,
            landscape: landscape
        })
        i++;
         
    }


 

  return (
        <div className="py-7 lg:py-8 lg:scroll-mt-[134px] h-auto flex flex-col gap-y-[10px] lg:gap-y-8" id="photo">
            {
                data.map((item) =>
                    <>
                        {item.landscape && <Div image={item.landscape}></Div> }
                    
                            {(item.potrait.length != 0) &&
                            <div className="grid grid-cols-2 gap-x-[10px] lg:gap-x-8">    
                            <Div2  image={item.potrait[0]}></Div2>
                            <Div2  image={item.potrait[1]}></Div2>
                            </div>}
                      
                    </>


                )
            }

            
      
        </div>
         
  );
}

export default MajorImg;

