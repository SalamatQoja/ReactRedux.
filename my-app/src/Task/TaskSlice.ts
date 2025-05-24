// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// interface List {
//     id: number;
//     word: string;
//     completed: boolean;
// }

// const initialState: List[] = [];

// const TaskSlice = createSlice({
//     name: "task",
//     initialState,
//     reducers: {
//         addWord: (state) => {
//             state.push({id: Date.now(), word: '', completed: false});
//         },

//         updateList:(state,action: PayloadAction<{ id: number; word: string}>) => {
//             const todo = state.find(t => t.id === action.payload.id);
//             if(todo) {
//                 todo.word = action.payload.word;
//             }
//         },

//         removeList: (state, action: PayloadAction<{id: number}>) => {
//             return state.filter(t => t.id !== action.payload.id);
//         }
//     },
// });

// export const {addWord, updateList, removeList} = TaskSlice.actions;
// export default TaskSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: number;
    word: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
    done: Task[];
}

const initialState: TaskState = {
    tasks: [],
    done: [],
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addWord: (state) => {
            state.tasks.push({ id: Date.now(), word: "", completed:false });
        },
        updateList: (state, action: PayloadAction<{ id: number; word: string }>) => {
            const { id, word } = action.payload;
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                task.word = word;
            } else {
                const doneTask = state.done.find(t => t.id === id);
                if (doneTask) doneTask.word = word;
            }
        },
        moveToDone: (state, action: PayloadAction<number>) => {
            const index = state.tasks.findIndex(t => t.id === action.payload);
            if (index >= 0) {
                const [task] = state.tasks.splice(index, 1);
                state.done.push(task);
            }
        },
        moveToTasks: (state, action: PayloadAction<number>) => {
            const index = state.done.findIndex(t => t.id === action.payload);
            if (index >= 0) {
                const [task] = state.done.splice(index, 1);
                state.tasks.push(task);
            }
        },
        clearDone: (state) => {
            state.done = [];
        },

        
        removeList: (state, action: PayloadAction<{id: number}>) => {
            state.tasks =  state.tasks.filter(t => t.id !== action.payload.id);
        }
    },
});

export const { addWord, updateList, moveToDone, moveToTasks, clearDone, removeList } = taskSlice.actions;
export default taskSlice.reducer;