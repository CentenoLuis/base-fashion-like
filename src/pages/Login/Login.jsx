import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  Alert,
  Form,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import loginResolver from "../../validations/loginResolver";

const userCredentials = {};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: loginResolver });
  const location = useLocation();
  const { login, isLogged } = useAuth();

  const onSubmit = (formData) => {
    const userCredentials = formData;
    login(userCredentials, location.state?.from);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
        }}
      >
        <Container
          style={{
            minHeight: "80vh",
            paddingTop: "80px",
          }}
        >
          <Row className="alignItems-center">
            <Col className="my-4">
              <Card
                style={{ maxWidth: "600px", height: "450px" }}
                className="p-4 mx-auto"
              >
                <div>
                  <h1>Login</h1>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      {...register("email")}
                      placeholder="Email"
                      className="mb-2"
                    ></Form.Control>

                    {errors?.email && (
                      <Form.Text>
                        <Alert variant="danger">{errors.email.message}</Alert>
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      {...register("password")}
                      placeholder="Password"
                      className="mb-2"
                    ></Form.Control>
                    {errors?.password && (
                      <Form.Text>
                        <Alert variant="danger">
                          {errors.password.message}
                        </Alert>
                      </Form.Text>
                    )}
                  </Form.Group>
                </Form>

                <Button onClick={handleSubmit(onSubmit)}>Login</Button>

                <p className="mt-4 text-center">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
