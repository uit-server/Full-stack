import Point from './Point'

const points = [
    "Study spaces for both individual and group work are available.",
    "Study spaces for both individual and group work are available.",
    "Study spaces for both individual and group work are available."
];


function HeroText() {
    return(
        
            <div className="flex flex-col">
            <h1 className="lg:text-5xl lg:leading-[48px] font-normal text-4xl leading-[38px] me-[133px] relative"><span className="absolute leading-[18px] lg:text-base text-xs text-[#1C1D2080] top-[-32px] lg:top-[-40px] left-[26px]">
                <ul className="list-disc marker:text-[#3798a6]">
                    <li>We provide</li>
                </ul>
                </span>Optimal study space for focused learning</h1>
                <div className="mt-5 lg:mt-10 block">
            {points.map((item,index) => <Point key={index} text={item} />)}
        </div>
        </div>
        
        
        
    )

}

export default HeroText;





