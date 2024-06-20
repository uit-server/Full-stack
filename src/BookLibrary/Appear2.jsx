import ImgOne from '../Images/BookLibrary/photo/library_1.png';
import ImgTwo from '../Images/BookLibrary/photo/library_2.png';
import styled from 'styled-components';

const AppearOne = styled.div`

    background: url(${ImgOne});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;

    const AppearTwo = styled.div`

    background: url(${ImgTwo});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    
    
        


    `;


function Appear2() {



    return (
       
                         <div className="py-[72px] grid grid-cols-2 gap-8">
                            <div className="w-full pt-14">
                            <AppearOne className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square"></AppearOne>
                            <h3 className="text-[32px] font-normal leading-9 w-full mt-[20px]">Library Management System</h3>
                            </div>
                            <div className="w-full relative">
                                <div className="w-[75%] mx-auto mb-14 h-[186px] flex items-end">
                                <span className="inline-block absolute  max-[1355px]:top-[15px] top-0 left-[13%]  text-xs font-normal me-[30px] lg:me-[55px]  lg:leading-[18px] lg:text-base">
                                <div className="text-[#3798a6] inline-block relative bottom-[3.5px] px-[7px] text-xl">.</div>
                        
                                    <span className="opacity-50 leading=[18px]">Resources</span>
                            </span>
                                    <h1 className="font-normal max-[1355px]:text-6xl text-7xl leading-[72px]">We're proud to share you</h1>
                                </div>
                            <AppearTwo className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square "></AppearTwo>
                            <h3 className="text-[32px] font-normal leading-9 w-full mt-[20px]">Meral Portal</h3>
                            </div>
                            
                            
                         </div>
                        
                        

        
    )
}

export default Appear2;


