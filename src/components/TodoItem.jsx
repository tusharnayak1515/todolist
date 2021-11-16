import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faEdit
} from "@fortawesome/free-solid-svg-icons";

import styles from './todoItem.module.css';
// import TodoForm from './TodoForm';

const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
const editIcon = <FontAwesomeIcon icon={faEdit} />;

const TodoItem = ({ deleteTodo, todos, setIsEdit, setcurrentTodo, date }) => {

    const editTodo = (todo) => {
        // console.log("edit");
        setcurrentTodo(todo);
        setIsEdit(true);
        // return <TodoForm todoItem={todo} val={todo.value} setVal={setVal} onValChange={onValChange} icon={editIcon} onEdit={onEdit} />
    }

    return (
        <div className={styles.todo_container}>
            {todos.length === 0 ? <p className={styles.noTodos}>No todos</p> :
                <>
                    {todos.map((todo) => {
                        return (
                            <div className={styles.todoItem} key={todo.id}>
                                <div className={styles.items}>
                                    {todo.day && console.log(todo.day.date)}
                                    {date && console.log(date)}
                                    {todo.day && todo.day.date === date ?
                                        <>
                                            <p>{todo.name}</p>
                                            <div>
                                                <span className={styles.edit} onClick={() => editTodo(todo)}>{editIcon}</span>
                                                <span className={styles.delete} onClick={() => deleteTodo(todo)}>{deleteIcon}</span>
                                            </div>
                                        </> :
                                        <p className={styles.noTodos} style={{ color: "black" }}>No todos</p>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </>}
        </div>
    )
}

export default TodoItem
