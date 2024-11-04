import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Bebidas from "./component/bebidas/Bebidas";
import Postre from "./component/postres/Postre";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/postres" element={<Postre />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
