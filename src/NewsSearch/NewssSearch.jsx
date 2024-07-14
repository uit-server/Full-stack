import React from 'react';
import './../Styles/Faq.css';
import UltiWrapper from '../Components/UltiWrapper';
import Name from '../utils/Name';
import Resize from '../utils/useResize.jsx';
import MainView from './MainView.jsx';
import { useParams } from 'react-router-dom';
import SearchBox from '../Components/SearchBox.jsx';



function NewsSearch(){
    Name("Search Anything");
    Resize();
    const { type } = useParams();
 
 
   
 


    
    
    return (
        <div className='news' style={{background:'#fff'}}>
            <UltiWrapper>
                <SearchBox />
             
                <MainView searchData={type}/> 
            </UltiWrapper>
        </div>
    )
}


export default NewsSearch;