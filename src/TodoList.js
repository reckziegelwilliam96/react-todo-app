import React from 'react';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';


const TodoList = () => {
    const INITIAL_STATE = [
        {id: 1, task: 'clean kitchen'},
        {id: 2, task: 'sweep floors'},
        {id: 3, task: 'wash bathroom'}
    ]
    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }
    const removeTodo = (id) => {
        const newTodos = boxes.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }
    
    return(
        <div>
            <h3>Todo list</h3>
            <NewTodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                    <Box
                      key={todo.id}
                      id={todo.id}
                      task={todo.task}
                      removeBox={removeTodo}
                    />
                ))}
        </div>
    )

}

export default TodoList;