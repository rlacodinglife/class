import React, { useContext } from 'react'
import './css/Content.css'
import { DarkModeContext } from './DarkModeContext'
export default function Content() {

    const { darkMode} = useContext(DarkModeContext)





    return (




        < section className='content' style={darkMode? {backgroundColor:'#2f3c58'}:{backgroundColor:'white'}}>

        </section >
    )
}
