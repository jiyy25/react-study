import React, { useEffect, useRef, useState } from "react";
import './interview.css'
const Preinterview = () => {
    let shownum = 0;
    const preinterview = [
        {
            q: "비전공자로써 프론트앤드 수업 훈련의 가장 어려웠던 점은?",
            d: " 변수 선언에서 부터 함수선언/ 실행 이런 개념이 너무 생소한데.../아주 죽을맛이군"
        },
        {
            q: "자바스크립트, 리액트",
            d: "아이고 힘들다 ~ / 실행식을 짜는 것이 너무 어려워요/ 뭔가 창의력이 필요한 것 같음.."
        },
        {
            q: "자바스크립트, 리액트",
            d: "아이고 힘들다 ~ / 실행식을 짜는 것이 너무 어려워요/ 뭔가 창의력이 필요한 것 같음.."
        }
    ]

    useEffect(() => {
        document.querySelectorAll("#faq li")[0].classList.add('act'); //화면이 시작되자마자 0번실행
        const start = setInterval(() => { //setinterval은 첫화면과 관련없다 !
            shownum++;
            shownum %= preinterview.length;
            document.querySelectorAll("#faq li").forEach((tag, num) => {
                if (shownum === num) {
                    tag.classList.add('act')
                } else {
                    tag.classList.remove('act')
                }
            })
        }, 2000);
        return () => {
            clearInterval(start);
        }
    }, [])
    // 송수신 결과는 항상 데이터타입이 문자이다. 단 node서버와 리액트는 자바스크립트 기반이라서 json
    return (
        <section id="faq">
            <h2>면접전에 봐주세요</h2>
            <ul>
                {preinterview.map((el, i) => {
                    return ( //리턴중요!!
                        <li>
                            <h3>{el.q}</h3>
                            {/* 클릭했을 때, shownum의 숫자를 i와 맞춰주겠다. */}
                            {<div>
                                {/* split 특수문자 같은 것으로 Array 타입으로 전환해준다 */}
                                {
                                    // {}를 지우면 return 생략가능 
                                    el.d.split('/').map((eel, ii) =>
                                        //el.d를 이미 불렀기 때문에 d까지 소환할 필요없음
                                        <React.Fragment key={ii} >
                                            {/* React.Fragment컴포넌트는 리액트언어상 return시 xml규칙을 엄수하기 위한 형식태그일 뿐 아무것도 출력하지 않는다 */}
                                            {eel}
                                            < br />
                                        </React.Fragment>
                                    )}
                            </div>}
                        </li>)
                })}

            </ul>
        </section >
    )
}

export default Preinterview;