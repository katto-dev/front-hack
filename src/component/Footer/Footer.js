import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid bgn-primary">
      <div className="row text-white py-3 px-1">
        <div className="col-12 col-md-4 d-flex flex-column">
          <p>LEGALES</p>
          <Link to={"/pdp"}>Políticas de Privacidad</Link>
          <Link to={"/tyc"}>Terminos y condiciones de uso</Link>
        </div>
        <div className="col-12 col-md-4">
          <p className="text-footer">
            hackaton<span className="color-primary">8</span>
          </p>
          <p>
            Hackaton TechAcademy
            <br />
            Todos los derechos reservados
          </p>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column">
          <p>SEGUINOS EN </p>
          <div className="d-flex justify-content-center">
            <Link
              to={
                "//linkedin.com/authwall?trk=bf&trkInfo=AQFlirYoVQNCJQAAAX-V46sAazDWpM5vfo_ZYsSPOVSAhWbEhdUexdjSJ2eoJwq4RtnZoHXcrPbjUwAvIIY9Ygto8lmM4sFxY-5O0wf9Vgl3ce391kRM2hHrBkAbB94lPAKrnH0=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpersonal-pay%2Fabout%2F"
              }
              target={"_blank"}
              className="link"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Link>
            <Link
              to={"//www.facebook.com/PersonalPay/"}
              target={"_blank"}
              className="link"
            >
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
            </Link>
            <Link to={"//instagram.com/personalpay/"} target={"_blank"}>
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
