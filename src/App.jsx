import React, { useState } from "react";
import Registration from "./pages/registration";
import Homepage from "./pages/home";
import Login from "./pages/login";
import Editprofile from "./pages/editprofile";

function App() {
  // Manejo de estados para interactivdad entre paginas
  const [vistaActual, setVistaActual] = useState("home");

  const cambiarVista = (vista) => {
    setVistaActual(vista);
  };

  return (
    // Switch para interactividad de la pagina
    <div>
      {vistaActual === "editprofile" && (
        <Editprofile cambiarVista={cambiarVista} />
      )}
      {vistaActual === "registrar" && (
        <Registration cambiarVista={cambiarVista} />
      )}
      {vistaActual === "home" && <Homepage cambiarVista={cambiarVista} />}
      {vistaActual === "login" && <Login cambiarVista={cambiarVista} />}
    </div>
  );
}

export default App;
