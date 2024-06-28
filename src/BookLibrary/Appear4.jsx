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

function Appear4() {

    return (
       
        <div className="py-[72px] grid grid-cols-2 gap-8">
        
        <div className="w-full relative">
            <div className="w-[75%] mx-auto mb-14 h-auto min-h-[186px] flex items-end">
            <span className="inline-block absolute max-[1355px]:top-[15px] top-0 left-[13%]  text-xs font-normal me-[30px] lg:me-[55px]  lg:leading-[18px] lg:text-base">
            <div className="text-[#3798a6] inline-block relative bottom-[3.5px] px-[7px] text-xl">.</div>
    
                <span className="opacity-50 leading=[18px]">Research support</span>
        </span>
                <h1 className="font-normal max-[1355px]:text-6xl text-7xl leading-[72px]">Find the right help for you</h1>
            </div>
            <a href="https://ieeexplore.ieee.org/Xplore/home.jsp"><AppearThree className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square "></AppearThree></a>
        
        <h3 className="text-[32px] font-normal leading-9 hover:hoverMode mt-[20px]"><a href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE Digital Library</a></h3>
        </div>
        <div className="w-full pt-14">
        <a href="https://www.uclmyanmar.org/"><AppearFour className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square"></AppearFour></a>
        
        <h3 className="text-[32px] font-normal leading-9 hover:hoverMode mt-[20px] mb-16"><a href="https://www.uclmyanmar.org/">Universities' Central library</a></h3>

        <a href="https://www.turnitin.com/">
        <AppearFive className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square"></AppearFive>
        </a>
        
        <h3 className="text-[32px] font-normal leading-9 hover:hoverMode mt-[20px]"><a href="https://www.turnitin.com/">Education with Integrity</a></h3>
        </div>
        
        
     </div>
                        
                        

        
    )
}

export default Appear4;