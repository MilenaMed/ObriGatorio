import styled from "styled-components"
import { useState } from "react"
import { api } from "../config/ApiConfig.jsx"
import Header from "../components/Headers.js"
import { useEffect } from "react"
import Footer from "../components/Footer.js"

export default function HomePage() {
    const [cats, setCats] = useState([]);
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(() => {
        const promisse = api.get("/home", config)
            .then((res) => setCats(res.data))
            .catch((err) => console.log(err.response.data));
    }, []);
    return (
        <>
            <Header />
            <ConteinerHome>
                {cats.map(cat => (
                    <ProdutoDiv key={cat.catName}>
                        <img src={cat.photo} alt={cat.catName} />
                        <CatInfo>
                            <p>{cat.catName}</p>
                            <h1>{cat.datadescription}</h1>
                            <h2> contato da ong: {cat.ongContact}</h2>
                        </CatInfo>
                    </ProdutoDiv>
                ))}
            </ConteinerHome >
            <Footer />
        </>
    )
}

const ConteinerHome = styled.div`
margin-top:60px;
height: 100vh;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
background-color: #fee1e8;
`

const ProdutoDiv = styled.div`
height: 150px;
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