import React from 'react'
import style from './css/TodoState.module.css'
import { v4 as uuidv4 } from 'uuid';


export default function TodoState({ allcategorys, category, onChangeCategory }) {
    return (



        <section id={style.todostatus}>
            <ul id={style.todostatus_list}>
                {/* <li>
                    <button className={`${style.status_btn} ${style.selected}`}>all</button>
                </li>
                <li>
                    <button className={`${style.status_btn}`}>acive</button>
                </li>
                <li>
                    <button className={`${style.status_btn}`}>complete</button>
                </li> */}

                {
                    allcategorys.map((item) => {
                        return (
                            <li key={uuidv4()}>
                                <button className={`${style.status_btn} ${item===category && style.selected}`} onClick={()=>{onChangeCategory(item)}}>{item}</button>
                            </li>
                        )
                    })
                }


            </ul>
        </section>

    )
}
