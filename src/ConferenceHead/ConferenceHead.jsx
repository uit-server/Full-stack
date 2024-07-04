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


  useEffect(() => {
    // Define the URL to send the GET request to
   

    // Make the GET request
    axios.get(url)
      .then(response => {
        // Handle the successful response here
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        // Handle any errors here
        setError(error.message);
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  
   
 

 
 



  
  return (
      <>
      <UltiWrapper>
        <div className="flex flex-col gap-x-20px">
      {data.map(
        (item,index) => <Link key={index} to= {`/about/conference/${item.id}`} className="underline text-2xl mb-9 pb-9 decoration-solid " ><span className="hover:hoverMode">{item.name}</span></Link>
        

     )}
     </div>
     </UltiWrapper>
      
      
          
      
    
    </>
    
  );
}

export default Conference;
