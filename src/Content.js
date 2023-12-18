import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path='/home' element={<h1>안녕하세욧</h1>}></Route>
                <Route path='/Features' element={<h1>Hello~</h1>}></Route>
                <Route path='/Pricing' element={<h1>집가자~!</h1>}></Route>
            </Routes>
        </div>
        //element에 컴포넌트를 넣어주면 화면에 랜더링해서 뿌려준다

    )
}

export default Content
