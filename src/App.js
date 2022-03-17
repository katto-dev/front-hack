// import logoHackaton from "./assets/img/hackaton_8.png";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Tyc from "./component/T&C/Tyc";
import Error404 from "./component/pages/Error404";
import { AdProvider } from "./context/TechContext";
import Pdp from "./component/Pdp/Pdp";
import Byc from "./component/Byc/Byc";
import { ItemListContainer } from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import Formulario from "./component/Formulario/Formulario";

function App() {
  return (
    <AdProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/byc" element={<Byc />} />
          <Route path="/pdp" element={<Pdp />} />
          <Route path="/tyc" element={<Tyc />} />
          <Route path="/licencias/:id" element={<ItemDetailContainer />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/licencias" element={<ItemListContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </AdProvider>
  );
}

export default App;
