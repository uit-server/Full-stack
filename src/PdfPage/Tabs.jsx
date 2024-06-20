

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';

function Tabs() {
    return ( 
        <div className="flex justify-between items-center py-[30px] border-t-2 border-[#f5f5f5] xs:mt-[48px] mt-[16px] ">
            <Tab dir='Previous' year='First' icon={faArrowLeft}/>
            <Tab dir='Next' year='Third' icon={faArrowRight}/>
        </div>
     );
}

const Container = styled.div`
    cursor: pointer;

    &:hover .icon{
        opacity: .8;
        transform: translateX(0);
    }
`

const PrevIcon = styled.span`
    opacity: 0;
    transform: translateX(10px);
    transition: opacity .3s, transform .3s;

    @media (max-width: 1024px){
        opacity: .8;
    }
`

const NextIcon = styled.span`
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity .3s, transform .3s;

    @media (max-width: 1024px){
        opacity: .8;
    }
`


function Tab({dir,year,icon}){
    return (
        <Container>
            <div className="flex flex-col gap-[4px]">
                {dir==='Previous' ? (
                <div className="flex gap-[3px] lg:gap-[16px] items-center">
                    <h5 className="text-[13px] sm:text-[16px] md:text-[20px] text-[#1c1d20] opacity-80">{dir} syllabus</h5>
                    <PrevIcon className='icon'>
                        <FontAwesomeIcon icon={icon} className='text-[11px] sm:text-[13px] md:text-[15px] text-[#1c1d20] opacity-80'/>
                    </PrevIcon>
                </div>
                ) : 
                <div className="flex gap-[5px] lg:gap-[16px] items-center">
                    <NextIcon className='icon'>
                        <FontAwesomeIcon icon={icon} className='text-[11px] sm:text-[13px] md:text-[15px] text-[#1c1d20] opacity-80'/>
                    </NextIcon>
                    <h5 className="text-[13px] sm:text-[16px] md:text-[20px]  text-[#1c1d20] opacity-80">{dir} syllabus</h5>
                </div>}
                <h5 className={`text-[13px] sm:text-[16px] md:text-[20px]  text-[#1c1d20] w-full ${dir === 'Next' ? 'text-center' : ''}`}>{year} year</h5>
            </div>
        </Container>
    )
}

export default Tabs;