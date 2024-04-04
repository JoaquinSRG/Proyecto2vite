import logo from "../media/logo.png";

import "../pages/registration.css";

export default function Registration({ cambiarVista }) {
  return (
    <>
      <header>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="menu_logo">
            <a className="link" onClick={() => cambiarVista("home")}>
                <img
                  class="img"
                  src={logo}
                  alt="imagen del logo de Educacion ABC"
                />
              </a>
            </li>
            <li className="list_item">
            <a className="link" onClick={() => cambiarVista("home")}>
                Inicio
              </a>
            </li>
            <li className="list_item">
            <a className="link" onClick={() => cambiarVista("login")}>
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
        <h2 className="h2-registro">Registro de Usuario</h2>
        <form className="form-registro">
          <label className="label-registro" for="nombres">Nombres:</label>
          <input className="input-registro" type="text" id="nombres" name="nombres" required></input>
          <br></br>
          <label className="label-registro" for="apellidos">Apellidos:</label>
          <input className="input-registro" type="text" id="apellidos" name="apellidos" required></input>
          <br></br>
          <label className="label-registro" for="email">Email:</label>
          <input className="input-registro" type="email" id="email" name="email" required></input>
          <br></br>
          <label className="label-registro" for="password">Contraseña:</label>
          <input className="input-registro" type="password" id="password" name="password" required></input>
          <br></br>
          <button className="button-registro" onClick={() => cambiarVista("registrar")}>
            Ir a Registrar
          </button>
        </form>
      </body>
    </>
  );
}
