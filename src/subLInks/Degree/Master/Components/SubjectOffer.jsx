function SubjectOffer({content}) {

    

    return (
      <>
        <div className="py-7 md:py-8 w-full lg:scroll-mt-[164px]" id="subjectOffer">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9 w-full">Offering subjects</h3>   
        <div className="flex flex-row flex-wrap w-full justify-between">
            {content.map((item) => 
            <div className="flex flex-row w-full md:w-[45%] items-start mb-[12px]">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"  className="me-[10px] text-[16px] flex-none">
<path d="M8 0.428711C3.58171 0.428711 0 4.01042 0 8.42871C0 12.847 3.58171 16.4287 8 16.4287C12.4183 16.4287 16 12.847 16 8.42871C16 4.01042 12.4183 0.428711 8 0.428711ZM8 1.9771C11.5655 1.9771 14.4516 4.86261 14.4516 8.42871C14.4516 11.9943 11.5661 14.8803 8 14.8803C4.43445 14.8803 1.54839 11.9948 1.54839 8.42871C1.54839 4.86316 4.4339 1.9771 8 1.9771ZM12.5227 6.17926L11.7957 5.44642C11.6452 5.29465 11.4001 5.29365 11.2483 5.44423L6.68858 9.96732L4.75981 8.0229C4.60926 7.87113 4.36416 7.87013 4.21239 8.02068L3.47952 8.74765C3.32774 8.89819 3.32674 9.14329 3.47732 9.2951L6.40574 12.2472C6.55629 12.399 6.80139 12.4 6.95316 12.2494L12.5205 6.72671C12.6723 6.57613 12.6733 6.33103 12.5227 6.17926Z" fill="#3798A6"/>
</svg>
                <p className="infoText normal-case">{item}</p>

            </div>)}
            
        </div>
        

      </div>
      </>
      
    );
  
   
  }
  
  export default SubjectOffer;