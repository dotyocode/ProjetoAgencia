import React from "react";
import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Contato from "./Components/pages/Contato/Contato";
import Page404 from "./Components/pages/404/Page404";
import Servicos from "./Components/pages/Servicos/Servicos";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contato" component={Contato} />
          <Route path="/servicos" component={Servicos} />
          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
