/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Image, Button } from "react-bootstrap";
import { TechContext } from "../../context/TechContext";
import { Spinner } from "react-bootstrap";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { addLicencia } = useContext(TechContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onAdd = () => {
    addLicencia(data);
  };

  const fetchMyAPI = async () => {
    try {
      setIsLoading(true);
      // let response = await fetch("../providers.json");
      let response = await fetch(
        "https://backend-hack.herokuapp.com/api/v1/vendors"
      );

      let licencias = await response.json();
      let licenciaFilter = await licencias.filter((x) => x._id === id);
      setData(licenciaFilter);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMyAPI();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" variant="secondary" role="status"></Spinner>
          <h1>Cargando proveedores...</h1>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data.length ? (
        data.map((item) => (
          <>
            <div key={item._id}>
              <div className="container proveedor-space-bottom" key={item._id}>
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
                    <Button
                      className="bton bton-primary"
                      onClick={onAdd}
                      as={Link}
                      to="/formulario"
                    >
                      Solicitar
                    </Button>
                  </div>
                  <div className="col-12 col-md-6 pb-2">
                    <Button className="bton bton-primary">Modificar</Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 pb-4">
                    <Button
                      className="bton bton-primary"
                      as={Link}
                      to="/licencias"
                    >
                      Volver
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <p>No se encontraron proveedores</p>
      )}
    </>
  );
};

export default ItemDetailContainer;
