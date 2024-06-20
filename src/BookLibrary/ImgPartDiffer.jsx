import Appear1 from './Appear1';
import Appear2 from './Appear2';
function RoleDiffer() {

    return (
       
                         
    <>
        {(window.innerWidth < 1246 ) ? <Appear1 /> : <Appear2 />}
    </>
                        

        
    )
}

export default RoleDiffer;

