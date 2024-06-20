import styled from 'styled-components';
import { useSelector } from 'react-redux';
import onFocus from '../utils/filterRole';

const Span = styled.div`
    

    &::after {
        content: "${props => props.after}";
        position: absolute;
        top: 0;
        left: 101%;
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

function Role1() {
    const role  = useSelector((state) => state.role.value);

    data = onFocus(role, data );

    return (
       
                         <div className="py-[72px]">
                            <div className=" whitespace-wrap">
                        <span className="inline-block relative bottom-[5px]  text-xs font-normal ms-[5px] me-[30px] lg:me-[55px]  lg:leading-[18px] lg:text-base">
                            <div className="text-[#3798a6] inline-block relative bottom-[3.5px] px-[7px] text-xl">.</div>
                    
                                <span className="opacity-50 ">I am a</span>
                        </span>
                        {data.map(
                            (item) => 
                                <Span className={`text-[32px] leading-9 font-normal color-[#1c1d20] inline-block me-[40px] mb-4 relative hover:cursor-pointer ${(item.signal) ? "opacity-100" : "opacity-50"} hover:opacity-100 transition duration-200`} after={item.number} signal={item.signal}>{item.content}</Span>
                            )}
                        </div>
                        <div className="mt-8">
                                <span className="font-normal leading-7 text-xl text-[#1C1D2080]">Filter:</span><span className="font-normal leading-7 text-xl ms-[12px]" >{role}</span>
                            </div>
                        
                         </div>
                        
                        

        
    )
}

export default Role1;




