import  React from "react";
import { Header } from "./componentes/header";
import { ProductosLista } from "./componentes/productos/index";
import 'boxicons';
function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista/>

    </div>
  );
}

export default App;
