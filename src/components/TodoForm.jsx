import React from 'react';

import styles from './home.module.css';

const TodoForm = ({ role, val, onValChange, onEditValChange, icon, addTodo, setVal, onEdit, todoItem, setIsEdit }) => {

    const addHandler = (e) => {
        e.preventDefault();

        if(!val || /^\s*$/.test(val)) {
            return alert("Todo Value cannot be Empty!");
        }

        else {
            addTodo(val);
            setVal("");
        }
    }

    const editHandler = (e) => {
        e.preventDefault();

        if(!val || /^\s*$/.test(val)) {
            return alert("Todo Value cannot be Empty!");
        }

        else {
            onEdit(val,todoItem.id);
            setIsEdit(false);
        }
    }

    return (
        <>
            {role === "add" &&
                <form onSubmit={addHandler}>
                    <input type="text" value={val} onChange={onValChange} placeholder="Add todo" />
                    <button className={styles.wrapper}><span className="fa-2x">{icon}</span></button>
                </form>
            }
            {role === "edit" &&
                <form onSubmit={editHandler}>
                    <input type="text" value={val} onChange={onEditValChange} placeholder="Edit todo" />
                    <button className={styles.wrapper}><span className="fa-2x">{icon}</span></button>
                </form>
            }
        </>
    )
}

export default TodoForm
