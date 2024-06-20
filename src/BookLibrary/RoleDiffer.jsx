import Role1 from './Role1';
import Role2 from './Role2';
function RoleDiffer() {

    return (
       
                         
    <div id="role">
        {(window.innerWidth < 1024 ) ? <Role2 /> : <Role1 />}
    </div>
                        

        
    )
}

export default RoleDiffer;



