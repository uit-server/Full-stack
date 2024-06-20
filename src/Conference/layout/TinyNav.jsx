import { useState,useEffect } from 'react';
import DownloadLinks from '../DownloadLinks';
import NavBody from './NavBody';
import NavBody2 from './NavBody2';

function TinyNav({className, attr}) {
  

    return (
      
      <div  className={className} >
        <center>
            {attr ? <NavBody2 /> : <NavBody /> }

            {window.innerWidth >= 1024 && <DownloadLinks /> }
            
        </center>

    
      </div>

    );
  
   
  }
  
  export default TinyNav;