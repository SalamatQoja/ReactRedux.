import { addTodo } from './todoSlice';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Todo.css'

function TodoApp() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText("");
        }
    }

    return (
        <div className='todo-main'>
            <div>
                <NewTodoForm
                    value={text}
                    updateText={setText}
                    handleclick={handleAction}
                />
                <TodoList />
            </div>
        </div>
    );
}



export default TodoApp;