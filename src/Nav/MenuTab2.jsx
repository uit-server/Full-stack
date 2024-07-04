
import {motion} from 'framer-motion' ;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Item2(){

 

    const listData = [
        {
          title: 'Academic Programs',
          items: [
          {
            text: 'Degree',
            link: '/academic/degree'
          },
          {
            text: 'Diploma',
            link: ''
          }
        ]
        },
        {
          title: 'Student Support Service',
          items: [
          {
            text: 'LMS',
            link: 'https://lms.uit.edu.mm/'
          },
          {
            text: 'Student Registration',
            link: 'https://stu-reg.uit.edu.mm/'
          },
          {
            text: 'Email Service',
            link: '/academic/email-service'
          },
          
        ]
        },
        {
          title: 'Admission',
          items: [
            {
              text: 'Calendar',
              link: '/academic/calendar'
            },
            {
              text: 'Academic Rules',
              link: '/academic/academic-rules'
            },
            {
              text: 'Requirements',
              link: '/academic/admission-requirements'
            }
          ]
        },
        {
          title: 'Collaboration',
          items: [
            {
              text: 'University Collaboration',
              link: ''
            },
            {
              text: 'Industry Collaboration',
              link: ''
            },
            {
              text: 'Collaboration with Organizations',
              link: ''
            },
          ]
        }
      ];


 
    return (
        <motion.div className="item2"
        initial={{opacity:0, y:-10}}
        animate={{opacity: 1, y : 10}}
        transition={{ duration: 0.5}}
        >
            {listData.map((data, index) => (
                <div key={index} className="frame">
                    <ul>
                        <ListItem text={data.title} isTitle={true} />
                        {data.items.map((item, i) => (
                        <ListItem key={i} text={item.text} link={item.link}/>
                        ))}
                    </ul>
                </div>
                ))}
        </motion.div>
    )
}

function ListItem({ text, isTitle = false,link }) {
  const [key, setKey] = useState(0);
  const location = useLocation();




    return isTitle ? <li className="title">{text}</li> : <Link reloadDocument to={link} id="navigation" ><li >{text}</li></Link>;
}

export default Item2;