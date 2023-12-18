import { useState } from 'react';
import gnbjson from './data/gnb.json'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [tap, setTap] = useState(0)
  return (
    <div id='tap'>
      <ul className='d-flex'>
        {
          gnbjson.map((v, i) => {
            return <li className='list-unstyled' onClick={() => { setTap(i) }}>{v.name}</li>
          })
        }
      </ul>
      <div className='border py-5'>
        {
          gnbjson[tap] && <p>
            {/*gnbjson[tap] 이 부분은 비동기 통신을 위한 사용. 아직 자세히 배우지 못했다  
            위의 리스트를 클릭했을 때, 이미지와 이름이 랜더링됨*/}
            <img src={gnbjson[tap].src} alt={gnbjson[tap].alt} />
            <strong>{gnbjson[tap].name}</strong>
          </p>

        }
      </div>
    </div>
  );
}

export default App;
