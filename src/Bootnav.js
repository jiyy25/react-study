import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Bootnav() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto text-decoration-none">
                        <Link to="/home" className='me-3 text-decoration-none'>Home</Link>
                        <Link to="/Features" className='me-3 text-decoration-none'>Features</Link>
                        <Link to="/Pricing" className='text-decoration-none'>Pricing</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Bootnav
