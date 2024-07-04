import { useState, useEffect } from 'react';

function useVoidResize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
       

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

  
}

export default useVoidResize;