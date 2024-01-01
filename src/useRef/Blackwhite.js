import React, { useEffect, useState } from 'react'
import '../css/style.css'

function Blackwhite() {
    // const [black, setWhite] = useState(true)
    const [num, setNum] = useState(0)




    //자바스크립트 함수로 만들어보기
    let change = true
    

    function colorChange() {
        if (change) {
            document.querySelector("#BWArea").classList.add('whiteMode')

        } else {
            document.querySelector("#BWArea").classList.remove('whiteMode')
        }
        change = !change
        // change 변수의 값을 현재상태의 반대로 설정하여 토글
        // 클래스가 추가 또는 제거 된 후에 변수값이 true였으면 false, false였으면 true로 계속 변경되기 떄문에 토글이 될 수 있는 것.
    }


    useEffect(() => {
        colorChange()
    }, [])

    //num이 1초마다 랜더링 될 때마다 그 부분만 랜더링 됨 
    useEffect(() => {
        const autoNumber = setInterval(() => {
            setNum(num + 1);
        },1000);

        return () => {
            clearInterval(autoNumber);
        };

    }, [num]);

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
