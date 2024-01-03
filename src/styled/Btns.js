import React from 'react'
import { Wbtn, Bbtn, Parentbtn } from './sty/Commonui'
import { BgBanner } from './sty/Commonui'
import styled from "styled-components";
import { Wildbanner } from './sty/Commonui';

//만들어놓은 태그 컴포넌트를 갖고와서 스타일을 입힌후 컴포넌트로 만들어 준 것이닷. BgBanner를 import해서 style을 추가한 것
const Outcom = styled(BgBanner)`
    background-color: red;
    color: white;
    font-size: 50px;
`
const Outcom2 = styled(BgBanner)`
    background-color: yellow;
    color: black;
    font-size: 50px;
`


//styled컴포넌트와 쓰는방법을 비교해봅세
function Btns() {
    const bodybg = {
        backgroundColor: "black",
        padding: "5rem",
        textAlign: "center"
    }

    return (
        <div style={bodybg}>
            <BgBanner bgcolor='gray'>
                <h2>큰글씨</h2>
                <p>작은글씨</p>
            </BgBanner>
            <Outcom>빨강이</Outcom>
            <Outcom2>노랑이</Outcom2>
            <Wbtn>하얀버튼</Wbtn>
            <Bbtn>검정버튼</Bbtn>
            <Parentbtn>초롱이</Parentbtn>
            <Wildbanner>스타일 컴포넌트 그대로</Wildbanner>
        </div>
    )
}

export default Btns
