import { ClimaInfo } from "./ClimaAtualStyles"

const ClimaAtual = ({ clima }) => {
if(!clima) {
  <p>Carregando...</p>
}
  return (
    <ClimaInfo>
      <h3>{clima.name}</h3>
      <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description} />
      <p>{parseFloat(clima.main.temp).toFixed(0)}ºC</p>
      <p>{clima.weather[0].description}</p>
    </ClimaInfo>
  )
}

export default ClimaAtual