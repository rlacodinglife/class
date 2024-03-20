import React, { useEffect, useRef, useState } from 'react';
import styles from './css/accordionmenu.module.css'
import { gsap } from 'gsap';

function App27_accordionmenu_source() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )
    const mainMenuList = [  // 메뉴구조를 서브메뉴와 함께 배열 객체로 적용 
        { index: 0, name: 'Home', pathname: '/', subMenuList: [] },
        { index: 1, name: '여행정보', pathname: '/', subMenuList: [{ index: 0, name: '여행지정보', pathname: '/' }, { index: 1, name: '여행준비', pathname: '/' }, { index: 2, name: '유용한사이트', pathname: '/' }] },
        { index: 2, name: '테마여행', pathname: '/', subMenuList: [{ index: 0, name: '액티비티', pathname: '/' }, { index: 1, name: '싱가폴의밤', pathname: '/' }, { index: 2, name: '미식여행', pathname: '/' }, { index: 3, name: '도심투어', pathname: '/' }] },
        { index: 3, name: '이벤트', pathname: '/', subMenuList: [{ index: 0, name: '이벤트', pathname: '/' }] },
        { index: 4, name: '고객센터', pathname: '/', subMenuList: [{ index: 0, name: 'Q&A', pathname: '/' }, { index: 1, name: '고객의소리', pathname: '/' }] }
    ]

    const menuWrap = useRef()
    const menuBtn = useRef()
    const closebtn = useRef()
    const grayLayer = useRef()

    const [selectedIndex, setSelectedIndex] = useState(null)


    //  초기설정 useEffect로 시작시 한번만 실행하게한다
    useEffect(() => {
        grayLayer.current.style.display = 'none'
        menuWrap.current.style.right = '-60vw'
        menuWrap.current.style.display = 'none'
    }, [])

    const menuOpen = () => {
        gsap.set('body,html', { overflow: 'hidden' })
        grayLayer.current.style.display = 'block'
        menuWrap.current.style.display = 'block'
        gsap.to(menuWrap.current, { right: 0, duration: 0.5, ease: 'power1.out' })
    }

    const menuClose = () => {
        grayLayer.current.style.display = 'none'
        gsap.to(menuWrap.current, {
            right: '-60vw', duration: 0.6, ease: 'power1.out', onComplete: () => {
                menuWrap.current.style.display = 'none'
                gsap.set('body,html', { overflow: 'visible' })
            }
        })
    }


    const menuActivateIndex = (index) => {
        setSelectedIndex(index)
    }





    return (
        <header>
            <h2 className={styles.mobilemenu_icon} ref={menuBtn} onClick={menuOpen}><img src="images/mobilemenu.png" alt="모바일메뉴" /></h2>
            <nav id={styles.mobilemenu} ref={menuWrap}>
                <div id={styles.mobilemenu_inner}>
                    <p>환영합니다.<br />로그인 해주세요.
                        <span id={styles.mobileclose_btn} ref={closebtn} onClick={menuClose}><img src="images/closebtn.png" alt="닫기" /></span>
                    </p>
                    <ul id={styles.mobileloginmenu}>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                    <ul id={styles.mobilemenu_list}>
                        {
                            mainMenuList.map((item) => {
                                return (
                                    <li className={item.index === selectedIndex && styles.selected} style={item.index === selectedIndex ? { height: 55 + (55 * item.subMenuList.length) } : { height: 55 }} onClick={() => {
                                        menuActivateIndex(item.index)
                                    }}>
                                        {/* 서브메뉴의 유무를 가르는것을 여기서 구분해준다 */}

                                        {item.subMenuList.length < 1 ?
                                            <>
                                                {item.name}
                                            </>
                                            :
                                            <>
                                                {item.name}

                                                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                                                <ul className={styles.mobilesubmenu_list}>
                                                    {
                                                        item.subMenuList.map((item) => {
                                                            return (
                                                                // item은 서브메뉴의 각각의 li를 의미한다

                                                                <li>{item.name}</li>
                                                            )
                                                        })
                                                    }

                                                    {/* <li>여행지정보</li>
                                                    <li>여행준비</li>
                                                    <li>유용한사이트</li> */}
                                                </ul>
                                            </>

                                        }


                                    </li>
                                )
                            })
                        }




                        {/* <li>HOME</li>
                        <li>여행정보
                            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                            <ul className={styles.mobilesubmenu_list}>
                                <li>여행지정보</li>
                                <li>여행준비</li>
                                <li>유용한사이트</li>
                            </ul>
                        </li> */}
                        <li>테마여행
                            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                            <ul className={styles.mobilesubmenu_list}>
                                <li>액티비티</li>
                                <li>싱가폴의밤</li>
                                <li>미식여행</li>
                                <li>도심투어</li>
                            </ul>
                        </li>
                        <li>이벤트
                            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                            <ul className={styles.mobilesubmenu_list}>
                                <li>이벤트</li>
                            </ul>
                        </li>
                        <li>고객센터
                            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                            <ul className={styles.mobilesubmenu_list}>
                                <li>Q&A</li>
                                <li>고객의소리</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id={styles.mobile_grayLayer} ref={grayLayer}></div>
            {/* 배경을 어둡게 해주는 div ( 리엑트에서는 DOM 요소를 동적으로 생성하는 것보다 미리 넣어두는게 좋음 ) */}
        </header >
    )
}

export default App27_accordionmenu_source; 
