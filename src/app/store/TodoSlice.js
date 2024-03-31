import { useId } from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos : [{id:1,text:'Nikhil'}]
}

const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo : (state , action) => {
            const newTodo = {
                id: useId(),
                text : action.payload.text,
            }
            state.todos.push(newTodo)
        },
        editTodo : (state,action) => {
            const editTodoId =  action.payload.id
            const editedText = action.payload.text
            const index = state.todos.findIndex(editTodoId);

            if (index != -1) {
                state.todos[index].text = editedText;
            }
        },
        removeTodo : (state , action) => {
            const  removeTodoId = action.payload
            return   state.todos.filter((todo)=> todo.id !== removeTodoId )
        }
    }
});

export const { addTodo , editTodo , removeTodo } = todoSlice.actions;

export default todoSlice.reducer
