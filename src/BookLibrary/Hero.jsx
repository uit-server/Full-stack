
import HeroText from './Herotext';
import styled from 'styled-components';
import Img from '../Images/BookLibrary/photo/library1.jpg'

const DivHero = styled.div`

    background: url(${Img});
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    
    
        `;
function Hero() {
    return(
        <div className="grid w-full lg:grid-cols-2 grid-cols-1 gap-[84px] py-14 lg:py-[72px]">
            <div>
            <DivHero className="rounded-[32px] w-full bg-[#D9D9D9] aspect-square"></DivHero>
            </div>
            <div className="w-full h-auto flex justify-center items-center">
                <HeroText />
            </div>
        </div>
    )
}


export default Hero;