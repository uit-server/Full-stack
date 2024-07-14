import React from 'react'

function DataPartSub({title="", value=""}) {
  return (
    <>
        <div className="flex flex-col justify-start items-center">
            <p className='text-[#1c1d20] opacity-50 text-[20px] ps-[5px] pb-[20px]'>{title}</p>
            <p className='text-[70px] ps-[5px]'>{value}</p> 
      </div>
    </>
  )
}

export default DataPartSub