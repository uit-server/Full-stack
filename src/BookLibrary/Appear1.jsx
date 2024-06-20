import styled from 'styled-components';
import ImgOne from '../Images/BookLibrary/photo/library_1.png';
import ImgTwo from '../Images/BookLibrary/photo/library_2.png';

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


function Appear1() {

    return (
       
                         <div className="py-14 grid grid-cols-1 gap-11">
                            <div className="w-[50%] max-[388px]:h-[150px] h-[110px] flex items-end relative">
                                <span className="inline-block absolute max-[920px]:top-0 top-[15px] left-0  text-xs font-normal me-[30px] lg:me-[55px]  lg:leading-[18px] lg:text-base">
                                <div className="text-[#3798a6] inline-block relative bottom-[3.5px] px-[7px] text-xl">.</div>
                        
                                    <span className="opacity-50 leading-[18px]">Resources</span>
                            </span>
                                    <h1 className="font-normal  max-[475px]:text-3xl text-4xl leading-[38px]">We're proud to share you</h1>
                                </div>
                                <div className="w-full">
                                <AppearOne className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square "></AppearOne>
                            <h3 className="text-2xl font-normal leading-7 w-full mt-[12px]">Library Management System</h3>
                                </div>
                                <div className="w-full">
                                <AppearTwo className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square "></AppearTwo>
                            <h3 className="text-2xl font-normal leading-7 w-full mt-[12px]">Meral Portal</h3>
                                </div>
                                
                           
                         </div>
                        
                        

        
    )
}

export default Appear1;

