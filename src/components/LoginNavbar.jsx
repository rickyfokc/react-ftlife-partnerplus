import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Ftlife_Logo from '../img/Ftlife_Logo.png';
import '../css/Navbarcss.css'


const LoginNavbar = () => {
  return (
    <div>
      <Navbar bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Ftlife_Logo"
              src={Ftlife_Logo}
              max-width= "200"
              max-height= "48"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default LoginNavbar
