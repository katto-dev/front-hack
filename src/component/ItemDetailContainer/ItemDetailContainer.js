import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Image, Button } from "react-bootstrap";
import { TechContext } from "../../context/TechContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { addLicencia } = useContext(TechContext);

  const onAdd = () => {
    addLicencia(data);
  };

  const fetchMyAPI = async () => {
    let response = await fetch("../providers.json");
    let licencias = await response.json();
    let licenciaFilter = await licencias.filter((x) => x.id === id);
    setData(licenciaFilter);
  };

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <>
      {data.map((item) => (
        <>
          <div className="container" key={item.id}>
            <div className="row pt-5 pb-4">
              <div className="col-12 col-md-8">
                <h1 className="text-aligcenter">{item.title}</h1>
              </div>
              <div className="col-12 col-md-4 cart">
                <Image src={item.img} width={"200"} />
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-12">
                <p>{item.Description}</p>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-12">
                <span>{item.Url}</span>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-12">
                <span>Licencias Disponibles: {item.stock}</span>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-12 col-md-6 pb-2">
                <Button onClick={onAdd} as={Link} to="/formulario">
                  Solicitar
                </Button>
              </div>
              <div className="col-12 col-md-6 pb-2">
                <Button>Modificar</Button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 pb-4">
                <Button as={Link} to="/licencias">
                  Volver
                </Button>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ItemDetailContainer;
