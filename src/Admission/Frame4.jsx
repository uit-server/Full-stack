import React from "react";
import './../Styles/Frame4.css';
import { useSelector } from 'react-redux';
import setkan from './../Images/BookLibrary/photo/ent.jpg';

function Frame4(){
    const firstPara = ["UIT has amazing opportunities for the students. You are invited to take the next step forward in your way to success and join our university. Students who want to fulfill their academic ambitions, intellectual passions and the ones who want to be IT Professionals can come to our university. If it sounds good and interesting to you, UIT is the right choice for your future.","UIT သည်ကျောင်းသားများအတွက်အံ့သြဖွယ်အခွင့်အလမ်းများရှိသည်။ အောင်မြင်မှုဆီသို့ နောက်တဆင့်တက်လှမ်းရန် ကျွန်ုပ်တို့၏တက္ကသိုလ်တွင် ပါဝင်ရန် ဖိတ်ကြားအပ်ပါသည်။ မိမိတို့၏ ပညာရေးရည်မှန်းချက်များ၊ ဉာဏ်ရည်ဉာဏ်သွေးကို ဖြည့်ဆည်းလိုသော ကျောင်းသားများနှင့် IT Professional ဖြစ်လိုသူများသည် ကျွန်ုပ်တို့၏ တက္ကသိုလ်သို့ လာရောက်နိုင်ပါသည်။ သင့်အတွက် ကောင်းမွန်ပြီး စိတ်ဝင်စားစရာကောင်းပါက UIT သည် သင့်အနာဂတ်အတွက် မှန်ကန်သောရွေးချယ်မှုဖြစ်သည်။"]

    const language = useSelector((state) => state.language.value);
    return (
        <div className=" md:max-w-screen-lg lg:pt-[6rem] pt-14 pb-[90px] lg:pb-[50px] frame4 lg:max-w-full px-4">
            <div className="flex justify-center">
            <div className="flex justify-center lg:justify-start sm:gap-[10vw] gap-[20vw] items-center flex-wrap">
                <div className="sm:w-[560px] sm:h-[560px] w-[60vw] h-[60vw] rounded-[20px]" style={{background: `url(${setkan})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                <div className="flex flex-col items-start gap-[30px] relative">
                    <div className="smallMemberTitle sm:top-[-40px] top-[-20px]" style={{left:15}}>
                        <p className="flex-none text-[#3798a6] text-lg me-[7px] lg:me-[10px] mb-2.5">.</p>
                        <p className="text-xs md:text-base text-[#1c1d20] opacity-50 font-normal leading-[18px]">Welcome</p>
                    </div>
                    <p className="font-light text-4xl md:text-6xl text-start leading-tight tracking-wide">Step into UIT <br/>your new home</p>
                    <p className={(language == "EN") ? "font-light text-base md:text-lg md:text-xl text-left tracking-wider lg:w-[530px] pale": "font-light text-sm md:text-base text-left tracking-wider lg:w-[530px] pale"}>{(language == "EN") ? firstPara[0] : firstPara[1]}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Frame4;

