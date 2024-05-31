import "./AppStyled.js";

import { useEffect, useState } from "react";
import axios from 'axios';

import Busca from "./components/Busca.jsx";
import ClimaAtual from "./components/ClimaAtual.jsx";
import Previsao from "./components/Previsao.jsx";
import { Titulo } from "./AppStyled.js";

const apiKey = import.meta.env.VITE_API_KEY || "";

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`)
      setClima(respostaClima.data);
    } catch (error) {
      console.log("Erro ao buscar clima: ", error);
    }
  }

  return (
    <div>
      <Titulo>Condições climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      <ClimaAtual />
      <Previsao />
    </div>
  );
}

export default App;
