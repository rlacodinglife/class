import React from 'react'
import style from './css/Header.module.css'

export default function Header() {
  return (
    <header>
        <nav id={style.menu}>
            <ul id={style.menu_list}>
                <li>Home</li>
                <li>Brand</li>
                <li>Product</li>
            </ul>
        </nav>
    </header>
  )
}
