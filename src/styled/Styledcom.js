import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
const Buttoncom = styled.button`
     background-color: aliceblue;
     border: 0.5px solid #ccc;
     color: cadetblue;
     padding: 0.5rem 1rem;
     border-radius: 1rem;
     font-size: 50px;
     margin: 0 auto;
     display: block;
`;

const Mycom = (props) => {
    return (
        <button className={props.className && props.className} style={{ color: props.cls }}> {props.children}</button >
        //props.className이 있으면 뒤에꺼를 내보내랏. 
    )
}
// 내가 어떻게 구조할당하여 쓸 것인지. 위쪽은 props, 아래쪽은 다 풀어헤쳐서 사용, 구조할당을 하면 내용이 많아질수록 복잡할 수 있기 때문에 props를 더 선호하는 편.

// const Mycom = ({ cls, children }) => {
//     return (
//         <button className={cls}>{children}</button>
//     )
// }

const Outputcom = styled(Mycom)`
    color: red;
`

function Styledcom() {
    return (
        <div>
            <Buttoncom>클릭</Buttoncom>
            <Mycom cls="red">쮂낄~!</Mycom>
            <Mycom cls="green">안녕하세요</Mycom>
            <Mycom cls="blue">hello</Mycom>
            <Mycom cls="gray">헬로우~</Mycom>
            {/* cls..? 먼말인지....*/}
            <Outputcom>나의 손코딩으로 만들어진 컴포넌트에 클래스만 적용한 것</Outputcom>

        </div>
    )
}

export default Styledcom
