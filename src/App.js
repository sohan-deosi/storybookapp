import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import FilterStudies from "./components/moleculous/FilterStudies";

function App() {
  return (
    <div className="App">
      <Container>
          <FilterStudies />
        </Container>
    </div>
  );
}

export default App;
