import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const prev = [
      {title:"Edge based Crime Assistance System with Cloud Computing", place:"Proceedings of the 3rd International Conference on Advanced Information Technologies (ICAIT), Myanmar", time:"November 2019"},
      {title:"An Indexing Approach of Historical States on Hyperledger Fabric", place: " Proceedings of the 11th International Conference on Future Computer and Communication, (ICFCC 2019), Yangon, Myanmar" , time: 'February 2019'},
      {title:"Storage Structure of Student Record based on Hyperledger Fabric Blockchain", place:"Proceedings of the 3rd International Conference on Advanced Information Technologies (ICAIT), Myanmar", time: "November 2019"},
      {title:"Performance Evaluation of M/D/1 Queuing Model on Hyperledger Fabric", place:"Proceedings of the 4th International Conference on Advanced Information Technologies (ICAIT), Myanmar", time:"December 2020"},
      {title:"Performance Analysis on Block Size Valuation of Hyperledger Fabric Blockchain", place:"Proceedings of the IEEE   20th International Conference on Computer Applications (ICCA)", time:"February 2023"},
      {title:"NFT-Based Certificates and Proof of Delivery in Education Sector with Ethereum Blockchain", place:"Proceedings of the IEEE   21th International Conference on Computer Applications (ICCA)", time:"March 2024"}]

const upcoming = [
      {title:"Optimized Block Size Valuation by Blockchain-based Hyperledger Fabric Network", place:"The 16th INternational Conference Genetic and Evolutionary Computing, ICGEC2024, Miyazaki, Japan", time:"28-29 August 2024"},
      {title:"Cloud Cost Prediction with Long Short-term Memory (LSTM) on Parametric Data", place:"The 16th INternational Conference Genetic and Evolutionary Computing, ICGEC2024, Miyazaki, Japan", time:"28-29 August 2024"},
      {title:"Evaluating Pipeline Architecture with Apache Kafka and Apache Flink: Data-Driven Architecture", place:"The 16th INternational Conference Genetic and Evolutionary Computing, ICGEC2024, Miyazaki, Japan", time:"28-29 August 2024"}]

function Publication(){
    return (
        <div className="memberWrap py-[56px] " id="Publications">
            <div className="flex flex-col justify-center gap-5">
                <div className="relative">
                    {/* <div className="smallMemberTitle top-[-10px]">
                        <p className="flex-none text-[#3798a6] text-lg me-[7px] lg:me-[10px] mb-2.5">.</p>
                        <p className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Members</p>
                    </div> */}
                    <h2 className="text-2xl md:text-[32px] font-normal">Publications</h2>
                    
                </div>
                <div className="previous">
                    <h3 className="text-xl md:text-[18px] font-normat opacity-50 pb-5">Previous</h3>
                    <div className="flex flex-col gap-10">
                    {prev.map((item,index) => (
                        <div key={index} className=" rounded-[32px] overflow-hidden shadow-sm ">
                        <div className="bg-[#f0f8ff] lg:py-[24px] lg:px-[32px] px-[16px] py-[12px] flex flex-col gap-5">
                        <div
                            className="flex lg:flex-row flex-col justify-between items-center gap-[10px]"    
                        >
                            
                                
                                
                                    <h2 className="text-[16px] lg:text-[20px] leading-[25px] text-[#3798a6] lg:w-1/4 lg:text-start text-center">{item.title}</h2>
                                    <div className="flex gap-3">
                                        <FontAwesomeIcon icon={faCalendar} className="text-[#3798a6] opacity-80 text-[16px]" />
                                        <p className="text-[#1c1d20] opacity-80 text-[12px] lg:text-[16px]">{item.time}</p>

                                    </div>
                                
                            
                            
                        </div>
                        <div
                            className="overflow-hidden"
                        >
                            <p className="text-[16px] lg:text-[20px] leading-[25px] text-[#1c1d20] lg:w-1/2 lg:text-start text-center">
                            {item.place}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>

                <div className="upcoming">
                    <h3 className="text-xl md:text-[18px] font-normat opacity-50 pb-5">Upcoming</h3>
                    <div className="flex flex-col gap-10">
                    {upcoming.map((item,index) => (
                        <div key={index} className=" rounded-[32px] overflow-hidden shadow-sm ">
                        <div className="bg-[#f0f8ff] lg:py-[24px] lg:px-[32px] px-[16px] py-[12px] flex flex-col gap-5">
                        <div
                            className="flex lg:flex-row flex-col justify-between items-center gap-[10px]"    
                        >
                            
                                
                                
                                    <h2 className="text-[16px] lg:text-[20px] leading-[25px] text-[#3798a6] lg:w-1/4 lg:text-start text-center">{item.title}</h2>
                                    <div className="flex gap-3">
                                        <FontAwesomeIcon icon={faCalendar} className="text-[#3798a6] opacity-80 text-[16px]" />
                                        <p className="text-[#1c1d20] opacity-80 text-[12px] lg:text-[16px]">{item.time}</p>

                                    </div>
                                
                            
                            
                        </div>
                        <div
                            className="overflow-hidden"
                        >
                            <p className="text-[16px] lg:text-[20px] leading-[25px] text-[#1c1d20   ] lg:w-1/2 lg:text-start text-center">
                            {item.place}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Publication;