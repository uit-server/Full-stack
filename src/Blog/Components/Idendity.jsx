import Profile from './Profile';
import Date from './Date';

function Idendity({title,name,date}) {

    return (
        <div className="mt-4 mb-4 lg:mt-8 lg:mb-6 flex items-center justify-between">
          <Profile title={title} name={name} />
        <Date date={date} />
        

      </div>
    
      
    );
  
   
  }
  
  export default Idendity;


