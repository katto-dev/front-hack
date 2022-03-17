import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-white py-3 px-1">
        <div className="col-12 col-md-3 d-flex flex-column">
          <p>ACERCA DE</p>
          <Link to={"//institucional.telecom.com.ar"} target={"_blank"}>
            Compañia
          </Link>
          <Link
            to={"//inversores.telecom.com.ar/es/informacion-general.html"}
            target={"_blank"}
          >
            Inversores
          </Link>
          <Link to={"//institucional.telecom.com.ar/prensa"} target={"_blank"}>
            Prensa
          </Link>
          <Link
            to={"//institucional.telecom.com.ar/acerca-de-telecom"}
            target={"_blank"}
          >
            RRHH
          </Link>
          <Link
            to={"//institucional.telecom.com.ar/sustentabilidad"}
            target={"_blank"}
          >
            RSE
          </Link>
        </div>
        <div className="col-12 col-md-3 d-flex flex-column">
          <p>LEGALES</p>
          <Link to={"/pdp"}>Políticas de Privacidad</Link>
          <Link to={"/tyc"}>Terminos y condiciones de uso</Link>
          
        </div>
        <div className="col-12 col-md-3 d-flex flex-column">
          <p>MAPA DEL SITIO</p>
          <Link to={"/"}>Inicio</Link>
          <Link to={"/licencias"}>Licencias</Link>
          <Link to={"/solicitudes"}>Solicitudes</Link>
          <Link to={"/estadisticas"}>Estadisticas</Link>
          <Link to={"/equipo"}>Equipo</Link>
        </div>
        <div className="col-12 col-md-3 d-flex flex-column">
          <p>CONTACTANOS</p>
          <Link
            to={
              "//api.whatsapp.com/send/?phone=5491122223333&text&app_absent=0"
            }
            target={"_blank"}
          >
            Chatea con nosotros <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </Link>
          <Link to={"//mailto:m.atencion@personalpay.com.ar"} target={"_blank"}>
            Mail
          </Link>
          <Link
            to={
              "//linkedin.com/authwall?trk=bf&trkInfo=AQHUjWe0okc84QAAAX-V3V24pbUUls-N7JLEDUCJz0EOZ_HrL7MHpw00F3prfA74KbKlxfVpztuS4F1zGHwBxENZMvMGFKrIDz2gkOZ-EdnDLgvcZlovGMuRwdJkBF0SPyppBUI=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpersonal-pay"
            }
            target={"_blank"}
          >
            Trabajá con nosotros
          </Link>
          <p>Seguinos en{" "}</p>
            <Link
              to={
                "//linkedin.com/authwall?trk=bf&trkInfo=AQFlirYoVQNCJQAAAX-V46sAazDWpM5vfo_ZYsSPOVSAhWbEhdUexdjSJ2eoJwq4RtnZoHXcrPbjUwAvIIY9Ygto8lmM4sFxY-5O0wf9Vgl3ce391kRM2hHrBkAbB94lPAKrnH0=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpersonal-pay%2Fabout%2F"
              }
              target={"_blank"}
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>{" "}
            <Link to={"//www.facebook.com/PersonalPay/"} target={"_blank"}>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>{" "}
            <Link to={"//instagram.com/personalpay/"} target={"_blank"}>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          
        </div>
      </div>
      <div className="row bg-secondary text-light py-3 px-1">
        <div className="col-12 col-sm-8 col-md-10">
          <p>
            Equipo 8 - Hackaton TechAcademy. - Todos los derechos reservados - General Hornos 690 CABA,
            Argentina - CUIT N° 30-57297583-1
          </p>
        </div>
        <div className="col-12 col-sm-4 col-md-2">
          <Image
            src="https://img.freepik.com/vector-gratis/fondo-cohete-estilo-flat_23-2147904992.jpg?w=740&t=st=1647493015~exp=1647493615~hmac=df56a2fed7052aea4edd40f954372aa63e6240a8eb51a50f890f85ba6cc651c0"
            roundedCircle
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
