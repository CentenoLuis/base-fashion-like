import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";

const Topbar = () => {
  const { hasRole, isLogged, logout } = useAuth();

  return (
    <>
      <Navbar bg="light">
        <Container fluid className="mx-2">
          <Navbar.Brand style={{ fontFamily: "Anton" }} as={NavLink} to="/">
            Fashion Like
          </Navbar.Brand>

          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            {isLogged() && hasRole("admin") && (
              <Nav.Link as={NavLink} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>

          <Nav>
            {isLogged() && (
              <Nav.Link as={NavLink} to="/feed">
                <HomeIcon />
              </Nav.Link>
            )}

            {isLogged() && (
              <Nav.Link as={NavLink} to="/addpost">
                <AddCircleIcon />
              </Nav.Link>
            )}

            {isLogged() && (
              <Nav.Link as={NavLink} to="/notifications">
                <div style={{ position: "relative" }}>
                  <NotificationsIcon></NotificationsIcon>
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#cc330d",
                      borderRadius: "50%",
                      position: "absolute",
                      color: "#eceeec",
                      top: "-3px",
                      right: "-3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    4
                  </span>
                </div>
              </Nav.Link>
            )}

            {!isLogged() && (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
            {!isLogged() && (
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            )}

            {isLogged() && (
              <Nav.Link>
                <img
                  style={{
                    height: "32px",
                    width: "32px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src="/assets/post1.jpg"
                  alt="profileImage"
                />
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
