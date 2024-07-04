import Date from '../Components/Date';
import Overview from '../Components/Overview';


import Table from '../../../../Components/Table';
import JustText from '../Components/JustText';


const date = "Updated on 04 May 2024";

const dataHeader = [
  {
    name: "Compulsory Courses",
    style: "w-full"
  }

]

const dataHeader2 = [
  {
    name: "Elective Courses",
    style: "w-full"
  }

]

const data2 = [
  ["KE-601: Computational Intelligence"],
  ["BIS-603: Business Intelligence Modeling and Analytics"],
  ["KE-505: Semantic Web and Ontology Engineering"],
  ["KE-602: Geographic Information System"],
  ["KE-404: Computer Graphics"]
]

const data = [
  ["English"],
  ["SE-601: Systems of Systems Engineering"],
  ["SE-603: Neural Network and Deep Learning"],
  ["BIS-602: Production and Operations Management"],
  ["ES-603: Cyber-Physical System and Embedded Devices"]
]


const paragraph = ["The  UIT Campus aims to offer a broad range of Master Degree Program.  Currently, it also offers Master of Computer Science for Software  Engineering Courses for 2017-2018 academic year and 2018-2019 academic  year. Master’s candidates are required to have minimum credit, 20  credits (mandatorily taking 10 courses and doing a thesis). The  candidates must have completed the following subjects:"];



const para = "The candidates may choose three courses from the elective courses. If the candidates take the courses from the other faculty, you must fulfill the additional requirements set by the other faculty.";




const ppp = ["After this program, graduates can find jobs in their specialized fields  as project manager, systems analysts, and data scientists, software  engineers, software quality manager, technical support, enterprise  system consultant and etc."];
  

function BgPart() {

    return (
      <div className="lg:ms-7">
        <Date date={date} />
        <Overview name="About" paragraph={paragraph} />
        <div id="course1" className="mx-auto w-[75%] lg:w-[50%] lg:pt-3 lg:pb-9">
          <Table dataHeader={dataHeader} data={data} center=" text-center" />
        </div>
        <p className="font-[350] text-sm sm:text-base md:text-lg lg:leading-[27px] py-5 text-[#1C1D20CC] leading-5 lg:mb-7">{para}</p>
        <div id="course2" className="mx-auto w-[75%] lg:w-[50%] lg:pt-3 lg:pb-9">
          <Table dataHeader={dataHeader2} data={data2} center="text-center" />
        </div>
        <JustText name="Career Opportunities" paragraph={ppp} />
        
        
      </div>
      
    );
  
   
  }
  
  export default BgPart;


