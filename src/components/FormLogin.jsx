import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const admin = {
  email: "login1@correo.com",
  name: "admin",
  password: "123",
};

const user = {
  email: "login2@correo.com",
  name: "user",
  password: "123123",
};

export default function FormLogin({ setUser }) {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (input.email === admin.email && input.password === admin.password) {
      alert("logueo exitoso😎" + admin.name);
      setUser(admin.name);
      navigate("/Admin");
    } else if (input.email === user.email && input.password === user.password) {
      alert("logueo exitoso😎" + user.name);
      setUser(user.name);
      navigate("/User");
    } else {
      alert("datos incorrectos🤔.");
    }
    form.reset();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="card  mt-5 mx-auto card-formulario"
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Admin o user</Form.Label>
        <Form.Control
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
