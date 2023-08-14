import { useState, useEffect } from "react";
import { api } from "../config/ApiConfig";
import Header from "../components/Headers";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";


export default function MyCatsPage() {
    const [myCats, setMyCats] = useState([]);
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

    useEffect(() => {
        const promisse = api.get("/myCats", config)
            .then((res) => setMyCats(res.data))
            .catch((err) => console.log(err.response.data));
    }, []);
    useEffect(() => {
        fetchMyCats();
    }, []);

    const fetchMyCats = async () => {
        try {
            const response = await api.get("/my-cats");
            setMyCats(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (myCats.length === 0) {
        return (
            <>
                <Header />
                <ConteinerCatsPage>
                    <h3>Você ainda não cadastrou nenhum gato</h3>
                </ConteinerCatsPage >
            </>)
    }

    const changeCatStatus = async (catId) => {
        try {
            await api.post(`/myCats/${catId}`);
            fetchMyCats();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <ConteinerCatsPage>
                {myCats.map(cat => (
                    <ProdutoDiv key={cat.catName}>
                        <img src={cat.photo} alt={cat.catName} />
                        <CatInfo>
                            <p>{cat.catName}</p>
                            <h1>{cat.datadescription}</h1>
                            <ConteinerDados>
                                <h2> contato da ong: {cat.ongContact}</h2>
                                {cat.available ? (
                                    <Avaliblebutton onClick={() => changeCatStatus(cat.id)}>Disponível</Avaliblebutton>
                                ) : (
                                    <Avaliblebutton onClick={() => changeCatStatus(cat.id)}>Indisponível</Avaliblebutton>
                                )}
                            </ConteinerDados>
                        </CatInfo>
                    </ProdutoDiv>
                ))}
            </ConteinerCatsPage >
        </>
    )
}

const ConteinerCatsPage = styled.div`
margin-top:60px;
height: 100vh;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
background-color: #fee1e8;
h3{
    margin-top: 100px;
    font-family: 'Raleway';
}
`
const ConteinerDados = styled.div`
display:flex;
justify-content: space-between;
align-items: center;`

const ProdutoDiv = styled.div`
height: 170px;
width:70%;
background-color: white;
margin-bottom: 20px;
border-radius: 5px;
border: #d9d9d9 0.1em solid;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
display: flex;
align-items: center;
img{
    width: 100px;
  height: 100px;
  border-radius: 5%;
  margin-right: 20px;
  object-fit: cover;
  position: relative;
  left: -20px;
}
`

const Avaliblebutton = styled.button`
outline: none;
        border: none;
        border-radius: 5px;
        background-color: #ffb6b6;
        color: #ffffff;
        font-size: 12px;
        cursor: pointer;
        width:120px;
        padding: 12px;
        margin-right:20px;
        margin-bottom:20px;

`
const CatInfo = styled.div`
  flex: 1;
  p{
    font-size: 24px;
    font-weight: 700;
    color: #a9a9a9;
    font-family: 'Raleway';
  }
  h2{
    margin-top:15px;
    font-size: 12px;
    font-weight: 700;
    color: #a9a9a9;
    font-family: 'Raleway';
  }
`;