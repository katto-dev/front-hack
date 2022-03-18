import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { categoryID } = useParams();

  const fetchMyAPI = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("../providers.json");
      const licencias = await response.json();
      if (categoryID) {
        console.log("Licencias: ", licencias);
        console.log(categoryID);
        const filteredCategory = await licencias.filter(
          (x) => x.category === categoryID
        );
        setData(filteredCategory);
      } else {
        setData(licencias);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMyAPI();
  }, [categoryID]);

  return (
    <>
      <h1>LICENCIAS</h1>
      <div className="ItemListContainer">
        <h1>{greeting}</h1>
      </div>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" variant="secondary" role="status"></Spinner>
          <h1>Cargando proveedores...</h1>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data.length ? (
        <div className="ItemListContainer mx-5 licencias-space-bottom">
          <ItemList products={data} />
        </div>
      ) : (
        <p>No se encontraron proveedores</p>
      )}
    </>
  );
};
