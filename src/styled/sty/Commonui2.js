import styled from "styled-components";
import '@fontsource/noto-sans-kr'
import arrowbtnimg from '../../icon/go.svg'


//타이틀
export const TitleCommon = styled.h2`
    text-align: center;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    font-size: 1.8rem;
`
//폼

export const InputUi = (props) => {
    return (
        <div className={props.className && props.className}>
            <div>
                <input type="text" name={props.infutinfo.nm} placeholder={props.children} />
                <label htmlFor="">{props.infutinfo.labeltxt}<i></i></label>
            </div>
            <span>{props.infutinfo.alerttxt}</span>
        </div>
    )
}


//버튼
export const GotoBtnCommon = styled.button`
    border: 1px solid #ccc;
    text-align: center;
    display: block;
    width: 150px;
    height: 50px;
    line-height: 2;
    background-color: white;
    margin: 0 auto;
`
export const GotoACommon = styled.a`
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
export const Abtn = (props) => {
    return (
        //스타일컴포넌트의 엄마 컴포넌트가 없을때를 대비함 &&
        <a href={props.href} className={props.className && props.className} target={props.target && props.target}>
            {props.children}
            <img src={arrowbtnimg} alt="바로가기" />
        </a>
    )
}

//목록

//갤러리