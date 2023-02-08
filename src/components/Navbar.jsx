import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FTLifePartnerPlus_Logo from '../img/FTLifePartnerPlus_Logo.png';
import '../css/Navbarcss.css'


const PlusNavbar = () => {
  return (
    <div>
      <Navbar bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="FTLifePartnerPlus_Logo"
              src={FTLifePartnerPlus_Logo}
              max-width= "200"
              max-height= "48"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default PlusNavbar
