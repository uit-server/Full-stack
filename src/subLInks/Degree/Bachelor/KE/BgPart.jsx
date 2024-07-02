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

const paragraph = ["The Bachelor of Computer Science in Knowledge Engineering degree program focuses on teaching students how to capture, represent, and leverage human knowledge within computer systems.","B.C.Sc. (KE) typically falls under the broader category of computer science or related fields. Knowledge Engineering is an interdisciplinary field that combines aspects of artificial intelligence, machine learning, data science, and computer science to develop systems that can capture, represent, and utilize knowledge effectively.","B.C.Sc. (KE) is designed to provide students with a strong foundation in the theory and practical applications of knowledge engineering.  Program will equip students with the skills and knowledge necessary to develop intelligent systems, knowledge-based decision support systems, and data-driven solutions. Students will gain expertise in machine learning, data analysis, knowledge representation, and software development "];

const content = [
  "Logic Programming and Artificial Intelligence",
  "Multiagent Programming with JADE",
  "Machine Learning and Data Mining",
  "Knowledge Engineering for Expert Systems",
  "Data Science for Business",
  "Robotic Systems",
  "Computational Linguistics",
  "Semantic Web and Ontology Engineering",
  "Computer Graphics and Computer Vision"
  
];

const career = [
  "AI/Machine Learning Engineer/ Consultant",
  "Data Scientist",
  "Natural Language Processing (NLP) Engineer",
  "Semantic Web Developer",
  "Game and AR/VR Developer",
  "Computer Vision Engineer",
  "Computer Graphic System Developer",
  "Simulation Engineer",
  "Technical consultant on HPC system",
  "Knowledge Management Specialist",
  "Robotics Engineer"
  
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


