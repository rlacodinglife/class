import React, { useRef } from 'react'
import style from './css/activateMenu.module.css'
export default function App18_activateMenu01() {

    const menus = [
        {
            index: 0, text: 'menu1'
        },
        {
            index: 1, text: 'menu2'
        },
        {
            index: 2, text: 'menu3'
        },
        {
            index: 3, text: 'menu4'
        },
    ]

    const mainMenu = useRef([])

   let selectedMenu = null;

    const activateMenu = (index) => {
        // selectedMenu.classList.remove(`${style.selected}`)
        if(selectedMenu!==null && selectedMenu!==mainMenu.current[index]){
            selectedMenu.classList.remove(`${style.selected}`)
        }

        if(selectedMenu!==mainMenu.current[index]){
            selectedMenu=mainMenu.current[index]
            selectedMenu.classList.add(`${style.selected}`)
        }
    }



    return (

        <div>
            <ul id={style.menu_list}>
                {
                    menus.map((item) => {
                        return (
                            <li key={item.index} ref={(el) => (mainMenu.current[item.index] = el)} onClick={() => { activateMenu(item.index) }}>{item.text}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
