import React from 'react';

const Todo = ({id, task, removeTodo}) => {
    const handleClick = () => {
        removeTodo(id);
    }

    return (
        <div className="todo">
            <p>Todo: {task}</p>
            <button className="remove-btn" onClick={handleClick}>X</button>
        </div>
    )
}

export default Todo;