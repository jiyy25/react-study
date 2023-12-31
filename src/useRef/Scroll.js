import React, { useState, useRef, useEffect } from 'react';

function Scroll() {
    const [changetxt, setChangetxt] = useState("Scroll Position Tracking");
    const targetRef = useRef(null);
    // useRef는 랜더링을해도 값을 초기화하지 않고 유지된다.


    const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        // ||or식 : 둘중하나만 성사되도 실행. 앞의 식이 좀 더 비중이 높다고 볼 수 있다. 그래야 빠르게 처리할 수 있기 때문.
        //scrollPosition의 데이터는 숫자이면서 스크롤의 위치값을 나타냄

        const targetTop = targetRef.current.getBoundingClientRect().top
        //useRef는 targetRef.current에 접근해야만 사용이 가능. 외워야함. 
        //여기서는 div객체를 의미함. 페이지 내의 상단위치
        //스크롤이 될때마다 랜더링되면 끔찍하기 때문에 useRef를 사용

        if (targetTop < scrollPosition) {
            targetRef.current.style.backgroundColor = "pink";
            //내가 스크롤 한 위치가 div의 상단 위치보다 커지면 빨강색-> 스크롤을 내리때마다 숫자가 커지니까 div에 닿고 그 곳을 넘어가는 순간 스크롤 이벤트가 생성된다고 보면 됨.
            setChangetxt("스크롤 포지션 트래킹")
        } else {
            targetRef.current.style.backgroundColor = "white";
            setChangetxt("Scroll Position Tracking")
        }
    }

    useEffect(() => {
        //랜더링 일어나는 시점에 맞춰서 실행하는 행동 결정
        //랜더링 될 때 1회만 하겠다.
        const targetElement = targetRef.current
        if (targetElement) {
            //useRef객체가 없으면 실행 안하겠다. 
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (targetElement) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [])

    return (
        <div ref={targetRef} style={{ border: '1px solid #ccc', marginTop: '500px' }}>
            <h2>{changetxt}</h2>
            <div style={{ height: '700px' }}>Scroll down to see the effect</div>
        </div>
    )
}

export default Scroll
