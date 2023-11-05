import React from "react";
import { Header } from "./componentes/header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/paginas"
import { DataProvider } from "./context/dataprovider";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Paginas />
        </Router>
      </div>
    </DataProvider>

  );
}

export default App;
