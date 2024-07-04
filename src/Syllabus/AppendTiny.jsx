function AppendTiny({name,date}) {

    return (
      <>
      <section className="mt-14 lg:mt-[72px] py-[26px] flex justify-between items-center mb-8 border-b-2 border-[#F7F7F7]">
          <h5 className="font-normal text-base leading-[22px] text-[#1C1D2080] lg:text-xl lg:leading-7" >{name}</h5>
          <h6 className="font-normal text-xs leading-[18px] rounded-[32px] py-2 px-4 bg-[#F0F8FF]">{date}</h6>
      </section>
    
      </>
    );
  
   
  }
  
  export default AppendTiny;