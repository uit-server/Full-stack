import Date from '../Components/Date';
import Overview from '../Components/Overview';
import MajorImg from '../Components/MajorImg';
import SubjectOffer from '../Components/SubjectOffer';
import Career from '../Components/Career';
import Syllabus from '../Components/Syllabus';
import Image from '../../../../Images/researchLab.png';
import Img2 from '../../../../Images/syllabus.png';



const date = "Updated on 04 May 2024";

const Img =[Image,Image];

const paragraph = ["The Bachelor of Computer Technology in Embedded Systems degree program focuses on teaching students how to design and program specialized computer systems that are integrated into various devices and products.","B.C.Tech. (ES) typically focuses on teaching students how to design, develop, and manage embedded systems, which are specialized computing systems integrated into various devices and applications.","B.C.Tech. (ES) is designed to provide students with a strong foundation with the knowledge and skills necessary to work on the development and implementation of embedded systems. This program covers a range of topics, including microcontroller/microprocessor architecture, sensor interfacing, firmware development, networking and communication, IoT integration, digital signal processing and ethical and legal considerations."];

const content = [
  "Fuzzy Logic System",
  "Microcontroller Programming",
  "Sensors & Electronics",
  "VHDL Design & Modeling of Digital Sys",
  "Applied Control Theory for Embedded System",
  "Embedded System Architecture",
  "Digital Signal Processing",
  "VLSI Technology & Design",
  "Neural Network",
  "Computer Vision and Digital Image Processing"
  
];

const career = [
  "Embedded Systems Architect",
  "Embedded Systems Engineer",
  "Embedded Firmware Engineer",
  "Embedded Software Developer",
  "Hardware Engineer",
  "Mobile App Developer",
  "Automotive Embedded System Engineer",
  "IoT Developer",
  "Home Automation and Smart Device Developer",
  "Entrepreneurship"
  
]

const syllabus = [
  {
    name: "First year syllabus",
    image: Img2,
    id: 1,
    paragraph: "lorem ipsum"
  },
  {
    name: "Second year syllabus",
    image: Img2,
    id: 2,
    paragraph: "lorem ipsum"
  },
  {
    name: "Third year syllabus",
    image: Img2,
    id: 3,
    paragraph: "lorem ipsum"
  },
  {
    name: "Fourth year syllabus",
    image: Img2,
    id: 4,
    paragraph: "lorem ipsum"
  },
  {
    name: "Fifth year syllabus",
    image: Img2,
    id: 5,
    paragraph: "lorem ipsum"
  }
]
  

function BgPart() {

    return (
      <div className="lg:ms-7">
        <Date date={date} />
        <Overview paragraph={paragraph} />
        <MajorImg Img={Img}/>
        <SubjectOffer content={content} />
        <Career career={career} />
        <Syllabus syllabus={syllabus} Img={Img2} />
      </div>
      
    );
  
   
  }
  
  export default BgPart;


