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
      <div className={windowWidth <= 1429 && !dataFromNav ? `mainUnactive main ${className}` : `main ${className}`} style={{ backgroundColor: "#FFFFFF",marginBottom: 20}}>

        {children}

      </div>
      <Footer/>
          
      
    
    </>
    
  );
}

export default UltiWrapper;
