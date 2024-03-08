import React, { useContext } from 'react'
import './css/Header.css'
import { DarkModeContext } from './DarkModeContext'

export default function Header() {

    const { darkMode, toggleDarkMode } = usuContext(DarkModeContext)



    return (
        <header style={darkMode === true ? { backgroundColor: '#212a3e' } : { backgroundColor: '#eeeeee' }}>
            <button onClick={toggleDarkMode}>
                {darkMode ? '라이트모드' : '다크모드'}
            </button>
        </header>
    )
}
