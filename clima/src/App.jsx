import "./AppStyles.js";

import { useEffect, useState } from "react";
import axios from 'axios';

import Busca from "./components/Busca.jsx";
import ClimaAtual from "./components/ClimaAtual.jsx";
import Previsao from "./components/Previsao.jsx";
import { ClimaContainer, Titulo } from "./AppStyles.js";

const apiKey = import.meta.env.VITE_API_KEY || "";


function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`);
      setCidade(resposta.data.name);
      setClima(resposta.data);

      const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
    })
  }, []);


  const buscarClima = async () => {
    if (!cidade) {
      return;
    }
    try {
      const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`

      );
      const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );

   
      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
    } catch (error) {
      console.log("Erro ao buscar clima: ", error);
    }
  }

  return (
    <ClimaContainer>
      <Titulo>Condições climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <ClimaAtual clima={clima} />}
      {previsao.length > 0 && <Previsao previsoes={previsao} />}
    </ClimaContainer>
  );
}

export default App;
