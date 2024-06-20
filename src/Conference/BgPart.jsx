import Date from './Date';
import CallsForPaper from './CallsForPaper';
import Committee from './Committee';
import ImageSection from './ImageSection';
import Topics from './Topics';
import Guideline from './Guideline';
import Deadline from './Deadline';
import RegistrationFees from './RegistrationFees';
import { useState, useEffect } from 'react';
import DownloadLinks from './DownloadLinks';
import InvitedSpeakers from './InvitedSpeakers';
import KeynoteSpeakers from './KeynoteSpeakers';

function BgPart() {

  

    return (
      <div className="lg:ms-7">
        {window.innerWidth < 1024 && <DownloadLinks className='mb-5'/>}
        <Date />
        <CallsForPaper />
        <ImageSection />
        <Topics/>
        <InvitedSpeakers/>
        <KeynoteSpeakers/>
        <Committee />
        <Guideline/>
        <Deadline/>
        <RegistrationFees/>
      </div>
      
    );
  
   
  }
  
  export default BgPart;


