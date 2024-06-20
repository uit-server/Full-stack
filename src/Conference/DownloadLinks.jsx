import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { useSelector } from 'react-redux';


export default function DownloadLinks({className}){

    const conferenceBook = useSelector((state) => state.data.value.book);
    const brochure = useSelector((state) => state.data.value.brochure);

    const DownloadIcon = styled(FontAwesomeIcon)`
        transform: translateX(-300%);
        transition: transform 0.3s ease;

        @media only screen and (max-width:1023px){
            transform: translateX(-120%);
        }
    `

    const DownloadText = styled.span`
        cursor: pointer;
        overflow-x: hidden;

        &:hover ${DownloadIcon} {
            transform: translateX(-120%);
        }
    `

    

    return(
        <div className={className}>
            <h5 className="text-[16px] text-[#1c1d20] opacity-50 text-left mt-10 mb-3">PDF download links</h5>
            <div className="flex flex-col gap-[12px] w-full">
            {conferenceBook && <a href={require(`../Document/${conferenceBook}`)} download={conferenceBook}>
                <div className="flex items-center">
                    
                    <DownloadText className="gef p-2 px-10 bg-[#f0f8ff] text-[16px] text-[#1c1d20] rounded-[10px] relative">
                    <DownloadIcon icon={faDownload} className='abc bg-[#000] text-[#fff] p-1 rounded-[5px] absolute'/>
                    {conferenceBook}</DownloadText>
                </div>
                </a>}
            
                <a href={require(`../Document/${brochure}`)} download='brochure'>
                <div className="flex items-center">
                    
                    <DownloadText className="gef p-2 px-10 bg-[#f0f8ff] text-[16px] text-[#1c1d20] rounded-[10px] relative">
                    <DownloadIcon icon={faDownload} className='abc bg-[#000] text-[#fff] p-1 rounded-[5px] absolute'/>
                    {brochure}</DownloadText>
                </div>
                </a>
                
            </div>
        </div>
    )
}