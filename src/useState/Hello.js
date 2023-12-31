import React, { useState } from 'react'
import '../css/style.css'

function Hello() {
    // const [isChange, setChange] = useState("안녕 2023..")
    //토글기능으로 했을때 필요없짐
    //초기값은 초기값일 뿐 정해져있는 값이 아님

    const [clickChange, setClickChange] = useState(false)
    // const [clickChange, setClickChange] = useState("아무거나")
    //true,false를 쓰지않아도 값이 없으면 fasle 있으면 true로 인식하는 것 같음..!
    console.log(clickChange);
    return (
        <div id='hello'>

            <h1>{!clickChange ? "안녕 2023.." : "리액트 드루왕 2024!"}</h1>
            <button onClick={() => { setClickChange(!clickChange) }}>클릭</button>
            {/* 현재상태의 반대로. false면 true, true면 false  , 클릭할 때마다 담겨지는 상태가 달라지기 때문에 계속 클릭할 수 있다*/}
        </div>
    )
}

export default Hello
