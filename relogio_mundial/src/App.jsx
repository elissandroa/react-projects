import { useState, useEffect } from 'react'
import './App.css';
import { TimeZoneClock } from './components/TimeZoneClock';
function App() {

  const fusosHorarios = [
    'UTC',
    'GMT',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Berlin',
    'Asia/Tokyo',
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusoHorariosSelecionados, setFusoHorariosSelecionados] = useState([
    fusoHorarioLocal
  ]);
  const [fusoHorario, setFusoHorario] = useState("");

  
  const adicionarFusoHorario = (e) => {
    const novoFuso = e.target.value;
    if (!fusoHorariosSelecionados.includes(novoFuso)) {
      setFusoHorariosSelecionados([...fusoHorariosSelecionados, novoFuso]);
    }
  }

  const  removerFusoHorario = () => {
    const novoFuso = fusoHorariosSelecionados.filter((fuso) => fuso != fusoHorario);
    setFusoHorariosSelecionados(novoFuso);
  }

  useEffect(() => {
    removerFusoHorario(fusoHorario);
  },[fusoHorario])

  return (

    <div>
      <h1>Relógio Mundial</h1>
      <select onChange={adicionarFusoHorario}>
        <option value="" disabled selected>
          Selecione um fuso horário
        </option>
        {fusosHorarios.map((fuso) => (
          <option
            key={fuso}
            value={fuso}>
            {fuso}
          </option>
        ))}
      </select>
      <div>{fusoHorariosSelecionados.map((fuso) => (
        <TimeZoneClock key={fuso} timeZone={fuso} setFusoHorario={setFusoHorario}/>
      ))}</div>
    </div>
  )
}

export default App
