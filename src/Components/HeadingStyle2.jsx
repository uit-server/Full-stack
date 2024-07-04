function HeadingStyle1({name,tinyText,space,sizeLead,size,mobileSize,mobileSizeLead,mobileSpace}) {
    return (
       
        
            <div className={` w-[70%]  ${mobileSpace}  lg:${space} mb-6 relative`}>
        <ul className="absolute top-0 left-[19px] list-disc marker:text-[#3798A6]">
            <li className="font-normal text-base leading-[18px] text-[#1C1D2080]">{tinyText}</li>
        </ul>
        <h3 className={`font-normal leading-[38px] ${mobileSizeLead} lg:${sizeLead} ${mobileSize} lg:${size} w-full`}>{name}</h3>

        

       

    </div>
   
       
    )
}


export default HeadingStyle1;