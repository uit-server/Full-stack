import React,{useState,useEffect } from 'react';
import useResize from '../utils/useResize';
import '../Styles/Degree.css';
import UltiWrapper from '../Components/UltiWrapper';
import { Link } from 'react-router-dom';

import axios from '../utils/axiosInstance';



function Conference() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = 'conferences';
  const windowWidth = useResize("Conferences");



 const data1  = [
  {
    name: "Faculty of Computer Science (FCS)",
    link: "computer-science"
  },
  {
    name: "Faculty of Computer Systems and Technologies (FCST)",
    link: "computer-systems-and-technologies"
  },
  {
    name: "Faculty of Information Science (FIS)",
    link: "information-science"
  },
  {
    name: "Faculty of Computing (FC)",
    link: "computing"
  },

 ]
 const data2  = [
  {
    name: "Department of English",
    link: "english"
  },
  {
    name: "Department of Myanmar",
    link: "myanmar"
  },
  {
    name: "Department of Physics",
    link: "physics"
  },

 ]


  
  return (
      <>
      <UltiWrapper>
        <div className="flex flex-col gap-x-20px">
          <h1 className="text-4xl mb-4">Faculty</h1>
      {data1.map(
        (item,index) => <Link key={index} to= {`/faculties/${item.link}`} className="underline text-2xl mb-9 pb-9 decoration-solid" ><span >{item.name}</span></Link>
        

     )}
     </div>
     <div className="flex flex-col gap-x-20px">
      <h1 className="text-4xl mb-4">Department of Language</h1>
      {data2.map(
        (item,index) => <Link key={index} to= {`/departments/${item.link}`} className="underline text-2xl mb-9 pb-9 decoration-solid" ><span >{item.name}</span></Link>
        

     )}
     </div>
     </UltiWrapper>
      
      
          
      
    
    </>
    
  );
}

export default Conference;
