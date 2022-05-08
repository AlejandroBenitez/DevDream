import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">DevDream</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MyNavbar;
