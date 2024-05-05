import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically perform validation and authentication
    // For simplicity, I'm just saving the email to sessionStorage
    sessionStorage.setItem("loggedInUserEmail", email);
    if (email && password) {
      navigate("/employees");
    }
    // Redirect the user or perform any other actions after login
  };

  return (
    <Container
      className="my-5 d-flex justify-content-center align-items-center gradient-form"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100 justify-content-center">
        <Col
          sm={12}
          md={8}
          lg={6}
          className="text-center bg-slate-100 rounded sm:p-1 md:p-4"
        >
          <div className="d-flex flex-column p-4">
            <div className="d-flex flex-column align-items-center mb-4">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-4">Office Management</h4>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mb-3">
                Sign in
              </Button>
              <Form.Text className="text-muted mb-3">
                <a href="#!" className="text-muted">
                  Forgot password?
                </a>
              </Form.Text>
              <div className="d-flex flex-column align-items-center">
                <p className="mb-2">Don't have an account?</p>
                <Button variant="outline-danger">Register</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
