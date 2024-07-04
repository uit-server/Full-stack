import React from 'react';
    
function Vision() {

  const list = [
    "Training and nurturing effective and well-qualified human resources for the development of ICT sector",
    "Creating and supporting resources for research development",
    "Promoting the better collaboration between universities and university-industry linkages",
    "Upgrading the curriculum in line with the state-of-the-art technology",
    "Maintaining a sustainable and innovative learning and teaching, and research environment"
  ]


  return (
    <div id="mission" className="lg:scroll-mt-[134px] ps-[30px] rounded-[32px] bg-[#F0F8FF] w-full pt-8 pb-[51px]">
         <div className="flex flex-row justify-between items-center mb-8 h-[48px]">
        <h3 className="font-normal leading-7 lg:leading-[48px] text-2xl lg:text-5xl">Mission</h3>
        <svg width="76" height="87" viewBox="0 0 76 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-[69px] lg:w-[76px] lg:h-[87px] w-[51px] h-[57px]">
<path d="M65.604 13.1529L76 7.8199L66.3224 0.428589L63.9278 11.8727L38.0271 45.8456C37.2894 45.4812 36.4589 45.2764 35.5806 45.2764C32.5238 45.2764 30.0458 47.7566 30.0458 50.8161C30.0458 53.8756 32.5238 56.3558 35.5806 56.3558C38.6374 56.3558 41.1154 53.8756 41.1154 50.8161C41.1154 49.3972 40.5823 48.1028 39.7058 47.1227L65.604 13.1529Z" fill="black"/>
<path d="M53.8003 20.2206C48.471 17.0345 42.2394 15.2037 35.5806 15.2037C15.93 15.2037 0 31.1479 0 50.8161C0 70.4843 15.93 86.4286 35.5806 86.4286C55.2312 86.4286 71.1612 70.4843 71.1612 50.8161C71.1612 40.4681 66.7516 31.1509 59.7105 24.6443L57.7829 27.1733C64.0714 33.0915 67.9985 41.4948 67.9985 50.8161C67.9985 68.7361 53.4845 83.263 35.5806 83.263C17.6767 83.263 3.16272 68.7361 3.16272 50.8161C3.16272 32.8962 17.6767 18.3692 35.5806 18.3692C41.5178 18.3692 47.0821 19.9667 51.8681 22.7557L53.8003 20.2206Z" fill="black"/>
<path d="M47.3458 28.6889C43.8383 26.8167 39.8332 25.7555 35.5806 25.7555C21.7524 25.7555 10.5424 36.9755 10.5424 50.8161C10.5424 64.6567 21.7524 75.8767 35.5806 75.8767C49.4088 75.8767 60.6188 64.6567 60.6188 50.8161C60.6188 43.8911 57.8125 37.6221 53.276 33.0863L51.338 35.6289C55.1265 39.5656 57.4561 44.9186 57.4561 50.8161C57.4561 62.9084 47.6621 72.7112 35.5806 72.7112C23.4991 72.7112 13.7051 62.9084 13.7051 50.8161C13.7051 38.7238 23.4991 28.9211 35.5806 28.9211C39.1108 28.9211 42.4456 29.758 45.3979 31.2444L47.3458 28.6889Z" fill="black"/>
<path d="M40.8003 37.2764C39.1807 36.6505 37.4207 36.3074 35.5806 36.3074C27.5748 36.3074 21.0848 42.8032 21.0848 50.8161C21.0848 58.8291 27.5748 65.3249 35.5806 65.3249C43.5864 65.3249 50.0764 58.8291 50.0764 50.8161C50.0764 47.3194 48.8405 44.1115 46.782 41.6063L44.7959 44.212C46.1289 46.0721 46.9137 48.3524 46.9137 50.8161C46.9137 57.0808 41.8397 62.1594 35.5806 62.1594C29.3215 62.1594 24.2475 57.0808 24.2475 50.8161C24.2475 44.5514 29.3215 39.4729 35.5806 39.4729C36.6907 39.4729 37.7635 39.6327 38.7774 39.9304L40.8003 37.2764Z" fill="black"/>
</svg>
        
    
       
    </div>
    <p className="font-[350] leading-[27px] text-lg text-[#1C1D20CC]">In support of its vision, we are committed to:</p>
    <ul className="list-disc ms-6">
      {list.map((item, index) => (
        <li key={index} className="font-[350] leading-[27px] text-lg text-[#1c1d20cc]">{item}</li>
      )
    )}
    </ul>

    
       
    </div>
    
     
  );

 
}



export default Vision;

//styleName: H4 - mobile;
// font-family: Oldschool Grotesk;
// font-size: 24px;
// font-weight: 400;
// line-height: 28px;
// text-align: left;



