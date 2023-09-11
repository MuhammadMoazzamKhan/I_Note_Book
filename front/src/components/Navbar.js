import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  const Navigate = useNavigate()
  const locate = useLocation()
  const handleLogout = ()=>{
    localStorage.removeItem("token")
    Navigate("/login")
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} className={locate.pathname === "/" ? "active" : ""} to="/">Home</Nav.Link>
          <Nav.Link as={Link} className={locate.pathname === "/about" ? "active" : ""} to="/about">Contact Us</Nav.Link>
        </Nav>
        {!localStorage.getItem("token")?<Form className="d-flex">
          <Button className='mx-1' variant={locate.pathname === "/login" ? "warning" : "outline-warning"}><Nav.Link as={Link} to="/login">Log In</Nav.Link></Button>
          <Button className='mx-1' variant={locate.pathname === "/signup" ? "warning" : "outline-warning"}><Nav.Link as={Link} to="/signup">Sign Up</Nav.Link></Button>
        </Form>:<Form className="d-flex"><Button className='mx-1' onClick={handleLogout} variant="outline-warning" >Log Out</Button></Form>}
      </Container>
    </Navbar>
  )
}

export default NavBar;
