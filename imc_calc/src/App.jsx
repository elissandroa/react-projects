import { useState } from 'react'
import './App.css'
import { ImcCalc } from "./components/ImcCalc"
import { data } from './data/data'
import { ImcTable } from './components/ImcTable';

function App() {

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const calcImc = (e, weight, heigth) => {
    e.preventDefault();

    if (!weight || !heigth) return;

    const weightFloat = +weight.replace(",", ".");
    const heigthFloat = +heigth.replace(",", ".");
    const imcResult = (weightFloat / (heigthFloat * heigthFloat)).toFixed(1);
    setImc(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })

    if(!info) return;


  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");



  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
    </div>
  )
}

export default App
