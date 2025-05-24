import { useAppDispatch } from './hook';
import { removeTodo } from './todoSlice';

interface TodoItemProps {
    id: string,
    title: string,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title }) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <div style={{
                width: "415px", height: "30px", border: "1px solid gray",
                borderRadius: "2px", marginLeft: "20px"
            }}>
                <span className='span'>{title}</span>
                <div onClick={() => dispatch(removeTodo(id))} className='remove'>Udalit</div>
            </div>
        </div>
    );
};

export default TodoItem;