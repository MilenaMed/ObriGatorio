import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
    }
    button {
        outline: none;
        margin-top:30px;
        border: none;
        border-radius: 5px;
        background-color: #ffb6b6;
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;
        width: 85%;
        padding: 12px;
    }
    h1 {
        margin-top:20px;
        font-size: 15px;
        font-family: 'Raleway';
        font-style: normal;
        color: #a9a9a9;
    }
    input {
        font-size: 18px;
        height:20px;
        width: calc(100% - 20px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 10px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 85%;
        border-radius: 5px;
    }
`

export default GlobalStyle