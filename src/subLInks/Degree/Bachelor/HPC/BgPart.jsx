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

const paragraph = ["The Bachelor of Computer Science in High-Performance Computing (HPC) degree program focuses on teaching students how to harness supercomputers and advanced computing technologies to solve complex problems rapidly.","B.C.Sc. (HPC) typically falls under the field of computer science or a closely related discipline. High-performance computing involves designing and utilizing powerful computing systems to solve complex problems and perform large-scale simulations.","B.C.Sc. (HPC) is designed to equip students with the knowledge and skills necessary to work with advanced computing systems and tackle computationally intensive tasks. This program covers a range of topics, including parallel computing, distributed systems, virtualization technology, numerical methods, and optimization techniques."];

const content = [
  "Analysis of Algorithms and Parallel Algorithms",
  "Distributed Systems and Distributed Programming",
  "Cryptographic Technique and Data Security",
  "Mobile and Ubiquitous Computing",
  "High Performance Computing Technology",
  "Virtualization Technology and Cloud Computing",
  "Data Center and the New Converged Internet",
  "Blockchain Technology and the Internet of Things (IoT)",
  "Fog Computing",
  "Principles and Strategies of Building a Modern Data Center",
  "Advanced Computer Architectures and Optimization Techniques",
  "High Performance Big Data Analytics",
  "Project and Degree Term Paper"
];

const career = [
  "HPC System Administrator",
  "System Engineer",
  "IT Engineer in Data Center",
  "Solutions Engineer",
  "DevOps Engineer",
  "HPC Software Engineer",
  "HPC Applications Engineer",
  "High Performance Computing Test Engineerr",
  "Technical Consultant on HPC System",
  "Cloud Specialist Architect",
  "HPC System Solution Architect"
  
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
        <MajorImg Img={Img}/>
        <SubjectOffer content={content} />
        <Career career={career} />
        <Syllabus syllabus={syllabus} Img={Img2} />
      </div>
      
    );
  
   
  }
  
  export default BgPart;


