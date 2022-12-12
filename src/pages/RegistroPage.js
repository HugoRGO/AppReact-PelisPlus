import { Button, Form } from "react-bootstrap";

const RegistroPage = () => {
  return (
    <>
      <h2 className="my-3">Bienvenido</h2>
      <h4 className="mt-3 mb-0">Por favor introduce la información que se te pide.</h4>
      <Form className="my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ejemplo@email.com" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu información con otras personas.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="**********" />
          <Form.Text className="text-muted">
            Asegúrate de guardar tu contraseña y de no compartir tu información con nadie.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default RegistroPage;
