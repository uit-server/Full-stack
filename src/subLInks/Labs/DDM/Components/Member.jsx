import React from "react";
import styled from 'styled-components';
import IndividualMember from './IndividualMember';




const Div2 = styled.div``;

const Div = styled.div`
background: url(${props => props.image});
background-size: cover;
object-fit: cover;
background-position: center center;
opacity: 70%;`;


export default function Member({members}){

 


    return(
        <div className="memberWrap py-[56px] pt-[80px]" id="Members">
            <div className="flex flex-col justify-center">
                <div className="relative">
                    {/* <div className="smallMemberTitle top-[-10px]">
                        <p className="flex-none text-[#3798a6] text-lg me-[7px] lg:me-[10px] mb-2.5">.</p>
                        <p className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Members</p>
                    </div> */}
                    <h2 className="text-2xl md:text-[32px] font-normal">Meet Our Lab Members</h2>
                </div>
                {
                    members.map((member,index) => (
                        <div key={index}>
                            <IndividualMember member={member}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}




// .memberImg{
//     width: 206px;
//     height: 257.75px;
// }

// .memberImg{
//     width: 288px;
//     border-radius: 32px;
//     height: 360px;
//     background-color: #d9d9d9!important; 
//  }