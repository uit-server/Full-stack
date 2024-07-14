import styled from 'styled-components';
import React from 'react';
import DataPartSub from './DataPartSub';

const Div = styled.div``;


function DataPart() {
  const data = [
    {
      id: 1,
      title: "Year Founded",
      value: "2012",
    },
    {
      id: 2,
      title: "Lectures",
      value: "121+",
    },
    {
      id: 3,
      title: "Student Enrollment",
      value: "1166+",
    },
    {
      id: 4,
      title: "Graduates",
      value: "549+",
    },
    {
      id: 5,
      title: "Degree Offered",
      value: "16",
    },
  ];
  return (
    <div className="w-full lg:pt-[72px] px-[5%] lg:pb-14 pt-14 border-t-[1px] border-[#F5F5F5] grid lg:grid-cols-5 grid-cols-1 gap-10 lg:gap-x-[84px]">
      {data.map((item) => (
        <div key={item.id} className="flex justify-center items-center">
          <DataPartSub title={item.title} value={item.value}/>
        </div>
      ))}
      
    </div>
  );
}

export default DataPart;
