import React from 'react'
import { addTodo } from '../slices/todoSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export const AddTodo = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() === "") return;
        dispatch(addTodo(inputText));
        setInputText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button type='submit'>Enviar</button>
        </form>
    )
}
