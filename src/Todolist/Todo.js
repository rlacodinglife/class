import React, { useState } from 'react'
import { BsTrash } from "react-icons/bs";
import style from "./css/Todo.module.css";
import { v4 as uuidv4 } from 'uuid';

export default function Todo({ todos, onUpdate,onRemove }) {

    const changeStatus = (e) => {
        let newstatus = e.currentTarget.checked === true ? 'complete' : 'active'
        onUpdate({ ...todos, status: newstatus })

    }

    const deleteTodo=()=>{
        onRemove(todos)
    }


    return (
        <>
            {/* <li className={style.todoli}>
                <input type='checkbox' />
                <p className={style.todo_text}>반응형 공부하기</p>
                <button className={style.trash_btn}><BsTrash /></button>
            </li>
            <li className={style.todoli}>
                <input type='checkbox' />
                <p className={style.todo_text}>자바 공부하기</p>
                <button className={style.trash_btn}><BsTrash /></button>
            </li>
            <li className={style.todoli}>
                <input type='checkbox' />
                <p className={style.todo_text}>리액트 공부하기</p>
                <button className={style.trash_btn}><BsTrash /></button>
            </li> */}

            {

                <li key={uuidv4()} className={style.todoli}>
                    <input type='checkbox' checked={todos.status === 'complete'} onChange={changeStatus} />
                    <p className={style.todo_text}>{todos.text}</p>
                    <button className={style.trash_btn} onClick={deleteTodo}><BsTrash /></button>
                </li>

            }
        </>
    )
}
