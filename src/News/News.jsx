import React from 'react';
import './../Styles/Faq.css';
import Headline from './../Components/Headline';
import UltiWrapper from '../Components/UltiWrapper';
import PaginatedItems from './PaginatedItems';
import Name from '../utils/Name';



function News(){
    Name("News");

 
 
   
 


    
    
    return (
        <div className='news' style={{background:'#fff'}}>
            <UltiWrapper>
                    <Headline title='News' MyanText='သတင်း'/>
                    <div className='p-[5%]'>
                    <PaginatedItems/> 
                    </div>
            </UltiWrapper>
        </div>
    )
}


export default News;