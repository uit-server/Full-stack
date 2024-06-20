import styled from 'styled-components';
import { useSelector } from 'react-redux';
import onFocus from '../utils/filterRole';

const Span = styled.div`
    opacity:  ${props => props.signal ? "100%" : "50%"};

    &::after {
        content: "${props => props.after}";
        position: absolute;
        top: 0;
        left: 100%;
        font-size: 12px;
        font-weight: 400;
        line-height: 16.1px;
        text-align: left;


    }
`

let data = [
    {
        content: "faculty member",
        signal: 0,
        number: 20
    },
    {
        content: "admin/professional staff",
        signal: 0,
        number: 20
    },
    {
        content: "non-academic",
        signal: 0,
        number: 20
    },
    {
        content: "under-graduate",
        signal: 0,
        number: 20
    },
    {
        content: "master",
        signal: 0,
        number: 20
    },
    {
        content: "Ph.D",
        signal: 0,
        number: 20
    },
    {
        content: "diploma",
        signal: 0,
        number: 20
    },

]

function Role2() {

    const role  = useSelector((state) => state.role.value);
    data = onFocus(role, data );

    return (
       
                         <div className="py-14">
                            <div className="relative whitespace-wrap pt-[30px]">
                            
                            <span className="inline-block absolute top-0 left-0  text-xs font-normal me-[30px] lg:me-[55px]  lg:leading-[18px] lg:text-base">
                                <div className="text-[#3798a6] inline-block relative bottom-[3.5px] px-[7px] text-xs">.</div>
                        
                                    <span className="opacity-50 leading=[18px]">I am </span>
                            </span>
                            {data.map(
                                (item) => 
                                    <Span className="text-2xl leading-7 font-normal color-[#1c1d20] inline-block me-[22px] relative mb-[2px]" after={item.number} signal={item.signal}>{item.content}</Span>
                                )}
                            </div>
                            <div className="mt-4">
                                <span className="font-normal leading-7 text-base text-[#1C1D2080]">Filter:</span><span className="font-normal leading-7 text-base ms-[8px]" >{role}</span>
                            </div>
                         </div>
                        
                        

        
    )
}

export default Role2;


