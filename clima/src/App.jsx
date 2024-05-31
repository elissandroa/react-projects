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
    if(!cidade){
      return;
    }
    try {
      const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`

      );
      const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`

      );
      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0,5));
    } catch (error) {
      console.log("Erro ao buscar clima: ", error);
    }
  }

  return (
    <div>
      <Titulo>Condições climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <ClimaAtual clima={clima} />}
      {previsao.length > 0 && <Previsao previsoes={previsao} />}
    </div>
  );
}

export default App;
