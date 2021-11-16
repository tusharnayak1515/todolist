import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-date-picker';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusCircle,
    faEdit
} from "@fortawesome/free-solid-svg-icons";

import TodoItem from './TodoItem';

import styles from './home.module.css';
import './datePicker.css';
import './calender.css';
import TodoForm from './TodoForm';

const addIcon = <FontAwesomeIcon icon={faPlusCircle} />;
const editIcon = <FontAwesomeIcon icon={faEdit} />;

const Home = ({date, setDate, todos, setTodos, addTodo, deleteTodo, onEdit}) => {

    const [val, setVal] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [currentTodo, setcurrentTodo] = useState({id: "", name: "", checked: false});
    // console.log(currentTodo);
    // console.log(todos);

    const onValChange = (e) => {
        setVal(e.target.value);
    }

    const onEditValChange = (e) => {
        setcurrentTodo({id: currentTodo.id, name: e.target.value, checked: false});
    }

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])

    return (
        <div id={styles.home}>
            <h1>Todolist</h1>
            <div className={styles.date}>
                <DatePicker
                    onChange={setDate}
                    value={date}
                    format="dd-MM-y"
                    dayPlaceholder="dd"
                    monthPlaceholder="mm"
                    yearPlaceholder="yyyy"
                />
            </div>
            <div className={styles.todolist}>
                <div className={styles.addTodoItem}>
                    <TodoForm role="add" val={val} setVal={setVal} onValChange={onValChange} icon={addIcon} addTodo={addTodo} />
                    {isEdit && <TodoForm role="edit" setIsEdit={setIsEdit} onEditValChange={onEditValChange} todoItem={currentTodo} val={currentTodo.name} setVal={setVal} icon={editIcon} onEdit={onEdit} />}
                </div>
                <TodoItem date={date && date.getDate()} setcurrentTodo={setcurrentTodo} val={val} setVal={setVal} setIsEdit={setIsEdit} onValChange={onValChange} setTodos={setTodos} todos={todos} deleteTodo={deleteTodo} onEdit={onEdit} />
            </div>
        </div>
    )
}

export default Home
