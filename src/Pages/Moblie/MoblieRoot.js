import React from 'react'
import MoblieHeader from './MoblieHeader'
import { Outlet } from 'react-router-dom'
import MoblieFooter from './MoblieFooter'

export default function MoblieRoot() {
    return (
       <>
            <MoblieHeader />
              <Outlet />
            <MoblieFooter />
       </>
       
    )
}
