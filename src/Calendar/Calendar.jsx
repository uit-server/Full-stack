

import React from 'react';
import UltiWrapper from '../Components/UltiWrapper';
import Headline from './Headline';
import PdfView from './PdfView';

    
function Calendar() {

  const pdfFile = `${process.env.PUBLIC_URL}/Calendar.pdf`;
  
return (
  <>
    <UltiWrapper>
      <Headline/>
      <PdfView file={pdfFile} />
    </UltiWrapper>
  </>
)

 
}



export default Calendar;