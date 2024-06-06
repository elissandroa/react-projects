import React from 'react'

export const TodoList = () => {
  return (
    <div>
        <button>Todas</button>
        <button>Completas</button>
        <button>Incompetas</button>
        <ul>
            <li>
                <span>Algum texto tarefa</span>
                <button>Remover</button>
            </li>
            <li>
                <span className='line-through'>Algum texto tarefa</span>
                <button>Remover</button>
            </li>
        </ul>
    </div>
  )
}
