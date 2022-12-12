import { Link } from "react-router-dom";
import { Container, Carousel } from "react-bootstrap";
import imagen1 from "../assets/imag1.jpg";
import imagen2 from "../assets/imag2.jpg";
import imagen3 from "../assets/imag3.jpg";

const HomePage = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
            <Carousel variant="dark" className="w-75 h-75">
                <Carousel.Item>
                    <img
                    className="d-block  w-100"
                    src= {imagen1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-white">Peliculas por Montones</h2>
                    <h3 className="text-white"><Link to="/login">Iniciar sesión</Link></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {imagen2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-white">De la Pantalla a tu Casa</h2>
                    <h3 className="text-white">Distribución de manera inmediata.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {imagen3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-white">¿Buscas Alguna en Especial?</h2>
                    <h3 className="text-white">Todos los generos que quieras disfrutar.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      </Container>
    </>
  );
};

export default HomePage;
