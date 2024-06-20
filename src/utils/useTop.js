import { useState, useEffect } from 'react';

function useTop(pathname) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.scrollTo(0, 0);
    
    },[pathname])

}

export default useTop;