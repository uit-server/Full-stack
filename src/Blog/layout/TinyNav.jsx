import NavBody from './NavBody';
import NavBody2 from './NavBody2';

function TinyNav({className, attr}) {

    return (
      
      <div  className={className} >
        

        {attr ? <div className="flex justify-end">
             <NavBody2 />
            
        </div>: 
        <div className="lg:mt-16">
        <NavBody /> 
        
    </div>}

    
      </div>

    );
  
   
  }
  
  export default TinyNav;