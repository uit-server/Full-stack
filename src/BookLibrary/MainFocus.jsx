import Dropdown from './Dropdown';

const requirements =[
    {
        id: "01",
        item: "Student / staff ID card"
    },
    {
        id: "02",
        item: "One passport photo"
    }
]

function MainFocus() {
    return(
        <div className="py-14 lg:py-[72px] grid lg:grid-cols-[50%_40%] grid-cols-1 gap-[40px] lg:gap-[10%] lg:min-h-[526px]">
            <div className="w-full h-auto flex justify-center items-center flex-col gap-5">
            <div className=" whitespace-wrap font-normal leading-9 lg:leading-[48px] text-[32px] lg:text-5xl">
                        <span className="inline-block relative bottom-[6px] lg:bottom-[12px]  text-xs font-normal ms-[5px] me-[20px] lg:me-[55px]  leading-[18px] lg:text-base">
                            <div className="text-[#3798a6] inline-block relative bottom-[3.5px] px-[7px] text-xl">.</div>
                    
                                <span className="opacity-50 ">Membership</span>
                        </span>
                        The faculty members, students, and staffs from UIT are entitled to membership of the our library
                    </div>
                    <div>
                    <p className="font-[350px] lg:text-lg text-sm lg:leading-6 leading-5 text-[#1C1D20CC] mb-4 opacity-80">New members will need to register at the Library by completing a registration form. The following documentations are also required –</p>
                    
                    <div className="flex flex-col">
                    {
                        requirements.map(
                            (item) => 
                            <div className="flex flex-row font-normal lg:text-base text-xs leading-[18px]">
                                <span className="me-[6px] lg:me-[12px] opacity-50">{item.id}</span>
                                <span className="">{item.item}</span>
                            </div>
                        )
                    }
                </div>
                    
                    </div>
            

            </div>
            <div className="w-full">
                <Dropdown />
            </div>
        </div>
    )
}

export default MainFocus;




