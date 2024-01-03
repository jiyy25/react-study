import styled from "styled-components";

export const Wbtn = styled.button`
    color: black;
    border: 0.5px solid black;
    border-radius: 30px;
    background-color: white;
    text-align: center;
    width: 80px;
    display: inline-block;
    line-height: 2rem;
    margin: 0.5rem;
`

export const Bbtn = styled.button`
    color: white;
    border: 0.5px solid white;
    border-radius: 30px;
    background-color: black;
    text-align: center;
    width: 80px;
    display: inline-block;
    line-height: 2rem;
    margin: 0.5rem;
`

export const BgBanner = (props) => {
    return (
        <div className={props.className} style={{ backgroundColor: props.bgcolor }}>
            {props.children}
            {/* <div>스타일까지 컴포넌트화 할 수 있다.</div> */}
        </div>
    )
}

export const Wildbanner = styled.div`
    background-color: black;
    color: white;
    text-align: center;
    padding: 200px 0;
`

export const Parentbtn = styled(Wbtn)`
    border: 10px solid green;
`
