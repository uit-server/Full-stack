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

const paragraph = ["The Bachelor of Computer Science in Software Engineering degree program focuses on teaching students how to design, develop, test, and maintain software systems efficiently.","B.C.Sc. (SE) typically focuses on the advanced knowledge of the concepts underlying the design, development, and performance of software systems, including mathematical foundations, cybersecurity, programming languages, algorithm design and data modelling.","B.C.Sc. (SE) is designed to provide students with a strong foundation in computer science principles and software development methodologies. The program emphasizes problem-solving, teamwork, and practical experience in software engineering, preparing students for careers in the software industry. "];

const content = [
  "Software Modeling and Analysis Methodology",
  "Software Requirement Engineering",
  "Software Quality Management",
  "Software Construction & Evolution",
  "Human Computer Interaction",
  "Web Technology",
  "Operating Systems",
  "Management Principles (Social Responsibilities & Ethics)",
  "Enterprise Systems, Security and Risk Management",
  "Database Management System",
  "Project Management",
  "Business Management Information Systems",
  "Data Mining Techniques",
  "Machine Learning with Data Visualization",
  "Advanced Software Engineering",
  "Data processing techniques in distributed systems",
  "Game Theory"
  
];

const career = [
  "Software Engineer",
  "System Engineer",
  "System Analyst",
  "Data Engineering",
  "Quality Assurance Engineering",
  "Project Manager",
  "Database Administrator",
  "Web Developer",
  "Software Consultant",
  "Front-end/ Back-end Developer",
  "Full Stack Developer"
  
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
        <Syllabus syllabus={syllabus} />
      </div>
      
    );
  
   
  }
  
  export default BgPart;


