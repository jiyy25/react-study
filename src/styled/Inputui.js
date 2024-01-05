import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import { TitleCommon } from './sty/Commonui2'
import arrowbtnimg from '../icon/go.svg'
import { GotoBtnCommon, GotoIcoCommon, GotoACommon, Abtn, InputUi } from './sty/Commonui2'

//Output(엄마..?!)을 만들고 Abtn을 델꼬옴
const Output = styled(Abtn)`
    border: 1px solid #ccc;
    text-align: center;
    display: block;
    width: 150px;
    height: 50px;
    line-height: 3;
    background-color: white;
    margin: 0 auto;
    text-decoration: none;
`
const Output2 = styled(Abtn)`
    border: 1px solid #ccc;
    text-align: center;
    display: block;
    width: 150px;
    height: 50px;
    line-height: 3;
    background-color: white;
    margin: 0 auto;
    text-decoration: none;
`

function Inputui() {
    return (
        <div className='bg-light p-5'>
            <TitleCommon>필수 정보</TitleCommon>
            <form action="">
                <div className='row'>
                    <InputUi infutinfo={{
                        nm: "company",
                        labeltxt: "회사이름",
                        alerttxt: "회사명을 입력해주세요"
                    }}>회사이름(필수)</InputUi>
                </div>
            </form>

        </div>
    )
}

export default Inputui
