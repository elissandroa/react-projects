import React from 'react'

export const TableRow = ({ row }) => {
    return (
        <tr>
            <td>{row.nome}</td>
            <td>{row.idade}</td>
            <td>{row.cargo}</td>
        </tr>
    )
}
