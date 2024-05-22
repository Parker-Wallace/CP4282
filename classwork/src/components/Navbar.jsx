import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar() {
    return (
        <Navbar bg='light' expand='lg'> 
        <Container>    
        <h1>Assignment 3</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
        
            <a href="/about">
                About
            </a>

                </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar