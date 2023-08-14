import { useState, useEffect } from "react";
import { api } from "../config/ApiConfig";
import Header from "../components/Headers";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function AddCatPage() {
    const [catName, setNome] = useState("")
    const [datadescription, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            alert("É necessário estar logado para prosseguir");
            navigate("/");
            return;
        }
    })


    function checarDados(event) {
        event.preventDefault();

        const AddCat = async () => {
            try {
                const data = { catName, datadescription, photo, available: true };
                const response = await api.post('/addService', data, config);
                navigate("/home");
            } catch (error) {
                alert("Os dados estão incorretos!");
                console.log(error);
            }
        }

        if (catName.length > 0 && datadescription.length > 10) {
            AddCat();
        } else {
            alert("Preencha os dados corretamente");
        }
    }
    return (
        <>
            <Header />
            <ConteinerAddCatsPage>
                <form>
                    <input
                        placeholder="Nome"
                        type="text"
                        required value={catName}
                        onChange={(e) => setNome(e.target.value)} />
                    <input
                        placeholder="Descrição"
                        type="description"
                        required value={datadescription}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="URL da imagem"
                        type="ulr"
                        required value={photo}
                        onChange={(e) => setPhoto(e.target.value)} />
                </form>
                <button onClick={checarDados}>
                    Adicionar
                </button>
            </ConteinerAddCatsPage>
        </>
    )
}
const ConteinerAddCatsPage = styled.div`
margin-top:60px;
height: 100vh;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
background-color: #fee1e8;
`