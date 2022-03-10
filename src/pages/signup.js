import React from "react";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div
      className="Login"
      style={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "Center",
        height: "100vh",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
