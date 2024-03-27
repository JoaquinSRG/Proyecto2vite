import logo from "../media/logo.png";

import "../pages/registration.css";

export default function Registration({ cambiarVista }) {
  return (
    <>
      <header>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="menu_logo">
              <a href="#">
                <img
                  class="img"
                  src={logo}
                  alt="imagen del logo de Educacion ABC"
                />
              </a>
            </li>
            <li className="list_item">
              <a class="link" href="/">
                Inicio
              </a>
            </li>
            <li className="list_item">
              <a className="link" href="./html/login.html">
                Login
              </a>
            </li>
            <li className="list_item">
              <a className="link" href="#">
                Haz una donacion
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <h2>Registro de Usuario</h2>
        <form>
          <label for="nombres">Nombres:</label>
          <input type="text" id="nombres" name="nombres" required></input>
          <br></br>
          <label for="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" required></input>
          <br></br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <br></br>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" required></input>
          <br></br>
          <button onClick={() => cambiarVista("registrar")}>
            Ir a Registrar
          </button>
        </form>
      </body>
    </>
  );
}
