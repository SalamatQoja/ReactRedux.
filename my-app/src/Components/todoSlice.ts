import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: string;
    title: string;
}

type TodoState = {
    list: Todo[];
}

const initialState: TodoState = {
    list: [],
}

const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
            });
        },
      
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter((todo) => todo.id != action.payload);
        }
    }
});

export const { addTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
