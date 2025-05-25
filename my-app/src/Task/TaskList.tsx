import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./TaskReducder";
import { addWord, updateList, moveToDone, moveToTasks, clearDone, removeList } from "./TaskSlice";
import { VscCheck } from "react-icons/vsc";
import "./Task.css";

const TaskList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const done = useSelector((state: RootState) => state.task.done);

    return (
        <div className="todo">
            <div className="todo-container">
                <div className="todo-list">
                    <h3 className="todo-tit">ЗАДАЧА</h3>
                    <button onClick={() => dispatch(addWord())} className="btn4">Новая</button>
                </div>
                <hr />
                {tasks.map(task => (
                    <div key={task.id}>
                        <div className="todo-btn5-g">
                            <button onClick={() => dispatch(moveToDone(task.id))} className="todo-btn5"></button>
                        </div>
                        <input
                            type="text"
                            value={task.word}
                            onChange={e => dispatch(updateList({ id: task.id, word: e.target.value }))}
                            className="todo-input"
                        />
                        <button onClick={() => dispatch(removeList({ id: task.id }))} className="todo-btn6">X</button>
                    </div>
                ))}
            </div>

            <div className="modal2-main">
                <div className="modal2">
                    <div className="modal2-btn1">
                        <h2 className="modal2-tit">ВЫПОЛНЕНО</h2>
                        <button onClick={() => dispatch(clearDone())} className="modal2-btn2">Очистить</button>
                    </div>
                    {done.map(task => (
                        <div>
                            <div onClick={() => dispatch(moveToTasks(task.id))} className="modal2-ikonka"> <VscCheck color="red" size={24} /></div>
                            <input
                                key={task.id}
                                type="text"
                                value={task.word}
                                onChange={e => dispatch(updateList({ id: task.id, word: e.target.value }))}
                                className="modal2-input"
                            />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskList;