import React, { createContext, useState } from 'react'

export const DarkModeContext=createContext()

export default function DarkModeProvider({children}) {

const [darkMode,setDarkMode]=useState(false)
// 위에는 변수고
const toggleDarkMode=()=>{
    setDarkMode((prev)=>!prev)
}
// 위에는 함수다

//위에것들을 사용하는곳에서 const [변수,함수]=useContext(darkmodecontext)  한다





  return (
    <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
}
