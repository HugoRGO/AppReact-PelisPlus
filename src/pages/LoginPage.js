import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../services";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { guardarToken } = useContext(UserContext);

  const onSubmited = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { detalles: token, error } = await login(data);
    if (error) {
      //alert(error);
      setErrorMessage(error);
    } else {
      guardarToken(token);
      setErrorMessage(null);
      event.target.reset();
    }
    setIsLoading(false);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
    <h2 className="my-3">Bienvenido de Nuevo</h2>
    <h4 className="mt-3 mb-0">Por favor introduce la informacion de tu cuenta.</h4>
    <Form onSubmit={onSubmited} className="my-5">
      <Form.Group className="mb-3" controlId="correo">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu correo"
          name="correo"
        />
        <label style={{ color: "red" }}>{errorMessage}</label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
          name="password"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="bg-gradient">
        Iniciar sesión
      </Button>
    </Form>
    </>
  );
};

export default LoginPage;
