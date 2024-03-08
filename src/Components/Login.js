import React, { useState } from 'react'
// import './css/Login.css'

export default function Login() {

    const formStyle = {
        width: '600px',
        height: 'auto',
        margin: '100px auto',
        textAlign: 'center',
        padding: '16px',
        boxSizing: 'border-box',
        backgroundColor: '#eeeeee',
        border: 'solid 1px #ccccccc'
    }

    const [userId, setUserId] =useState('')
    const [userPass,setUserPass] =useState('')

    return (
        <form id='login' style={formStyle}>
            <p>
                아이디 : <input type='text' name='userId' value={userId} onChange={(e)=>{
                    setUserId(e.currentTarget.value)
                }} />
                &nbsp;비밀번호 : <input type='password' name='userPass'  value={userPass} onChange={(e)=>{
                    setUserPass(e.currentTarget.value)
                }}/>
            </p>








        </form>
    )
}
