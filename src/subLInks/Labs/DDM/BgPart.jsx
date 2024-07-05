import Date from '../../Degree/Bachelor/Components/Date';
import Overview from '../../Degree/Bachelor/Components/Overview';
import MajorImg from '../../Degree/Bachelor/Components/MajorImg';
import Objectives from '../../Degree/Bachelor/Components/SubjectOffer';
import Areas from './Components/Areas';
import Syllabus from '../../Degree/Bachelor/Components/Syllabus';
import Image from '../../../Images/researchLab.png';
import Img2 from '../../../Images/syllabus.png';
import Member from './Components/Member';
import member1 from '../../../Images/Faculty/CS/Teachers/Teacher_1.png';
import member2 from '../../../Images/Faculty/CS/Teachers/Teacher_2.png';
import member3 from '../../../Images/Faculty/CS/Teachers/Teacher_3.png';
import member4 from '../../../Images/Faculty/CS/Teachers/Teacher_4.png';
import member5 from '../../../Images/Faculty/CS/Teachers/Teacher_5.png';
import { faMicroscope, faBriefcase, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Publication from './Components/Publication';



const date = "Updated on 04 May 2024";

const Img =[Image];

const paragraph = ['Technology education needs to be kept up-to-date and to be innovated constantly. The Data Distribution Management (DDM) Research Lab stands as a testament to the power of gathering computer scientist together with a common purpose. The lab was the first data management research lab under the Faculty of Computer Science, University of Information Technology (UIT).','With the support of Rector Dr. Saw Sanda Aye, the DDM Research Lab was founded. Our theme is "Efficient Data Management on High Performance Computing". Dr. Nwe Nwe Myint Thein, head of the DDM Research Lab, Dr. Dim En Nyaung, Dr. Thet Thet Aung and Dr. Khin Su Su Wai who would work on the next big profitable outcomes for the data management and high performance computing sector.']

const content = [
  "To offer the most technologically advanced solutions to the ICT sector of our nation",
  "To continually enhance the quality of education with research",
  "To integrate the process of teaching, learning, and research environment ",
  "To facilitate high quality research in distributed data management ",
  "To promote the research and development cooperation with institutions in other countries "
  
];

const areas = [
  "Data Enrichment and Transformations",
  "Data Quality Assurance and Control",
  "Blockchain-Enabled Virtualized Cloud Security",
  "Privacy Preservation",
  "Data Delivery Resiliency",
  "Segregation, Coupling, Interoperability and Behavior Preservation in Simulation",
  "Accelerated Performance and Analytics with CUDA enabled GPUs",
  
]

const currentWorks = [
  "Blockchain Network Infrastructure Optimization",
  "Improved Data Management in Secure Blockchain Education Network (BEN)",
  "Accelerated Cryptographic Algorithm in Blockchain System Configuration Using CUDA Enabled GPUs",
  "Blockchain in Supply Chain Management System"
]

const completeWorks = [
  "Edge based Crime Assistance System with Cloud Computing",
  "Blockchain-Based Storage optimization on Hyperledger Fabric"
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

const members = [
  {
      name: "Dr. Nwe Nwe Myint Thein",
      subtitle: "Associate Professor, Head of the DDM Research Lab, Faculty of Computer Science",
      image: member1,
      degree: [
        {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2008'},
        {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Information Technology (Yatanarpon Cyber City), Myanmar - 2014'}
      ],
      interest: [
        'Modelling and Simulation',
        'Distributed Data Management',
        'Blockchain Security',
        'High Performance Computing Technology'
      ]
  },
  {
    name: "Dr. Dim En Nyaung",
    subtitle: "Lecturer, Faculty of Computer Science",
    image: member1,
    degree: [
      {type: 'Bachelor Degree', subject: 'Computer Science (B.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2005'},
      {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Yangon (UCSY) - 2010'},
      {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Computer Studies, Yangon (UCSY) - 2016'}
    ],
    interest: [
      'Data Analytics',
      'Machine Learning',
      'Distributed System',
      'Cloud Computing',
    ]
  },
  {
    name: "Dr. Thet Thet Aung",
    subtitle: "Lecturer, Faculty of Computer Science",
    image: member1,
    degree: [
      {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Taungngu (UCST) in 2010'},
      {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Computer Studies, Yangon (UCSY) - 2022'}
    ],
    interest: [
      'Social Network Analysis',
      'Blockchain',
      'Data Analytics',
      'High Performance Computing Technology'
    ]
  },
  {
    name: "Dr. Khin Su Su Wai",
    subtitle: "Lecturer, Faculty of Computer Science",
    image: member1,
    degree: [
      {type: 'Master Degree', subject: 'Computer Science (M.C.Sc)', palace: 'University of Computer Studies, Taungngu (UCST) in 2010'},
      {type: 'Doctor of Philosophy', subject: 'Information Technology (Ph.D)', palace: 'University of Information Technology (UIT), Yangon - 2023'}
    ],
    interest: [
      'Knowledge Discovery',
      'Blockchain',
      'Data Analytics',
      'Secure Data Communication'
    ]
  },
  {
    name: "Ma Khin Pyae Phyo San",
    subtitle: "Master Student, 4th Batch, High Performance Computing",
    image: '',
    degree: [],
    interest: [
      'High Performance Computing'
    ]
  },
  {
    name: "Mg Myo Thant Aung",
    subtitle: "Master Student, 5th Batch, Knowledge Engineering",
    image: '',
    degree: [],
    interest: [
      'Knowledge Engineering'
    ]
  }






]
  

function BgPart() {

    return (
      <div className="lg:ms-7">
        <Overview title='About' paragraph={paragraph} />
        <MajorImg Img={Img}/>
        <Member members={members} />
        <Objectives title='Objectives' content={content} id="Objectives" />
        <Areas career={areas} title='Areas of Research' icon={faMicroscope}/>
        <Areas career={currentWorks} title='Current Research Works' icon={faBriefcase}/>
        <Areas career={completeWorks} title='Completed Research Works' icon={faCircleCheck} />
        <Publication />
      </div>
      
    );
  
   
  }
  
  export default BgPart;


