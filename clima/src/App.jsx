import "./AppStyled.js";
import Busca from "./components/Busca.jsx";
import ClimaAtual from "./components/ClimaAtual.jsx";
import Previsao from "./components/Previsao.jsx";
import { Titulo } from "./AppStyled.js";

function App() {
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
