import React, { useEffect, useState, useRef } from 'react'
import '../css/style.css'

function Blackwhite() {
    // const [black, setWhite] = useState(true)
    const [num, setNum] = useState(0)




    //자바스크립트 함수로 만들어보기
    let change = true;//얘를 사용하면 랜더링 될 때마다 아예 변수자체가 삭제되고 새로 생성됨. 생성되는 순간 타이밍 맞춰서 클릭해야함-> 반응속도 후달림/ 변수가 소멸되는 것을 막아주기위해 Ref를 씀

    const changeR = useRef(true);

    function colorChange() {
        // if (change) {
        //     document.querySelector("#BWArea").classList.add('whiteMode')

        // } else {
        //     document.querySelector("#BWArea").classList.remove('whiteMode')
        // }
        // change = !change
        // change 변수의 값을 현재상태의 반대로 설정하여 토글
        // 클래스가 추가 또는 제거 된 후에 변수값이 true였으면 false, false였으면 true로 계속 변경되기 떄문에 토글이 될 수 있는 것.


        //useRef사용하기 :랜더링을 할 때마다 변수를 다시 처음 부터 만드는 것을 방지..! 변수를 useRef안에 저장해놓으면서 사용함.
        if (changeR.current) {
            document.querySelector("#BWArea").classList.add('whiteMode')

        } else {
            document.querySelector("#BWArea").classList.remove('whiteMode')
        }
        changeR.current = !changeR.current
    }


    // useEffect(() => {
    //     colorChange()
    // }, [])

    //num이 1초마다 랜더링 될 때마다 그 부분만 랜더링 됨 
    useEffect(() => {
        const autoNumber = setInterval(() => {
            setNum(num + 1);
        }, 1000);

        return () => {
            clearInterval(autoNumber);
             //useeffect의 return은 행동하는 함수를 실행해야 됨..~
        };

    }, [num]);

    
    useEffect(() => {
        const autoColor = setInterval(() => {
            colorChange()
        }, 1000);
        return () => { clearInterval(autoColor) }
    }, [])

    return (
        // <div id='BWArea'
        //     style={{ backgroundColor: black ? 'black' : 'white' }}>
        //     <h1 onClick={() => { setWhite(!black) }}
        //         style={{
        //             color: black ? 'yellow' : 'black'
        //         }}
        //     >
        //         {black ? "black" : "white"}</h1>
        //     <p></p>
        // </div>

        <div id='BWArea'>
            <h1 onClick={colorChange}></h1>
            <p>{num}</p>
        </div>
    )
}

export default Blackwhite
