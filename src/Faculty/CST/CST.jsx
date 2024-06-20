import '../../Styles/Degree.css';
import '../../Styles/Faculty.css';
import Headline from '../Components/Headline';
import Navbar from '../../Nav/Navbar';
import Vision from './Vision';
import useResize from '../../utils/useResize';
import React,{ useState } from 'react';
import Major from '../Components/Major';
import Member from '../Components/Member';
import UltiWrapper from '../../Components/UltiWrapper';
import Img1 from '../../Images/Faculty/CS/Teachers/Teacher_1.png';
import Img2 from '../../Images/Faculty/CS/Teachers/Teacher_2.png';
import Img3 from '../../Images/Faculty/CS/Teachers/Teacher_3.png';
import Img4 from '../../Images/Faculty/CS/Teachers/Teacher_4.png';
import Img5 from '../../Images/Faculty/CS/Teachers/Teacher_5.png';
import High from '../../Images/Faculty/CS/Trivia/High_Performance_Computing.png';
import Img from '../../Images/Faculty/CS/Trivia/Knowledge_Engineering.png'

function Faculty(){

    const windowWidth = useResize("Faculty of Computer Systems and Technologies");

    const header = [
        "Faculty of Computer Systems and Technologies",
        "(FCST)"
      ]

      const headerMobile = [
        "Faculty of Computer Systems ",
        "and Technologies(FCST)",
      ]


      const members = [
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img1
        },
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img2
        },
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img3
        },
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img4
        },
        {
            name: "Dr. Ei Chaw Htoon",
            title: "Pro-rector & Dean",
            image: Img5
        }
    
    
    
    
    
    
    ]

    const numText = "three";
    const faculty= "FCST";
    const infoText = "lorem ipsum";

    const desktopLeftRow = [
      {
        name: "Embedded Systems (ES)",
        image: High
      },
      {
        name: "Cyber Security (CSec)",
        image: High
      }
    ]

    const desktopRightRow = [
      {
        name: "Communication and Networking (CN)",
        image: Img
      }
    ]

    const mobile = [
      {
        name: "Embedded Systems (ES)",
        image: High
      },
      {
        name: "Communication and Networking (CN)",
        image: Img
      },
      {
        name: "Cyber Security (CSec)",
        image: Img
      }
    ]


 


 

    
    return (
        <div className='faculty overflow-x-hidden' style={{background:'#fff'}}>
            <UltiWrapper>
                    <Headline header={header} headerMobile={headerMobile} />
                    <Vision />
                    <Major numText={numText} desktopLeftRow={desktopLeftRow} desktopRightRow={desktopRightRow} mobile={mobile} faculty={faculty} infoText={infoText}/>
                    <Member members={members} />
            </UltiWrapper>

            
        </div>
    )
}


export default Faculty;