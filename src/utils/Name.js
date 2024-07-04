import {useEffect } from 'react';

function Name(title) {
    useEffect(() => {
        document.title = title;
    },[title])
   

  

       
}

export default Name;