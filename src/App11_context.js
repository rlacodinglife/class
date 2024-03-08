import React from 'react'
import Header from './Context/Header'
import Content from './Context/Content'
import Footer from './Context/Footer'
import DarkModeProvider from './Context/DarkModeContext'

export default function App11_context() {
    return (


        <DarkModeProvider>
            <Header />
            <Content />
            <Footer />
        </DarkModeProvider>


    )
}
