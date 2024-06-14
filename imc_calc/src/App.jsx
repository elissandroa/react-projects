import { useState } from 'react'
import './App.css'
import { ImcCalc } from "./components/ImcCalc"
import { data } from './data/data'
import { ImcTable } from './components/ImcTable';

function App() {

  const calcImc = (e,  weight, heigth) => {
    e.preventDefault();

    if (!weight || !heigth) return;

    const weightFloat = +weight.replace(",", ".");
    const heigthFloat = +heigth.replace(",", ".");
    console.log(weightFloat);
    console.log(heigthFloat);
    let imcResult = 0;
    imcResult = (weightFloat / (heigthFloat * heigthFloat)).toFixed(1);
    setImc(imcResult);
    

  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");



  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}
    </div>
  )
}

export default App
