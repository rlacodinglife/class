import React, { useState } from 'react'
import Title from './Todolist/Title'
import TodoState from './Todolist/TodoState'
import Totolist from './Todolist/Todolist'



export default function App13_Todolist() {

    const allcategorys = ['all', 'active', 'complete']

    const [category, Setcategory] = useState('all')

    /**changeCategory=(매개변수) */
   
    const changeCategory = (category) => {
        Setcategory(category)
    }


    return (
        <div>
            <Title />
            <TodoState allcategorys={allcategorys} category={category} onChangeCategory={changeCategory} />
            <Totolist category={category}/>

        </div>
    )
}
