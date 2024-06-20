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

const paragraph = ["The Bachelor of Computer Technology in Cybersecurity degree program focuses on teaching students how to safeguarding digital assets and information from cyber threats and attacks.","B.C.Tech. (CSec) is designed to prepare students for careers in protecting digital systems and data from cyber threats, including cyber-attacks and breaches.","B.C.Tech. (CSec) is designed to provide students with the knowledge and skills required to protect information systems, networks, and data from cyber threats. This program covers a wide range of topics, including Cyber Security principles, Information/Database security, network security, cryptography, risk management, and incident response."];

const content = [
  "Foundation of Information Security",
  "Cybersecurity Operations",
  "Ethical Hacking and Penetration Testing",
  "Applied Cryptography",
  "Network Operating Systems",
  "Network Management and Monitoring",
  "Principles of Network Security",
  "Cyber Crime Investigation and Digital Forensics",
  "Software Security",
  "Programming for Cybersecurity",
  "Cyber Security Management",
  "Malware Taxonomy and Analysis"
];

const career = [
  "Cybersecurity Architect",
  "Cybersecurity administrator",
  "Information Security Analyst",
  "Computer and Information system manager",
  "Network security analyst",
  "Cybersecurity Engineer",
  "Cybersecurity Analyst",
  "Information Security officer",
  "Penetration Tester/ Ethical hacker",
  "Cybersecurity Specialist"
  
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


