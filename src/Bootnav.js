import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Bootnav() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto ">
                        <Link to="/kr" className='text-decoration-none me-3'>한국어</Link>
                        <Link to="/en" className='text-decoration-none'>영어</Link>
                    </Nav>
                    <div className='text-white'>
                    <Routes>
                        <Route path='/kr' element={<>관리자</>}></Route>
                        <Route path='/en' element={<>admin</>}></Route>
                    </Routes>
                    </div>
                </Container>
            </Navbar>

        </>
    )
}

export default Bootnav
