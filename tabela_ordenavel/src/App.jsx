import { useState } from "react";
import { SearchBar } from "./components/SearchBar"
import { TableHeader } from "./components/TableHeader"
import { TableRow } from "./components/TableRow"

function App() {

  const [data, setData] = useState([
    { nome: "Ana", idade: 25, cargo: "Engenheira" },
    { nome: "João", idade: 30, cargo: "Desenvolvedor" },
    { nome: "Maria", idade: 22, cargo: "Designer" },
    { nome: "Carlos", idade: 40, cargo: "Gerente" },
    { nome: "Sofia", idade: 28, cargo: "Analista" },
  ]);

  return (
   <div className="container">
    <h1>Tabela de Usuários</h1>
    <SearchBar />
    <table>
      <TableHeader />
      <tbody>
        <TableRow />
      </tbody>
    </table>
   </div>
  )
}

export default App
