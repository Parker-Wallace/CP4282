import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar() {
    const [loginstate, changeloginstate] = useState("login");
    return (
        <Navbar bg='light' expand='lg'> 
        <Container>    
        <h1>Assignment 3</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
        <Button variant="primary" className='ml-auto' onClick={()=>{
          loginstate === "login" ? changeloginstate("logout") : changeloginstate("login")
        }}>{loginstate}</Button>
                </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar