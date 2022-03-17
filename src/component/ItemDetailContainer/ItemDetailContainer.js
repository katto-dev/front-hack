import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Button } from "react-bootstrap";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchMyAPI = async () => {
    let response = await fetch("../providers.json");
    let licencias = await response.json();
    let licenciaFilter = await licencias.filter((x) => x.id === id);
    setData(licenciaFilter);
  };

  useEffect(() => {
    fetchMyAPI();
  }, [id]);

  return (
    <div>
      {data.map((item) => {
        return (
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
                <Button>Solicitar</Button>
              </div>
              <div className="col-12 col-md-6 pb-2">
                <Button>Modificar</Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;
