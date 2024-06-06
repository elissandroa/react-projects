import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const TodoList = () => {
    const { list, filter } = useSelector((state) => state.todos);
    return (
        <div>
            <button>Todas</button>
            <button>Completas</button>
            <button>Incompetas</button>
            <ul>
                {list.map((todo) => (
                    <li>
                        <span>{todo.text}</span>
                        <button>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
