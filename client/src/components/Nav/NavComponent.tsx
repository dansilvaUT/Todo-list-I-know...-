import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { UserContext } from "../../context/UserProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavComponent = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!Boolean(user)) {
      navigate("/");
    }
  }, [navigate, user]);

  const logout = () => {
    axios.post("/api/logout").then((res) => console.log(res));
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Todo List App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
            {Boolean(user) && (
              <Nav.Link href="#">Welcome {user.username}</Nav.Link>
            )}

            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
