import React from 'react'
import style from './css/Todolist.module.css'
import Todo from './Todo'
import AddTodo from './AddTodo'
import { useState } from 'react'


export default function Totolist({ category }) {

    const initData = [
        { id: "001", text: '반응형 공부하기', status: 'active' },
        { id: "002", text: '자바 공부하기', status: 'active' },
        { id: "003", text: '리액트 공부하기', status: 'active' },
    ]

    const [allTodos, SetAllTodos] = useState(initData)


    /**categoryItem=지금선택된애들에 해당하는애들(매개변수) */
    const categoryItems = getCategoryItems(allTodos, category)

    function getCategoryItems(allTodos, category) {
        if (category === 'all') {
            return (
                allTodos
            )
        } else {
            return (
                allTodos.filter((item) => (item.status === category))
            )
        }
    }

    
    const updateTodo = (todo) => {
        SetAllTodos((prev) => {
            return (
                prev.map((item) => {
                    if (item.id === todo.id) {
                        return (todo)
                    } else { return ({ ...item }) }
                })
            )
        })
    }

    /**addTodo=더하기 */
    const addTodo = (todo) => {
        SetAllTodos((prev) => {
            return (
                [...prev, todo]
            )
        })
    }

    const removeTodo = (todo) => {
        SetAllTodos((prev) => {
            return (
                prev.filter((item) => (item.id !== todo.id)))
        })
    }






    return (
        <>
            <section id={style.todolist}>
                <ul id={style.todolist_list}>
                    {
                        categoryItems.map((item) => {
                            return (
                                <Todo todos={item} onUpdate={updateTodo} onRemove={removeTodo}/>
                            )
                        })
                    }
                </ul>
            </section>

            <AddTodo onAddTodo={addTodo} />
        </>
    )
}
