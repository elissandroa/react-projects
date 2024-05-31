import "./AppStyled.js";

import { useEffect, useState } from "react";
import axios from 'axios'/

import Busca from "./components/Busca.jsx";
import ClimaAtual from "./components/ClimaAtual.jsx";
import Previsao from "./components/Previsao.jsx";
import { Titulo } from "./AppStyled.js";


function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  return (
    <div>
      <Titulo>Condições climáticas</Titulo> 
      <Busca />
      <ClimaAtual />
      <Previsao />
    </div>
  );
}

export default App;
