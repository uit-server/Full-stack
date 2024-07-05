import NavBody from './NavBody';
import NavBody2 from './NavBody2';

function TinyNav({className, attr, links}) {

    return (
      
      <div  className={className} >
        

        {attr ? <div className="flex justify-end">
             <NavBody2 link={links}/>
            
        </div>: 
        <center className="lg:mt-16">
        <NavBody link={links}/> 
        
    </center>}

    
      </div>

    );
  
   
  }
  
  export default TinyNav;