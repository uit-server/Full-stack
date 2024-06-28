import { Link } from "react-router-dom";

function FaculCon(){
    const data1  = [
        {
          name: "Faculty of Computer Science (FCS)",
          link: "computer-science"
        },
        {
          name: "Faculty of Computer Systems and Technologies (FCST)",
          link: "computer-systems-and-technologies"
        },
        {
          name: "Faculty of Information Science (FIS)",
          link: "information-science"
        },
        {
          name: "Faculty of Computing (FC)",
          link: "computing"
        },
      
       ]

    return(
        <div className="flex justify-between gap-x-1 gap-y-10 w-full flex-wrap mb-10">
            {data1.map((data,index)=>(
                <Link to={`/faculties/${data.link}`} key={index} className="bg-[#f0f8ff] 2xl:w-[350px] xl:w-[300px] w-[155px] h-[208px]  2xl:h-[308px] flex items-center  py-[64px] px-[32px] rounded-[32px]">
                    <h4 className="xl:text-[25px] text-[15px] 2xl:leading-[25px] leading-[20px] text-center text-[#1c1d20]">{data.name}</h4>

                </Link>
            ))}
            
        </div>
    )
}

export default FaculCon;