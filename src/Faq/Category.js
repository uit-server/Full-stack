import React from 'react';
import '../Styles/Faq.css';



function Category(props) {
  return(
    <div className="category ms-3.5 text-base md:text-base border-2 py-4 px-8  border-slate-400 ">
      {props.name}
    </div>
  )
}


export default Category;