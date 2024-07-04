import React from 'react';
import './../Styles/Faq.css';
import Headline from './Headline';
import UltiWrapper from '../Components/UltiWrapper';
import PaginatedItems from './PaginatedItems';
import Name from '../utils/Name';



function News(){
    Name("News");

 
 
   
 


    
    
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