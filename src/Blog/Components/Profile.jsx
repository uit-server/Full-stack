function Profile({title,name}) {

    return (
       <div className="flex gap-x-2 lg:gap-x-3">
        <div className="w-14 lg:w-16 aspect-square bg-[#D9D9D9] rounded-[10px]"> </div>
        <div className="flex flex-col justify-between py-[3px]">
            <h6 className="font-norml text-[#3798A6]  
             leading-[18px] text-xs md:text-base ">Written by</h6>
              <h6 className="font-normal 
             leading-[18px] text-xs md:text-base ">{name}
             </h6>
              <h6 className="font-normal  
             leading-[18px] text-xs md:text-base text-[#1C1D2080]">{title}</h6>

        </div>

       </div>
    
      
    );
  
   
  }
  
  export default Profile;


