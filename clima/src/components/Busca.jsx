import {BotaoBuscar, BuscaCidade, BuscaContainer } from './BuscaStyles';
const Busca = ({cidade, setCidade, buscarClima}) => {
  return (
    <BuscaContainer>
        <BuscaCidade type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Digite uma cidade" required/>
        <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  )
}

export default Busca