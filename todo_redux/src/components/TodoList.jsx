import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, removeTodo } from '../slices/todoSlice';


export const TodoList = () => {
    const { list, filter } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <button>Todas</button>
            <button>Completas</button>
            <button>Incompetas</button>
            <ul>
                {list.map((todo) => (
                    <li key={todo.id}>
                        <span onClick={() => dispatch(toggleTodo(todo.id))} className={todo.completed ? "line-through" : null}>{todo.text}</span>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
