import '../Styles/Degree.css';
import { useSelector } from 'react-redux';

const textsEn = [
  {
    head: "Program Highlight",
    body: ["concentrates on creating links between theory and practice.","covers a wide variety of software and hardware technologies and their applications.","is designed to equip students with the fundamental understanding and practical skills needed by the future leaders of computing and related professions."]
  
  },
  {
    head: "Career",
    body: ["Software Industries","IT-Business Organization","Academic Institutions"]
  }
 
]

const textsMyn = [
  {
    head: "အစီအစဉ် အသားပေး",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  },
  {
    head: "အသက်မွေးဝမ်းကြောင်း",
    body: "သတင်းအချက်အလက်နည်းပညာတက္ကသိုလ်သည် ဘာသာရပ်နယ်ပယ်များစွာတွင် ဘွဲ့ကြို၊ ဒီပလိုမာ၊ မာစတာနှင့် ပါရဂူအဆင့် ကျောင်းသားများအတွက် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်သင်တန်းများကို ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ၊ အသိပညာအင်ဂျင်နီယာ၊ စွမ်းဆောင်ရည်မြင့်မားသော ကွန်ပျူတာ၊ စီးပွားရေးသတင်းအချက်အလက်စနစ်တို့ကို ပေးဆောင်ပါသည်။"
  }
]

function Trivia() {
  const language = useSelector((state) => state.language.value);

  return (
    <div className="h-fit lg:p-14 p-4 mx-auto triviaMain">
        <div className="trivia-container w-full">
            
              {(language === "EN") ? textsEn.map((item) => (
                <>
                <div className="lg:w-1/2 w-full  mb-6">
                  <h1 className="font-medium text-xl sm:text-3xl leading-5 triviaHead  py-8  ">{item.head}</h1>
                  <p className="text-sxl sm:text-lg font-normal leading-8 sm:leading-10 w-full sm:w-5/6 opacity-80 tracking-wide">
                  {item.body.map((ab,index) => <span key={index} className="block">{ab}</span>)}
                </p>
                </div>
                </>
                
                
              )) :  textsMyn.map((item,index) => (
                <>
                <div key={index} className="lg:w-1/2 w-full  mb-6">
                  <h1 className="font-medium text-lg sm:text-2xl leading-5 triviaHead  py-8  ">{item.head}</h1>
                  <p className="text-sm sm:text-base font-normal leading-8 sm:leading-10 w-full sm:w-5/6 opacity-80 tracking-wide">
                  {item.body.map((ab,index) => <span key={index} className="block">{ab}</span>)}
                </p>
                </div>
                </>
                
                
              )) }
            
            </div>
        
            
            
       
    </div>
  );
}


export default Trivia;




// font-size: 20px;
// font-weight: 400;
// line-height: 35px;
// letter-spacing: 0.06em;



