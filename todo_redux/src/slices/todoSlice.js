import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const lista = JSON.parse(localStorage.getItem("to-dos"));
export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        list: lista,
        filter: "all",
    }, reducers: {
        addTodo: (state, action) => {
            state.list.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            }),
            localStorage.setItem("to-dos", (JSON.stringify(state.list)));
        },
        toggleTodo: (state, action) => {
            const todo = state.list.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem("to-dos", (JSON.stringify(state.list)));
            }
        },
        removeTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id != action.payload);
            localStorage.setItem("to-dos", (JSON.stringify(state.list)));
           
        },
        filtersTodo: (state, action) => {
            state.filter = action.payload;
        },
    }

});

export const { addTodo, toggleTodo, removeTodo, filtersTodo } = todoSlice.actions;

export default todoSlice.reducer;