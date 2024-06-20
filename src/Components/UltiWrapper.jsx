import React,{useState,useEffect } from 'react';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import '../Styles/Degree.css';
import Footer from './Footer';


function UltiWrapper({children,className}) {

  const windowWidth = useResize("");
  const [dataFromNav, setDataFromNav] = useState(true);
  const [windowWide, setWindowWide ] = useState(0);

  const handleDataFromNav = (data) => {
      setDataFromNav(data);
  };

  useEffect(()=>{
    const handleResize = () => {
        setWindowWide(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize); 
    }

},[])
   

 

  
  return (
      <>
      <Navbar sendDataToParent={handleDataFromNav} />
      <div className={windowWidth <= 1024 && !dataFromNav ? `mainUnactive main px-2 ${className}` : `main px-2 ${className}`} style={{ backgroundColor: "#FFFFFF"}}>

        {children}

      </div>
      <Footer/>
          
      
    
    </>
    
  );
}

export default UltiWrapper;
