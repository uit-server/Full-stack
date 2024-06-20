import '../Styles/Degree.css';
import { AnimatedText } from '../Components/AnimatedText';
import { motion } from "framer-motion";


const header = [
  "Degree Programs",
  "We Offer"
]

const headerMobile = [
  "Degree",
  "Programs",
  "We Offer"
]



    
function Headline() {



  


  return (
 
    <div className="lg:py-14 pt-[72px] pb-14 grid lg:grid-cols-2 grid-cols-1  ">
      <h1 className="lg:text-7xl lg:leading-[72px] leading-[38px] font-normal text-4xl me-[133px] relative w-[70%] lg:w-[85%]"><span className="absolute leading-[18px] lg:text-base text-xs text-[#1C1D2080] top-[-32px] lg:top-[-46px] left-[26px]">
                <ul className="list-disc marker:text-[#3798a6]">
                    <li>Degree</li>
                </ul>
                </span>The programs we offer:
      </h1>
      <div className="lg:pt-[111px] pt-8">
        <h5 className="font-normal text-xl leading-7 ">
        The University of Information Technology offers undergraduate and postgraduate courses for bachelor’s, diploma, master’s, and doctoral level students in a wide range of subject areas: software engineering, high performance computing, business information system, communication and networking, embedded systems and computer systems technology.
        </h5>


      </div>
  </div>
  
   
  );

 
}

export default Headline;


//styleName: H5;
// font-family: Oldschool Grotesk;
// font-size: 20px;
// font-weight: 400;
// line-height: 28px;
// text-align: left;








