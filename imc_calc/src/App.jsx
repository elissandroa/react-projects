import { useState } from 'react'
import './App.css'
import { ImcCalc } from "./components/ImcCalc"
import { data } from './data/data'
import { ImcTable } from './components/ImcTable';

function App() {
  
  const calcImc = (e, heigth, weight) => {
    e.preventDefault();
    console.log("executou");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");



  return (
    <div className="container">
      {!imc ? <ImcCalc  calcImc={calcImc} /> : <ImcTable />}
    </div>
  )
}

export default App
