import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import UltiWrapper from '../Components/UltiWrapper';
import item1 from '../Images/phoneIcon.svg';
import item2 from '../Images/mailIcon.svg';
import item3 from '../Images/locationIcon.svg';
import item4 from '../Images/busIcon.svg';
import Headline from './Headline';
import { AnimationButton } from '../Components/Footer';

    
function Contact() {
  const items = [
    {
      id : 1,
      icon : item1,
      infos: [
        '+95-1-9664254',
        '+95-775994221',
        '+95-774152166'
      ]
      
    },
    {
      id:2,
      icon : item2,
      infos: [
        'contact@uit.edu.mm'
      ]
    },
    {
      id : 3,
      icon : item3,
      infos: [
        'Parami Road',
        'Hlaing Campus',
        'Yangon, Myanamr'
      ]
    },
    {
      id : 4,
      icon : item4,
      infos:[
        'AD, Pyay Road'
      ]
    },
  ];


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };
    return (
      <>
        <UltiWrapper>
        {/* <div className="h-[95px] lg:h-[192px] ms-[-5.5%] w-[112%] mt-[-5.6%] border shadow-sm bg-his-bg bg-cover opacity-85">
          <h1 className='p-[4%] text-white text-4xl lg:text-5xl'>Contact Us</h1>
        </div> */}
        <Headline/>
        <div className='flex flex-col lg:flex-row w-full max-lg:items-center mt-[80px] mb-[40px]'>
            <div className='w-[65%] max-md:mb-[100px]'>
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#f0f8ff] rounded-3xl max-w-[700px] p-[5%]">
      {['name', 'email', 'subject', 'message'].map((field) => (
        <div className="relative" key={field}>
          <input
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            id={field}
            value={formData[field]}
            onChange={handleChange}
            className="peer w-full max-w-[600px] border-b-2 border-gray-300 bg-transparent focus:outline-none mt-4 mb-4"
            placeholder=" "
          />
          <label
            htmlFor={field}
            className={`absolute left-0 -top-3.5 text-gray-600 transform transition-all duration-200 ease-in-out ${
              formData[field] && 'text-xs -top-3.5'
            } peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs`}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
        </div>
      ))}
      <AnimationButton value='send'/>
    </form>

            </div>
            <ul className='w-[35%] lg:ml-[100px] max-lg:mt-[70px] max-md:mt-[-25px]'>
                {items && items.map((item)=>(
                  <li key={item.id}>
                      <div className='flex justify-start mb-[80px] max-lg:flex-col max-lg:items-center'>
                      <img src={item.icon} alt="" className='w-11'/>
                      <div className='mx-[130px] max-1321:mx-[70px] max-lg:mt-9 w-[160px] flex flex-col max-lg:items-center justify-center '>
                        {item.infos &&
                          item.infos.map((info,i)=>(
                            <p key={i} className='mb-1'>{info}</p>
                          ))
                        }
                      </div>
                      </div>
                  </li>
                ))}
            </ul>
        </div>
        </UltiWrapper>
      </>
    );

}



export default Contact;