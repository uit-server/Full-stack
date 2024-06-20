import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './../Styles/TranslationButton.css';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../store/languageSlice';


const ToggleButton = () => {


  const dispatch = useDispatch()

  const [language, setLanguage] = useState(() => {
    return sessionStorage.getItem('language') || 'EN';
  });



  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'MYN' ? 'EN' : 'MYN');
    
    dispatch(changeLanguage());
   

  };

  return (
    <button onClick={toggleLanguage} className='translateBtn'>
      <span style={{opacity:language==='EN'?1:0.5}}>EN</span>
      <span>|</span>
      <span style={{opacity:language==='MYN'?1:0.5}}>MYN</span>
    </button>
  );
};

export default ToggleButton;