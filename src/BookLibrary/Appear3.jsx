import styled from 'styled-components';

import ImgThree from '../Images/BookLibrary/photo/library_3.png';
import ImgFour from '../Images/BookLibrary/photo/library_4.png';
import ImgFive from '../Images/BookLibrary/photo/library_5.png';

const AppearThree = styled.div`

    background: url(${ImgThree});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

    const AppearFour = styled.div`

    background: url(${ImgFour});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

    const AppearFive = styled.div`

    background: url(${ImgFive});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;


function Appear3() {

    return (
       
        <div className="py-14 grid grid-cols-1 gap-11">
        <div className="w-[50%] max-[400px]:h-[150px] h-[110px] flex items-end relative">
            <span className="inline-block absolute max-[920px]:top-0 top-[15px] left-0  text-xs font-normal me-[30px] lg:me-[55px]  lg:leading-[18px] lg:text-base">
            <div className="text-[#3798a6] inline-block relative bottom-[3.5px] px-[7px] text-xl">.</div>
    
                <span className="opacity-50 leading=[18px]">Research support</span>
        </span>
                <h1 className="font-normal  max-[490px]:text-3xl text-4xl leading-[38px]">Find the right help for you</h1>
            </div>
            <div className="w-full">
            <AppearThree className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square "></AppearThree>
        <h3 className="text-2xl font-normal leading-7 w-full mt-[12px]">IEEE Digital Library</h3>
            </div>
            <div className="w-full">
            <AppearFour className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square "></AppearFour>
        <h3 className="text-2xl font-normal leading-7 w-full mt-[12px]">Universities' Central library</h3>
            </div>
            <div className="w-full">
            <AppearFive className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square "></AppearFive>
        <h3 className="text-2xl font-normal leading-7 w-full mt-[12px]">Education with Integrity</h3>
            </div>
            
       
     </div>
                        
                        

        
    )
}

export default Appear3;