import "./Estadisticas.css";

const Estadisticas = () => {
  return (
    <div className="container estadisticas-space-bottom">
      <div className="row">
        <div className="col-12">
          <h1>Estadisticas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-12 d-flex justify-content-around align-items-center mb-5">
          <h5>Licencias en Uso:</h5>
          
            <table 
                id="bar-example-24" 
                className="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes"
            >
                
                <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Progress 1</th>
                        <th scope="col">Progress 2</th>
                        <th scope="col">Progress 3</th>
                        <th scope="col">Progress 4</th>
                        <th scope="col">Progress 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">2022</th>
                        <td style={{"--size":0.2}}></td>
                        <td style={{"--size":0.4}}></td>
                        <td style={{"--size":0.7}}></td>
                        <td style={{"--size":0.6}}></td>
                        <td style={{"--size":1}}></td>
                    </tr>
                </tbody>
            </table>

        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-12 d-flex justify-content-around align-items-center mb-5">
          <h5>Licencias Libre:</h5>

            <table 
                id="column-example-18" 
                className="charts-css column show-labels multiple show-primary-axis show-data-axes"
            >
                
                <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Progress 1</th>
                        <th scope="col">Progress 2</th>
                        <th scope="col">Progress 3</th>
                        <th scope="col">Progress 4</th>
                        <th scope="col">Progress 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">2022</th>
                            <td style={{"--size":1}}></td>
                            <td style={{"--size":0.4}}></td>
                            <td style={{"--size":0.8}}></td>
                            <td style={{"--size":0.6}}></td>
                            <td style={{"--size":0.2}}></td>
                        </tr>
                </tbody>
            </table>


        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-12 d-flex justify-content-around align-items-center mb-5">
          <h5>Lista de espera:</h5>

            <table 
                id="area-example-10" 
                className="charts-css area multiple hide-data show-labels"
            >
                
                <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Progress 1</th>
                        <th scope="col">Progress 2</th>
                        <th scope="col">Progress 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Enero</th>
                        <td style={{"--start":0.1,"--size": 0.5}}>
                            <span className="data">50</span>
                        </td>
                        <td style={{"--start":0, "--size":0.2}}>
                            <span className="data">20</span>
                        </td>
                        <td style={{"--start":0.2, "--size":0.4}}>
                            <span className="data">40</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Febrero</th>
                            <td style={{"--start":0.5, "--size":0.8}}>
                                <span className="data">80</span>
                            </td>
                            <td style={{"--start":0.2, "--size":0.5}}>
                                <span className="data">50</span>
                            </td>
                            <td style={{"--start":0.4, "--size":0.1}}>
                                <span className="data">10</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Marzo</th>
                            <td style={{"--start":0.8, "--size":0.4}}>
                                <span className="data">40</span>
                            </td>
                            <td style={{"--start":0.5, "--size":0.3}}>
                                <span className="data">30</span>
                            </td>
                            <td style={{"--start":0.1, "--size":0.2}}>
                                <span className="data">20</span>
                            </td>
                        </tr>
                    </tbody>
                </table>





        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
