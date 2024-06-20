import Appear3 from './Appear3';
import Appear4 from './Appear4';
function RoleDiffer() {

    return (
       
                         
    <>
        {(window.innerWidth < 1246 ) ? <Appear3 /> : <Appear4 />}
    </>
                        

        
    )
}

export default RoleDiffer;

