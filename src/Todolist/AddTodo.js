import React, { useState } from 'react'
import style from './css/addtodo.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAddTodo }) {

    const [todoText, setTodoText] = useState('')


    const changeTodoText = (e) => {
        setTodoText(e.currentTarget.value)
    }

    const addTodoData=(e)=>{
        e.preventDefault()
        //막아주는것
       if(todoText.trim().length!==0){
        onAddTodo({id:uuidv4(),text:todoText,status:'active'})
       }
       setTodoText('')
       //add후 빈문자로 시작하기
    }


    return (
        <section id={style.addtodo}>
            <form id={style.add_form}>
                <input type='text' className={style.add_input} value={todoText} onChange={changeTodoText} />
                <button className={style.add_btn} onClick={addTodoData}>add</button>
            </form>
        </section>
    )
}
