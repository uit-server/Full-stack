import React from 'react';
import './../Styles/Faq.css';
import Headline from './Headline';
import UltiWrapper from '../Components/UltiWrapper';
import PaginatedItems from './PaginatedItems';



function News(){

 
 
   
 


    
    
    return (
        <div className='news' style={{background:'#fff'}}>
            <UltiWrapper>
                    <Headline />
                    <PaginatedItems/>    
            </UltiWrapper>
        </div>
    )
}


export default News;