import { useEffect, useState } from "react";
import { Spinner, Table, Button } from "react-bootstrap";

import "./Requests.css";

export const Requests = () => {
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [reject, setReject] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onAdd = () => {
    setAdd(!add);
  };

  const onDel = () => {
    setReject(!reject);
  };

  const fetchMyAPI = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("../requests.json");
      const pedidos = await response.json();
      setData(pedidos);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <>
      <div className="solicitudes">
        <h1>SOLICITUDES</h1>
      </div>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" variant="secondary" role="status"></Spinner>
          <h1>Cargando pedidos...</h1>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data.length ? (
        <div className="solicitudess solicitudes-space-bottom ">
          {/* <RequestsList pedidos={data} /> */}
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>License</th>
                <th>Time</th>
                <th>Approval</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.license}</td>
                  <td>{item.time} dias</td>
                  <td>
                    <div className="d-flex flex-wrap">
                      <Button className="mx-2" variant="outline-success">
                        Aprobar
                      </Button>
                      <Button className="mx-2" variant="outline-danger">
                        Denegar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </Table>
        </div>
      ) : (
        <p>No hay pedidos pendientes de aprobación</p>
      )}
    </>
  );
};
