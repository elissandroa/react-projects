import React from 'react'

export const TableHeader = ({ onColumnClick }) => {
  return (
    <thead>
      <tr>
        <th onClick={() => onColumnClick("nome")}>Nome</th>
        <th onClick={() => onColumnClick("idade")}>Idade</th>
        <th onClick={() => onColumnClick("cargo")}>Cargo</th>
      </tr>
    </thead>
  )
}
