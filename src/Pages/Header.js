import React from 'react'
import style from './css/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <nav id={style.menu}>
            <ul id={style.menu_list}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/brand'>brand</Link></li>
                <li><Link to='/product'>product</Link></li>
                
            </ul>
        </nav>
    </header>
  )
}
