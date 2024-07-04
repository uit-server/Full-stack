import React from "react";
import {motion} from 'framer-motion' ;
import { Link } from 'react-router-dom';

function Item3(){

    const listData = [
        {
            title: 'Our Conferences',
            items: [
                {
<<<<<<< HEAD
                    text: 'Call For Papers',
                    link: '/about/conference/1',
                },
                {
                    text: 'Previous Conferences',
=======
                    text: 'Call for paper',
                    link: '/about/conference',
                },
                {
                    text: 'Previous',
>>>>>>> master
                    link: '/about/conference',
                }
            ]
        }
    ]

    
    return (
        <motion.div className="item3"
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

export default Item3;   