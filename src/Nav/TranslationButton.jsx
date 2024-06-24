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
    setLanguage(prevLanguage => prevLanguage === 'မြန်မာ' ? 'EN' : 'MYN');
    
    dispatch(changeLanguage());
   

  };

  return (
    <button onClick={toggleLanguage} className='translateBtn'>
      <span style={{opacity:language==='EN'?1:0.5}}>EN</span>
      <span>|</span>
      <span style={{opacity:language==='မြန်မာ'?1:0.5}}>မြန်မာ</span>
    </button>
  );
};

export default ToggleButton;