function Overview({name,paragraph}) {

   

    return (
      <>
        <div className="py-7 md:py-8 lg:scroll-mt-[196px]" id="career">
        <h3 className="capital mb-[20px] leading-7 text-2xl md:text-[32px] md:leading-9">{name}</h3>   
        <div>
            {paragraph.map((item) => <><p className="mb-[12px] text-sm sm:text-base md:text-lg font-light leading-5 md:leading-[27px] text-left text-[#1C1D20]">{item}</p></>)}
        </div>

      </div>
      </>
      
    );
  
   
  }
  
  export default Overview;



