
import React,{ useState,useRef } from 'react';

import UltiWrapper from '../Components/UltiWrapper';
import item1 from '../Images/phoneIcon.svg';
import item2 from '../Images/mailIcon.svg';
import item3 from '../Images/locationIcon.svg';
import item4 from '../Images/busIcon.svg';
import Headline from './Headline';
import { AnimationButton } from '../Components/Footer';
import emailjs from "@emailjs/browser";
import { AnimatePresence } from 'framer-motion';
import Notification from '../Components/Notification';

    
function Contact() {

  const form = useRef();
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

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bjagpca', 'template_itqb59x', form.current, 'SmsJIRjEMi_ijHUKR')
      .then((result) => {
        setShowNotification(true);
          
        setTimeout(() => setShowNotification(false), 7000);
      }, (error) => {
      });

      setFormData(
        {
          name: '',
          email: '',
          subject: '',
          message: ''
        }

      );



      e.target.reset();


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
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#f0f8ff] rounded-3xl max-w-[700px] p-[5%]" ref={form}>
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
    <AnimatePresence>
        {showNotification && <Notification message="Email successfully sent!" />}
      </AnimatePresence>

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