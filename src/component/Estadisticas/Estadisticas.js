import { Image } from "react-bootstrap";
const Estadisticas = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Estadisticas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-12 d-flex justify-content-around align-items-center mb-5">
          <h2>Licencias en Uso:</h2>
          <Image
            src="https://r-charts.com/es/parte-todo/diagrama-sectores-etiquetas-fuera-ggplot2_files/figure-html/grafico-sectores-etiquetas-fuera-ggplot.png"
            fluid
            width={200}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-12 d-flex justify-content-around align-items-center mb-5">
          <h2>Licencias Libre:</h2>
          <Image
            src="https://r-charts.com/es/parte-todo/diagrama-sectores-etiquetas-fuera-ggplot2_files/figure-html/grafico-sectores-etiquetas-fuera-ggplot.png"
            fluid
            width={200}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-12 d-flex justify-content-around align-items-center mb-5">
          <h2>Lista de espera:</h2>
          <Image
            src="https://upload.wikimedia.org/wikipedia/es/timeline/3qvmqzn98sf2ux73cz289g5p4tenqlc.png"
            fluid
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
