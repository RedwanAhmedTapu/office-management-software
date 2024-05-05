import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({}) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const loggedInUser = sessionStorage.getItem("loggedInUserEmail");
  const loggedInUserName = sessionStorage.getItem("loggedInUserName");

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    } else {
      // Split the email and get the part before the '@' symbol as the name
      const userName = loggedInUser.split('@')[0];
      setName(userName);
    }
  }, [loggedInUser]);

  const handleLogout = () => {
    // Clear sessionStorage or perform any other logout action
    sessionStorage.removeItem("loggedInUserEmail");
    sessionStorage.removeItem("loggedInUserName");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* <Navbar.Brand href="/">OfficeManagement</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/employees" className="nav-link">
              Employees
            </Nav.Link>
            <Nav.Link as={Link} to="/holidays" className="nav-link">
              Holidays
            </Nav.Link>
            <Nav.Link as={Link} to="/leave-admin" className="nav-link">
              Leaves (Admin)
            </Nav.Link>
            <Nav.Link as={Link} to="/leave-employee" className="nav-link">
              Leaves (Employee)
            </Nav.Link>
            <Nav.Link as={Link} to="/leave-settings" className="nav-link">
              Leave Settings
            </Nav.Link>
            <Nav.Link as={Link} to="/attendance-admin" className="nav-link">
              Attendance (Admin)
            </Nav.Link>
            <Nav.Link as={Link} to="/attendance-employee" className="nav-link">
              Attendance (Employee)
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {loggedInUser ? (
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  {name ? name : "User Profile"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/profile">{name}</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button variant="outline-light" as={Link} to="/login">
                  Login
                </Button>
                <Button variant="outline-light" as={Link} to="/register">
                  Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
