import styled from "styled-components"
import logoObrugatorio from "../images/Logo.png"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { api } from "../config/ApiConfig.jsx"
import { AuthContext } from "../Context/AuthContext.js";


export default function SignInPage() {
    const { saveToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");

    function checarDados(event) {

        event.preventDefault()
        const EmailValido = /\S+@\S+\.\S+/;
        const signIn = async () => {
            try {
                const promisse = await api.post('/signin', { email, password })
                saveToken(promisse.data)
                navigate("/home")
            } catch (error) {
                alert("Os dados estão incorretos!")
                console.log(error);
            }
        }

        if ((email.search(EmailValido) !== -1) && password.length >= 3) {
            signIn()
        } else {
            alert("Preencha os dados corretamente")
        }
    }

    function getSignUp(event) {
        event.preventDefault()
        navigate('/signup')
    }
    return (
        <SingInContainer>
            <form>
                <img src={logoObrugatorio} />
                <input
                    placeholder="E-mail"
                    type="email"
                    required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    required value={password}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </form>
            <button onClick={checarDados}>
                entrar
            </button>
            <h1 onClick={getSignUp}>
                Primeira vez? Cadastre-se!
            </h1>
        </SingInContainer>
    )
}

const SingInContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
      img{
            height:130px;
           margin-bottom:30px;
      }`