import React, { useRef } from 'react'
import style from './css/gsap.module.css'
import gsap from 'gsap'

export default function App19_gsap() {

    const ball = useRef()
    const panel = useRef()

    const ballMoving = () => {
        gsap.killTweensOf(ball.current)

        let endX = panel.current.clientWidth - ball.current.offsetWidth

        gsap.set(ball.current,{left:0})
        gsap.to(ball.current, { left: endX, duration: 1, ease: 'power1.out' })
    }

    return (
        <>
            <div id={style.panel} ref={panel}>
                <div id={style.ball} ref={ball}>

                </div>
            </div>

            <button id={style.start_btn} onClick={() => {
                ballMoving()
            }}>start</button>
        </>
    )
}
