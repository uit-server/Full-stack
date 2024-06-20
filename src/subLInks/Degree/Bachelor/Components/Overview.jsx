function Overview({paragraph}) {

   

    return (
      <>
        <div className="py-7 md:py-8 lg:scroll-mt-[114px]" id="overview">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">Overview</h3>   
        <div>
            {paragraph.map((item) => <><p className="mb-[12px] text-sm sm:text-base md:text-lg font-light leading-5 md:leading-[26px] text-left text-[#1c1d20b0]">{item}</p></>)}
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Overview;

