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
            <div className='h-[600px] flex px-[5%]'>
              <div className='h-[500px] flex-grow w-[50%] border border-gray-300 border-r-2 border-b-0 border-l-0 border-t-0'>
              
                  <ul className="w-full h-full overflow-auto hide-scrollbar">
                  {itemData.map((item) => (
                        <SpeechList key={item.id} name={item.name} para={item.para} role={item.job}/>
                    ))
                    }
                  </ul>
        
              </div>
              <div className='flex-grow w-[50%]'>
                    <div className='pt-[15%] px-[20%]'>
                        <div className='text-[72px] leading-[72px]'>Hear Our Speech:</div>
                        <p className='text-[20px] text-justify py-[5%] opacity-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quam sapiente. Numquam, voluptatum dicta iusto, optio quas eius nemo ullam dolorem, facere repudiandae minima vel. Atque rerum iste quasi veniam?</p>
                    </div>
              </div>
            </div>
            </>
      )
}


export default Speech