import '../Styles/Faq.css';
import Headline from './Headline';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import PdfView from './PdfView';
import UltiWrapper from '../Components/UltiWrapper';


function PdfPage(){

    const windowWidth = useResize("High Performance Computing (HPC)");

    const pdfFile = `${process.env.PUBLIC_URL}/drylab.pdf`;
 

    
    return (
        <div className='pdfPage' style={{background:'#fff'}}>
            <UltiWrapper>
                    <Headline />    
                    <PdfView file={pdfFile}/>
            </UltiWrapper>
        </div>
    )
}


export default PdfPage;