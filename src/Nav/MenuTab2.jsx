
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
            link: '/academic/diploma'
          }
        ]
        },
        {
          title: 'Student Support Service',
          items: [
          {
            text: 'LMS',
            link: '/academic/lms'
          },
          {
            text: 'Student Registeration',
            link: '/academic/student-registeration'
          },
          {
            text: 'Email Service',
            link: '/academic/email-service'
          },
          {
            text: 'Library',
            link: '/academic/library'
          }
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
              text: 'Campus',
              link: '/academic/campus'
            },
            {
              text: 'Requirements',
              link: '/academic/admission-requirements'
            }
          ]
        },
        {
          title: 'Updated',
          items: [
            {
              text: 'Computer Science',
              link: '/faculties/computer-science'
            },
            {
              text: 'Conference',
              link: '/about/conference'
            },
            {
              text: 'Pdf',
              link: '/about/pdf'
            },
            {
              text: 'News',
              link: '/about/news'
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