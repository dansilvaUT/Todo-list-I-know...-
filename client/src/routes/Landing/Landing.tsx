import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import "./Landing.scss";

const Landing = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState("");
  const [toggleView, setToggleView] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        username: user.username,
        password: user.password,
      });
      if (response.data.user) {
        console.log(response);
      }
      //TODO: Set up Context and redirect to dashboard
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleSignUp = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.post("/api/users", {
      user: {
        username: user.username,
        password: user.password,
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
      },
    });
    //TODO: Set up Context and redirect to dashboard
    console.log(response);
    try {
    } catch (error: any) {
      console.log(error);
    }
  };

  console.log(toggleView);
  return (
    <Container className="Landing">
      <Row className="justify-content-md-center">
        <h1>ToDo App</h1>
        <Col>
          <Form
            onSubmit={
              toggleView ? (e) => handleSignUp(e) : (e) => handleSignIn(e)
            }
          >
            {toggleView && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={user.email}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    onChange={handleChange}
                    value={user.firstName}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    onChange={handleChange}
                    value={user.lastName}
                  />
                </Form.Group>
              </>
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                value={user.username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Sign In
            </Button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setToggleView(!toggleView)}>
                {toggleView ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
