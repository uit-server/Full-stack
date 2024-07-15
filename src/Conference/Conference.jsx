
import React,{useState,useEffect } from 'react';
import useResize from '../utils/useResize';
import '../Styles/Degree.css';
import Heading from './Heading';
import BodyPart from './BodyPart';
import UltiWrapper from '../Components/UltiWrapper';
import axios from '../utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { insertApiData } from '../store/apiDataSlice';
import { useParams } from 'react-router-dom';


function Conference() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `conferences/${id}`;
  const windowWidth = useResize("The 5th International Conference On Advanced Information Technologies (ICAT 2024)");
  const dispatch = useDispatch();


  useEffect(() => {
    // Define the URL to send the GET request to
   

    // Make the GET request
    axios.get(url)
      .then(response => {
        // Handle the successful response here
        dispatch(insertApiData(response.data));
        setLoading(false);
      })
      .catch(error => {
        // Handle any errors here
        setError(error.message);
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [url,dispatch]);

  //comments


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  
   
 

 
 



  
  return (
      <>
     <UltiWrapper>
     <div className='p-[5%]'>
     <Heading />
     <BodyPart />
     </div>
     </UltiWrapper>
      
      
          
      
    
    </>
    
  );
}

export default Conference;
