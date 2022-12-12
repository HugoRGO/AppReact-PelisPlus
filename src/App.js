import { useEffect, useContext } from "react";
import PublicRoutesComponent from "./routes/PublicRoutesComponent";
import NavComponent from "./components/Nav";
import { Container } from "react-bootstrap";
import { UserContext } from "./context/UserContext";
import FB from './assets/facebook_icon.png';
import IG from './assets/IG_icon.png';
import GH from './assets/Gh_icon.png';
import Mail from './assets/Mail_icon.png';

function App() {
  const { guardarToken } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      guardarToken(token);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavComponent />
      <Container>
        <PublicRoutesComponent />
      </Container>
      <footer>
      <div className='navbar-dark bg-dark bg-gradient'>
        <div className="col-lg text-center d-flex justify-content-center align-items-center pt-3">
          <a href="#">
            <button className="btn btn-lg btn-warning bg-gradient rounded-pill W-10 p-3 fw-bolder">Soporte Técnico</button>
          </a>
        </div>
          <Container className="w-50 justify-content-center align-items-center font-custome3">
              <div className="row justify-content-center align-items-center py-2">
                <div className="col-lg d-flex justify-content-center align-items-center">
                  <a href="#" className='m-4'> <img src={Mail}  alt="Correo-Icon" width="40" height="40" className="d-inline-block align-text-top" /></a>
                  <a href="#" className='m-4'> <img src={FB}  alt="Facebook-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
                  <a href="#" className='m-4'> <img src={IG}  alt="IG-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
                  <a href="https://github.com/HugoRGO" className='m-4'> <img src={GH} alt="Github-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
                </div>
                <div className="row text-center fw-semibold text-white justify-content-center align-items-center">
                  <p className='m-0'>© 2022 HugoRGO.</p>
                  <p>Pagina de ejemplo para eCommerce con fines educativos.</p>
                </div>
              </div>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default App;
