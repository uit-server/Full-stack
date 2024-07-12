import HeadingStyle1 from '../Components/HeadingStyle1';
import { useSelector } from 'react-redux';
import isFutureDate from '../utils/isFutureDate';
import formatDate from '../utils/formatDate';
import { Link } from 'react-router-dom';

function Upcoming() {
    let data1 = useSelector((state) => state.post.value).filter((item) => isFutureDate(item.date));
    const data = [
        {
            title: "Upcoming activities title",
            date: "16 July 2024 (Wednesday)"
        },
        {
            title: "Upcoming activities title",
            date: "16 July 2024 (Wednesday)"
        },
        {
            title: "Upcoming activities title",
            date: "16 July 2024 (Wednesday)"
        },
        {
            title: "Upcoming activities title",
            date: "16 July 2024 (Wednesday)"
        },{
        title: "Upcoming activities title",
        date: "16 July 2024 (Wednesday)"
    },
    {
        title: "Upcoming activities title",
        date: "16 July 2024 (Wednesday)"
    },
    {
        title: "Upcoming activities title",
        date: "16 July 2024 (Wednesday)"
    },
    {
        title: "Upcoming activities title",
        date: "16 July 2024 (Wednesday)"
    },

    ]

    

    
    
    // Example usage:




  
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] lg:gap-x-16 gap-10 lg:py-[72px] py-14">
            <HeadingStyle1 name="More Events Coming to UIT" tinyText="upcoming activities" space="pt-[42px]" sizeLead="leading-[72px]" size="text-7xl" mobileSize="text-4xl" mobileSizeLead="leading-[38px]" mobileSpace="pt-8" mb="mb-[13rem]" />
        <div className="flex flex-col gap-6">
            {
                data.map((item, index) => 
                    <Link to= {`/about/news/${item.id}`} >
                         <div key={index} className="w-full flex justify-between items-center lg:p-8 p-6 rounded-[24px] lg:rounded-[32px] bg-[#F0F8FF]">
                        <h5 className="font-normal lg:leading-7 text-base leading-[22px] lg:text-xl me-5">{item.title}</h5>
                        <div className="flex flex-row items-center justify-center">
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-[2.33px] flex-none ">
<path d="M11.37 0.540614C11.7067 0.561671 11.9665 0.850223 11.9575 1.1932V2.1131C14.6319 2.37256 16 3.8507 16 6.5082V13.8596C16 16.8158 14.315 18.3176 10.999 18.3176H5.00097C1.68502 18.3176 0 16.8158 0 13.8596V6.5082C0 4.73915 0.602899 3.4733 1.83961 2.73423L1.92636 2.68479C2.10564 2.60111 2.31591 2.60878 2.49068 2.71025C2.69458 2.82863 2.81499 3.05425 2.8015 3.29267C2.78802 3.53109 2.64296 3.74117 2.42705 3.83497C1.60773 4.32244 1.22126 5.17159 1.22126 6.5082V6.74407H12.4986C12.8358 6.74407 13.1092 7.02216 13.1092 7.3652C13.1092 7.70825 12.8358 7.98634 12.4986 7.98634H1.22126V13.8596C1.22126 16.1161 2.31884 17.0517 5.00097 17.0674H10.999C13.6425 17.0674 14.771 16.1082 14.771 13.8517V6.50034C14.771 4.53473 13.913 3.58337 11.9575 3.35536V3.95291C11.9124 4.2714 11.6382 4.50392 11.3221 4.49178C11.006 4.47965 10.7499 4.22678 10.7285 3.90573V1.13816L10.7398 1.03985C10.765 0.911012 10.8299 0.792681 10.9263 0.702829C11.0469 0.590514 11.2068 0.532081 11.37 0.540614ZM11.7218 13.1593L11.8202 13.1657C11.989 13.1868 12.1472 13.2642 12.2694 13.3873C12.4161 13.535 12.4986 13.7362 12.4986 13.9461C12.4986 14.3803 12.1525 14.7323 11.7256 14.7323C11.2987 14.7323 10.9527 14.3803 10.9527 13.9461C10.9527 13.5118 11.2987 13.1598 11.7256 13.1598L11.7218 13.1593ZM8.01546 13.1598L8.11242 13.1659C8.49354 13.2145 8.78841 13.5452 8.78841 13.9461C8.78841 14.3803 8.44235 14.7323 8.01546 14.7323C7.58857 14.7323 7.24251 14.3803 7.24251 13.9461C7.24251 13.5118 7.58857 13.1598 8.01546 13.1598ZM4.30933 13.1593L4.40763 13.1657C4.5764 13.1868 4.73468 13.2642 4.85687 13.3873C5.00351 13.535 5.08599 13.7362 5.08599 13.9461C5.08599 14.3803 4.73993 14.7323 4.31304 14.7323C3.88616 14.7323 3.5401 14.3803 3.5401 13.9461C3.5401 13.5118 3.88616 13.1598 4.31304 13.1598L4.30933 13.1593ZM11.7218 9.97535L11.8202 9.9814C11.989 10.0026 12.1472 10.08 12.2694 10.203C12.4161 10.3507 12.4986 10.5519 12.4986 10.7618C12.4986 11.196 12.1525 11.548 11.7256 11.548C11.2987 11.548 10.9527 11.196 10.9527 10.7618C10.9527 10.3275 11.2987 9.97553 11.7256 9.97553L11.7218 9.97535ZM8.01546 9.97553L8.11242 9.98166C8.49354 10.0302 8.78841 10.3609 8.78841 10.7618C8.78841 11.196 8.44235 11.548 8.01546 11.548C7.58857 11.548 7.24251 11.196 7.24251 10.7618C7.24251 10.3275 7.58857 9.97553 8.01546 9.97553ZM4.30933 9.97535L4.40763 9.9814C4.5764 10.0026 4.73468 10.08 4.85687 10.203C5.00351 10.3507 5.08599 10.5519 5.08599 10.7618C5.08599 11.196 4.73993 11.548 4.31304 11.548C3.88616 11.548 3.5401 11.196 3.5401 10.7618C3.5401 10.3275 3.88616 9.97553 4.31304 9.97553L4.30933 9.97535ZM4.657 0.634415C4.9718 0.634415 5.23636 0.874983 5.2715 1.1932V2.0502H8.76522C9.10246 2.0502 9.37584 2.32829 9.37584 2.67133C9.37584 3.01437 9.10246 3.29246 8.76522 3.29246H5.25604V3.9136C5.25605 4.0797 5.19066 4.23889 5.07447 4.35561C4.95827 4.47232 4.80096 4.53683 4.63768 4.53473L4.54839 4.52581C4.25746 4.47468 4.03856 4.21486 4.04246 3.90573V1.1932L4.05972 1.10022C4.13107 0.829275 4.37369 0.634415 4.657 0.634415Z" fill="#3798A6"/>
</svg>

                            <h6 className="font-normal text-xs lg:text-base leading-[18px] text-[#1C1D20CC]">{formatDate(item.date)}</h6></div>

                    </div>
                    </Link>
                   )
            }


        </div>
      
    
        
    
       
    
    </div>
    )
    
     
    }
    
    
    
    export default Upcoming;
// //styleName: H6;
// font-family: Oldschool Grotesk;
// font-size: 16px;
// font-weight: 400;
// line-height: 18px;
// text-align: left;


    
    
    