import styled from "styled-components";
import logoObrugatorio from "../images/Logo.png";
import logoutIcon from "../images/logout.svg";
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate();

    function getHome(event) {
        event.preventDefault()
        navigate('/home')
    }
    function Logout(event) {
        event.preventDefault()
        localStorage.removeItem("token");
        navigate('/')
    }

    return (
        <>
            <StyledLogoContainer>
                <StyledLogo src={logoObrugatorio} onClick={getHome} />
                <StyledIcon src={logoutIcon} onClick={Logout} />
            </StyledLogoContainer>
        </>
    )
}

export default Header


const StyledLogoContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: #FFFFFF; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); 
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;

    `;

const StyledLogo = styled.img`
    height: 50px;
    margin-left: auto;
    margin-right: auto;
`;

const StyledIcon = styled.img`
    height: 30px;
    margin-right: 20px;
`;