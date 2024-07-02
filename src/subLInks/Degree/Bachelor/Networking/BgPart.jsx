import Date from '../Components/Date';
import Overview from '../Components/Overview';
import Career from '../Components/Career';
import Syllabus from '../Components/Syllabus';

import Img2 from '../../../../Images/syllabus.png';



const date = "Updated on 04 May 2024";


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
        <Career career={career} />
        <Syllabus syllabus={syllabus} Img={Img2} />
      </div>
      
    );
  
   
  }
  
  export default BgPart;


