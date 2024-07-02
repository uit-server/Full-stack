import '../Styles/Degree.css';
import '../Styles/Faculty.css';
import Headline from './Components/Headline';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import UltiWrapper from '../Components/UltiWrapper';
import GoalMission from './GoalMission';
import PaginatedItems from './PaginatedItems';

function Research(){


    const header = [
        "Our Researches",
    
      ]

      const headerMobile = [
        "Our Researches",
        
      ]

    return (
        <div className='research overflow-x-hidden' style={{background:'#fff'}}>
            <UltiWrapper>
                    <Headline header={header} headerMobile={headerMobile} />
                    <GoalMission />
                    <PaginatedItems />
            </UltiWrapper>

            
        </div>
    )
}


export default Research;