import React from 'react'
import Header from './Components/Header'
import Visual from './Components/Visual'
import Content from './Components/Content'
import Footer from './Components/Footer'

export default function App02_Props() {
    return (
        <>

            <Header />
            <Visual title="Create react app" text="Set up modern web app by running one command."/>
            <Content text="한국의밥상"/>
            <Footer />
        </>
    )
}