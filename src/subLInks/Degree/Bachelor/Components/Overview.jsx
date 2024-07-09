function Overview({paragraph,title='Overview',id='overview'}) {

   

    return (
      <>
        <div className="pb-7 md:pb-8 lg:scroll-mt-[114px]" id={title}>
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">{title}</h3>   
        <div>
            {paragraph.map((item) => <><p className="mb-[12px] text-sm sm:text-base md:text-lg font-light leading-5 md:leading-[26px] text-left text-[#1c1d20b0]">{item}</p></>)}
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Overview;

