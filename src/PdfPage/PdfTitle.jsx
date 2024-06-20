import styled from "styled-components";

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 2px;
    border-color: #f5f5f5;
    padding: 20px 0;
    margin-bottom: 48px;

    @media (max-width: 360px) {
        margin-bottom: 16px;
    }
`

const DateContainer = styled.div`
    padding: 8px 16px;
    background: #f0f8ff;
    border-radius: 32px;
`


function PdfTitle() {
    return ( 
        <TitleContainer>
            <h5 className="text-[13px] sm:text-[16px] md:text-[20px] text-[#1c1d20] opacity-50">First year syllabus</h5>
            <DateContainer><span className="text-[11px] sm:text-[12px] md:text-[16px] text-[#1c1d20]">Updated on 04 May 2024</span></DateContainer>
        </TitleContainer>
     );
}

export default PdfTitle;