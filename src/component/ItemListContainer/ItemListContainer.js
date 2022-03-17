import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { categoryID } = useParams();

  const getData = () => {
    fetch(
      "providers.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        // console.log(response);

        return response.json();
      })

      .then(function (myJson) {
        // console.log(myJson);

        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="ItemListContainer">
        <h1>{greeting}</h1>
      </div>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" variant="secondary" role="status"></Spinner>
          <h1>Cargando productos...</h1>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data.length ? (
        <div className="ItemListContainer">
          <ItemList products={data} />
        </div>
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );

  // return (
  //   <div className="App">
  //     {data && data.length > 0 && data.map((item) => <p>{item.img}</p>)}
  //   </div>
  // );
};
