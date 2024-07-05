import styled from 'styled-components';
import React from 'react';
import DataPartSub from './DataPartSub';

const Div = styled.div``;

function DataPart() {
  return (
    <div className="w-full lg:pt-[72px] lg:pb-14 pt-14 border-t-[1px] border-[#F5F5F5] grid lg:grid-cols-5 grid-cols-1 gap-10 lg:gap-x-[84px]">
      <div className="flex justify-center items-center">
        <DataPartSub title="Year Founded" value="2012"/>
      </div>
      <div className="flex justify-center items-center">
        <DataPartSub title="Lectures" value="121+"/>
      </div>
      <div className="flex justify-center items-center">
        <DataPartSub title="Student Enrollment" value="1166+"/>
      </div>
      <div className="flex justify-center items-center">
        <DataPartSub title="Graduates" value="549+"/>
      </div>
      <div className="flex justify-center items-center">
        <DataPartSub title="Degree Offered" value="16"/>
      </div>
    </div>
  );
}

export default DataPart;
