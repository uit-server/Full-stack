import { FacebookShareButton,EmailShareButton, TelegramShareButton, ViberShareButton, TelegramIcon,EmailIcon,FacebookIcon, ViberIcon } from "react-share";

function ShareSpace() {

    const currentPageUrl = window.location.href;
    const bgStyle = {
      fill: '#1c1d20', // Change to your desired background color
    };


    return (
      
      <div className="flex flex-col " >
         <h1 className="mb-5 text-[#1C1D2080] font-normal text-xs lg:text-base leading-[18px]">Share to</h1>
         <div className="flex flex-row gap-x-[10px]">
         <TelegramShareButton url={currentPageUrl}> 
            <TelegramIcon size={'32px'} round={true} bgStyle={ bgStyle } />
           
         </TelegramShareButton>
         <FacebookShareButton url={currentPageUrl}>
            <FacebookIcon size={'32px'} round={true} bgStyle={ bgStyle } />

         </FacebookShareButton>
         <EmailShareButton url={currentPageUrl}>
            <EmailIcon size={'32px'} round={true} bgStyle={ bgStyle } />
         </EmailShareButton>
         <ViberShareButton url={currentPageUrl}>
            <ViberIcon size={'32px'} round={true} bgStyle={ bgStyle } />
         </ViberShareButton>

         </div>
         
       
        </div>

    );
  
   
  }
  
  export default ShareSpace;