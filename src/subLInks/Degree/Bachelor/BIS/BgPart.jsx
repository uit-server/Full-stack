import Date from '../Components/Date';
import Overview from '../Components/Overview';
import MajorImg from '../Components/MajorImg';
import SubjectOffer from '../Components/SubjectOffer';
import Career from '../Components/Career';
import Syllabus from '../Components/Syllabus';
import Image from '../../../../Images/researchLab.png';
import Img2 from '../../../../Images/syllabus.png';



const date = "Updated on 04 May 2024";

const Img =[Image];

const paragraph = ["The Bachelor of Computer Science in Business Information Systems degree program focuses on teaching students how to use the Information Technology to support business operations and decision-making. Students learn about information systems, database management, business analytics, and project management.","B.C.Sc. (BIS) typically combines elements of business administration, information technology, and management to prepare students for careers that involve leveraging information systems to support business operations and decision-making.","B.C.Sc. (BIS) is designed to provide students with a comprehensive understanding of how information technology and information systems are used to drive business processes, enhance decision-making, and support strategic objectives. This program combines topics in business management, information technology, and data analysis. "];

const content = [
  "Software Modeling and Analysis Methodology",
  "Software Requirement Engineering",
  "Database Management System",
  "Web Technology",
  "Management Principles (Social Responsibilities & Ethics)",
  "Entrepreneurships",
  "Data Mining Techniques",
  "IT/IS Strategy, Management and Acquisition",
  "Business Information System Analysis and Design",
  "Business Management Information System",
  "Modeling and Decision Analysis",
  "Marketing Principles and Software Business",
  "Business Process Management",
  "Business Intelligence",
  "Information Systems Project Management",
  "Accounting for managers"
  
];

const career = [
  "Business Analyst",
  "IT Consultant",
  "Product Manager",
  "Enterprise Application Developer",
  "Data Scientist",
  "Database Administrator",
  "IT Auditor",
  "E-Commerce Manager",
  
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


