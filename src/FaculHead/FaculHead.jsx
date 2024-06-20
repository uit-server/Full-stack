import React,{useState,useEffect } from 'react';
import useResize from '../utils/useResize';
import '../Styles/Degree.css';
import UltiWrapper from '../Components/UltiWrapper';
import { Link } from 'react-router-dom';

import axios from '../utils/axiosInstance';
import FaculTitle from './FaculTitle';
import FaculCon from './FaculCon';
import DepartmentTitle from './DepartmentTitle';
import DepartmentCon from './DepartmentCon';


function Conference() {



 
 


  
  return (
      <div className='FaculHead '>
      <UltiWrapper>
        <FaculTitle/>
        <FaculCon/>
        <DepartmentTitle/>
        <DepartmentCon/>
     </UltiWrapper>
      
      
          
      
    
    </div>
    
  );
}

export default Conference;
