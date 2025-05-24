import { useAppSelector } from "./hook";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useAppSelector(state => state.todos.list);

    return (
        <div>
            <div className="todo-inp2">
                <ul className="todo-inp1">
                    {todos.map((todo) => (
                        <TodoItem 
                            key={todo.id}
                            {...todo}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
