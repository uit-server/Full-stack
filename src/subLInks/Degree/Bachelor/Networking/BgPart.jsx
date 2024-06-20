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

const paragraph = ["Communication and Networking (CN) students gain extensive knowledge and experience in designing, constructing, analyzing, and securing networks. Topics in electronics, microprocessors, network/computer hardware, operating systems, signalling, and software are presented throughout the program. It covers the fundamentals of computer hardware and software as well as advanced concepts such as security, networking. It provides a comprehensive overview of enterprise-level networking concepts, including advanced routing, switching, and troubleshooting. To ensure that graduates are optimally prepared, courses extend into the most current and specialized technologies.","The course of study enables our graduates, within a few years of graduation, to secure to become a successful technical career and contribute decisively to the application, improvement, and development of technology."];


const career = [
  "IT Manager",
  "IT Engineer",
  "Management Consulting",
  "Network Analyzer",
  "Telecommunication Engineer",
  "Networking professionals",
  "Network Expert"
  
]

const syllabus = [
  {
    name: "First year syllabus",
    image: Img2
  },
  {
    name: "Second year syllabus",
    image: Img2
  },
  {
    name: "Third year syllabus",
    image: Img2
  },
  {
    name: "Fourth year syllabus",
    image: Img2
  },
  {
    name: "Fifth year syllabus",
    image: Img2
  }
]
  

function BgPart() {

    return (
      <div className="lg:ms-7">
        <Date date={date} />
        <Overview paragraph={paragraph} />
        <Career career={career} />
        <Syllabus syllabus={syllabus} Img={Img2} />
      </div>
      
    );
  
   
  }
  
  export default BgPart;


