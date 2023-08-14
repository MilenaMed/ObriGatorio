import styled from "styled-components"
import logoObrugatorio from "../images/Logo.png"
import { useNavigate } from "react-router-dom"
import { api } from "../config/ApiConfig.jsx"
import { useState } from "react"

export default function SingUpPage() {
    const navigate = useNavigate();
    const [ongName, setNomeOng] = useState("")
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("");

    function getSignIn(event) {
        event.preventDefault()
        navigate('/')
    }

    function checarDados(event) {
        event.preventDefault()
        const EmailValido = /\S+@\S+\.\S+/;

        const signUp = async () => {
            try {
                const promisse = await api.post("/signup", { ongName, email, password, confirmPassword, city, contact })
                navigate('/')
            } catch (error) {
                alert("Os dados estão incorretos!")
                console.log(error);
            }
        }

        if (ongName.length > 0 && city.length > 0 && (email.search(EmailValido) !== -1) && email.length > 11 && password.length >= 3 && password === confirmPassword) {
            signUp()
        } else {
            alert("erro: preencha os dados corretamente")
        }
    }

    return (
        <>
            <SingUpContainer>
                <form>
                    <img src={logoObrugatorio} />
                    <input
                        placeholder="Nome da ONG"
                        type="text"
                        required value={ongName}
                        onChange={(e) => setNomeOng(e.target.value)} />
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
                        onChange={(e) => setSenha(e.target.value)} />
                    <input placeholder="Confirme a senha"
                        type="password"
                        autoComplete="new-password"
                        required value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    <input placeholder="Cidade de atuação"
                        type="name"
                        required value={city}
                        onChange={(e) => setCity(e.target.value)} />
                    <input placeholder="Telefone para contato"
                        type="contact"
                        required value={contact}
                        onChange={(e) => setContact(e.target.value)} />
                </form>
                <button onClick={checarDados}>
                    cadastrar
                </button>
                <h1 onClick={getSignIn}>
                    Já tem conta? Entre!
                </h1>
            </SingUpContainer>
        </>
    )
}

const SingUpContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
      img{
            height:70px;
            padding:20px;
      }`