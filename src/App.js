import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

// import NavBar from "./NvaBar";
// import Tables from "./Table";
import Cards from "./Cards";
import PieChart from "./PieChart";
import Region from "./Region";
import Smile from "./Table";
import { Container } from "reactstrap";

import FetchedData from "./FetchedData";
function App() {
  return (
    <Container fluid={true}>
      <div className="body">
        <div>{<Cards />}</div>
        <div>{<Region />}</div>
        <div>{<Smile />}</div>
      </div>
    </Container>
  );
}

export default App;
