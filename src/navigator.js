import { Route, Routes } from "react-router-dom";
import Degree from './Degree/Degree';
import Admission from './Admission/Admission';
import Diploma from './Diploma/Diploma';
import Home from './Home/Home';
import AcademicRule from './AcademicRule/AcademicRule';
import Calendar from './Calendar/Calendar';
import Campus from './Campus/Campus';
import EmailService from './EmailService/EmailService';
import LMS from './LMS/LMS';
import StudentRegister from './StudentRegisteration/StudentRegister';
import Library from './BookLibrary/Library';


import Contact from './Contacts/Contact';
import FaciCampus from './FaciCampus/FaciCampus';
import FaciEmailService from './FaciEmailService/FaciEmailService';
import FaciLibrary from './FaciLibrary/FaciLibrary';
import FaciLms from './FaciLms/FaciLms';
import History from './History/History';
import Map from './Maps/Map';
import Visimisi from './Vision-mission/Visimisi';
import Faq from './Faq/Faq';
// import Faq from './Maps/Map';
import CS from './Faculty/CS/CS';
import C from './Faculty/C/C';
import CST from './Faculty/CST/CST';
import IS from './Faculty/IS/IS';
import SixYearJourney from "./SixYearJourney/Calendar";

import Myan from './Department/Myan/Myan';
import Eng from './Department/Eng/Eng';
import Phy from './Department/Phy/Phy';
import Conference from './Conference/Conference';
import ConferenceHead from './ConferenceHead/ConferenceHead';
import DDMLab from "./subLInks/Labs/DDM/DDMLab";

import FaculHead from './FaculHead/FaculHead';

// import ChildConference from './Conference/Conference';
import Pdf from './PdfPage/PdfPage';

import Research from './Research/Research';


//sublink for majors
import HPC from './subLInks/Degree/Bachelor/HPC/HPC';
import KE from './subLInks/Degree/Bachelor/KE/KE';
import SE from './subLInks/Degree/Bachelor/SE/SE';
import BIS from './subLInks/Degree/Bachelor/BIS/BIS';
import ES from './subLInks/Degree/Bachelor/ES/ES';
import Csec from './subLInks/Degree/Bachelor/Csec/Csec';
import Networking from './subLInks/Degree/Bachelor/Networking/Networking';
import News from "./News/News";

import Blog from './Blog/Blog';


export default function Navigator() {

    return (
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/academic/diploma" element={<Diploma />} />
            <Route path="/academic/degree" element={<Degree />} />
            <Route path="/academic/admission-requirements" element={<Admission />} />
            <Route path="/academic/academic-rules" element={<AcademicRule />} />
            <Route path="/academic/lms" element={<LMS />} />
            <Route path="/academic/student-registeration" element={<StudentRegister />} />
            <Route path="/academic/email-service" element={<EmailService />} />
            <Route path="/academic/library" element={<Library />} />
            <Route path="/academic/calendar" element={<Calendar />} />
            <Route path="/academic/campus" element={<Campus />} />
            <Route path="/academic/academic-rules" element={<AcademicRule />} />
            <Route path="about/faculties" element={<FaculHead />} />


            <Route path="/about/vision-mission" element={<Visimisi />} />
            <Route path="/about/sixyearjourney" element={<SixYearJourney/>} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/faqs" element={<Faq />} />
            <Route path="/about/facilities-library" element={<FaciLibrary />} />
            <Route path="/about/facilities-lms" element={<FaciLms />} />
            <Route path="/about/facilities-email-service" element={<FaciEmailService />} />
            <Route path="/about/contacts" element={<Contact />} />
            <Route path="/about/maps" element={<Map />} />
            <Route path="/about/campus" element={<FaciCampus />} />
            
            

            <Route path="/research" element={<Research />} />
            <Route path="/research/ddm-lab" element={<DDMLab />} />
            
            

            {/* Faculty */}
            <Route path="/faculties/computer-science" element={<CS />} />
            <Route path="/faculties/computing" element={<C />} />
            <Route path="/faculties/computer-systems-and-technologies" element={<CST />} />
            <Route path="/faculties/information-science" element={<IS />} />

            {/* Department of Language */}
            <Route path="/departments/myanmar" element={<Myan />} />
            <Route path="departments/english" element={<Eng />} />
            <Route path="departments/physics" element={<Phy />} />



            <Route path="/about/conference" element={<ConferenceHead />} />
            <Route path="/about/conference/:id" element={<Conference />} />
            
            <Route path="/about/pdf" element={<Pdf />} />
            <Route path="/about/news" element={<News />} />

            {/* for majors sublink */}
            <Route path="/academic/degree/bachelor/hpc" element={<HPC />} />
            <Route path="/academic/degree/bachelor/ke" element={<KE />} />
            <Route path="/academic/degree/bachelor/se" element={<SE />} />
            <Route path="/academic/degree/bachelor/bis" element={<BIS />} />
            <Route path="/academic/degree/bachelor/es" element={<ES />} />
            <Route path="/academic/degree/bachelor/csec" element={<Csec />} />
            <Route path="/academic/degree/bachelor/networking" element={<Networking />} />

            <Route path="/about/news/:id" element={<Blog />} />

            


            
        </Routes>
    )
}