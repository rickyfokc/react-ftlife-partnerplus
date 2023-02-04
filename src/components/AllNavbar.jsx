import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Ftlife_Logo from '../img/Ftlife_Logo.png';
import '../css/AllNavbarcss.css'

const AllNavbar = ({ location }) => {
  const [activeKey, setActiveKey] = React.useState('Home');

  React.useEffect(() => {
    switch (location) {
      case '/Home':
        setActiveKey('Home');
        break;
      case '/Campaign':
        setActiveKey('Campaign');
        break;
      case '/DocumentCenter':
        setActiveKey('Document Center');
        break;
      case '/Other':
        setActiveKey('Other');
        break;
      default:
        setActiveKey('Home');
    }
  }, [location]);

  return (
    <div>
    <Navbar bg="white" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Ftlife_Logo"
            src={Ftlife_Logo}
            max-width= "200"
            max-height= "48"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Campaign">Campaign</Nav.Link>
            <Nav.Link href="/DocumentCenter">Document Center</Nav.Link>
            <Nav.Link href="/Other">Other</Nav.Link>
          </Nav>
          <Button variant="outline-secondary">User</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
)
}

export default AllNavbar