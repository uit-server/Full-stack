import '../Styles/Degree.css';
import Headline from '../Components/Headline';
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
                    <Headline title='Admission Information and Requirements' MyanText='Admission Information and Requirements'/>
                    
                    <div className='px-[5%]'>
                    <Frame4 />
                    <Frame6 />
                    <Frame7 />
                    </div>
                </UltiWrapper>

            
        </>
    )
}


export default Admission;