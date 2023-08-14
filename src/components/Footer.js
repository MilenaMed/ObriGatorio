import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import catIcon from "../images/cat.png"
import addIcon from "../images/add.png"

function Footer() {
    const navigate = useNavigate();

    function getAddCat(event) {
        event.preventDefault()
        navigate('/AddCat')
    }

    function getCats(event) {
        event.preventDefault()
        navigate('/mycats')
    }
    return (
        <>
            <StyledLogoContainer>
                <StyledIcon src={catIcon} onClick={getCats} /> |
                <StyledAddIcon src={addIcon} onClick={getAddCat} />
            </StyledLogoContainer>
        </>
    )
}

export default Footer


const StyledLogoContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #FFFFFF; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); 
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    `;

const StyledIcon = styled.img`
    height: 40px;
    margin-right: 20px;
`;
const StyledAddIcon = styled.img`
    height: 30px;
    margin-left: 20px;
`;