function Overview({head,paragraph}) {

   

    return (
      <>
        <div className="py-7 md:py-8 lg:scroll-mt-[114px]" id="overview">
        <h3 className="capital mb-4 lg:mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">{head}</h3>   
        <div>
            {paragraph.map((item) => <p className="mb-[12px] text-sm sm:text-base md:text-lg font-[350] leading-[21px] md:leading-[27px] text-left text-[#1C1D20CC]" dangerouslySetInnerHTML={{ __html: item }}></p>)}
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Overview;

