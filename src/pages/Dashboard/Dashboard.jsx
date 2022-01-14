import React from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../auth/useAuth";

const Dashboard = () => {
  const { login } = useAuth();
  return (
    <>
      <Container style={{ minHeight: "60vh" }}>
        <h1>Dashboard</h1>
      </Container>
    </>
  );
};

export default Dashboard;
