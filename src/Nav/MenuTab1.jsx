import React from "react";
import {motion} from 'framer-motion' ;
import { Link } from 'react-router-dom';

function Item1(){

    const listData = [
        {
          title: 'About UIT',
          items: [
            {
              text: 'Vision/Mission',
              link: '/about/vision-mission'
            },
            {
              text: 'History',
              link: '/about/history'
            },
            {
              text: 'Faculty',
              link: '/about/faculties'
            },
            {
              text: 'FAQS',
              link: '/about/faqs'
            }
          ]
        },
        {
          title: 'Our Facilities',
          items: [
            {
              text: 'Library',
              link: '/about/facilities-library'
            },
            {
              text: 'LMS',
              link: '/about/facilities-lms'
            },
            {
              text: 'Email Service',
              link: '/about/facilities-email-service'
            }
          ]
          
        },
        {
          title: 'Our Locations',
          items: [
            {
              text: 'Contacts',
              link: '/about/contacts'
            },
            {
              text: 'Maps',
              link: '/about/maps'
            },
            {
              text: 'Campus',
              link: '/about/campus'
            }
          ]
        }
      ];
    return (
        <motion.div className="item1"
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

function ListItem({ text, isTitle = false, link }) {
    return isTitle ? <li className="title">{text}</li> : <Link reloadDocument to={link} id="navigation" ><li>{text}</li></Link>;
}

export default Item1;