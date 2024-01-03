import React, { useEffect, useRef, useState } from "react";

const Preinterview = () => {
    const faq = useRef(null);
    const [shownum, numupdate] = useState(0)
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
        const autoshow = setInterval(() => {
            numupdate((shownum + 1) % preinterview.length);
        }, 3000);
        return () => {
            clearInterval(autoshow);
        }

    }, [shownum]);

    // 송수신 결과는 항상 데이터타입이 문자이다. 단 node서버와 리액트는 자바스크립트 기반이라서 json

    return (
        <section ref={faq}>
            <h2>면접전 봐주세요</h2>
            <ul>
                {preinterview.map((el, i) => {
                    return (
                        <li>
                            <h3 onClick={() => { numupdate(i) }}>{el.q}</h3>
                            {/* 현재 shownum의 숫자가 클릭했을떄의 i,즉 인덱스와 같다면 <p태그를 뱉어준다>*/}
                            {shownum === i && <p>
                                {el.d.split('/').map((v, ii) =>
                                    <React.Fragment key={ii}>
                                        {v} <br />
                                        {/* split를 하면서 el.d를 이미 불렀기 때문에 d까지 소환할 필요없음 */}
                                    </React.Fragment>

                                    //split 특수문자 같은 것으로 Array 타입으로 전환해준다 
                                    // {}를 지우면 return 생략가능 
                                    // React.Fragment컴포넌트는 리액트언어상 return시 xml규칙을 엄수하기 위한 형식태그일 뿐 아무것도 출력하지 않는다 
                                )}
                            </p>
                            }

                        </li>
                    )
                })}
            </ul>

        </section>
    )
}

export default Preinterview;