import '../Styles/Degree.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import Frame4 from './Frame4';
import Frame6 from './Frame6';
import Frame7 from './Frame7';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import UltiWrapper from '../Components/UltiWrapper';

function Admission(){
    const windowWidth = useResize("Admissions information and requirements");
    

    


 

    
    return (
        <>
            <UltiWrapper>
                    <Headline />
                    
                    <Frame4 />
                    <Frame6 />
                    <Frame7 />
                </UltiWrapper>

            
        </>
    )
}


export default Admission;