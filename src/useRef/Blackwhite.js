import React, { useState } from 'react'
import '../css/style.css'

function Blackwhite() {
    const [black, setWhite] = useState(true)
    return (
        <div id='BWArea'
            style={{ backgroundColor: black ? 'black' : 'white' }}>
            <h1 onClick={() => { setWhite(!black) }}
                style={{
                    color: black ? 'yellow' : 'black'
                }}
            >
                {black ? "black" : "white"}</h1>
            <p></p>
        </div>
    )
}

export default Blackwhite
