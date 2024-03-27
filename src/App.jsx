import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/registration";

import React, { useState } from "react";
import Homepage from "./pages/home";

function App() {
  const [vistaActual, setVistaActual] = useState("home");

  const cambiarVista = (vista) => {
    setVistaActual(vista);
  };

  return (
    <div>
      {vistaActual === "registrar" && (
        <Registration cambiarVista={cambiarVista} />
      )}
      {vistaActual === "home" && <Homepage cambiarVista={cambiarVista} />}
    </div>
  );
}

export default App;
