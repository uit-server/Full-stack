import React from 'react'
import './Speech.css'
import SpeechList from './SpeechList'

function Speech() {
    const itemData = [
        {
          name : "Name",
          job : "Student",
          photo : "",
          para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eleifend dolor, eu egestas libero fermentum luctus. Sed nec egestas mi."
        },
        {
          name : "Name",
          job : "Student",
          photo : "",
          para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eleifend dolor, eu egestas libero fermentum luctus. Sed nec egestas mi."
        },
        {
          name : "Name",
          job : "Student",
          photo : "",
          para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eleifend dolor, eu egestas libero fermentum luctus. Sed nec egestas mi."
        },
        {
          name : "Name",
          job : "Student",
          photo : "",
          para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eleifend dolor, eu egestas libero fermentum luctus. Sed nec egestas mi."
        },
        {
          name : "Name",
          job : "Student",
          photo : "",
          para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eleifend dolor, eu egestas libero fermentum luctus. Sed nec egestas mi."
        },
        {
          name : "Name",
          job : "Student",
          photo : "",
          para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eleifend dolor, eu egestas libero fermentum luctus. Sed nec egestas mi."
        },
        {
          name : "Name",
          job : "Student",
          photo : "",
          para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus eleifend dolor, eu egestas libero fermentum luctus. Sed nec egestas mi."
        },
    
      ]
      
      return(
        <>
            <div className='lg:h-[600px] flex lg:flex-row flex-col lg:px-[5%]'>
              <div className='h-[500px] flex-grow lg:w-[50%] w-full border border-gray-300 border-r-2 border-b-0 border-l-0 border-t-0'>
              
                  <ul className="lg:w-full  h-full overflow-auto hide-scrollbar">
                  {itemData.map((item) => (
                        <SpeechList key={item.id} name={item.name} para={item.para} role={item.job}/>
                    ))
                    }
                  </ul>
        
              </div>
              <div className='flex-grow lg:w-[50%] w-full'>
                    <div className='pt-[15%] lg:px-[20%] px-[10%]'>
                        <div className='lg:text-[72px] lg:leading-[72px] text-[50px] leading-[50px]'>Hear Our Speech:</div>
                        <p className='lg:text-[20px] text-[18px] text-justify py-[5%] opacity-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quam sapiente. Numquam, voluptatum dicta iusto, optio quas eius nemo ullam dolorem, facere repudiandae minima vel. Atque rerum iste quasi veniam?</p>
                    </div>
              </div>
            </div>
            </>
      )
}


export default Speech