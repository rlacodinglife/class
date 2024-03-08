import React, { useContext } from 'react'
import './css/Footer.css'
import { DarkModeContext } from './DarkModeContext'
export default function Footer() {

    const { darkMode } = useContext(DarkModeContext)





    return (
        <footer style={darkMode ? { backgroundColor: '#212A3E' } : { backgroundColor: '#eeeeee' }}>

        </footer>
    )
}
