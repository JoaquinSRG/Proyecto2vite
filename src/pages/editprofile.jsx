import logo from "../media/logo.png";

export default function Editprofile({ cambiarVista }) {
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
        <h2 className="h2-registro">
          Ahora que te registraste es momento de editar tu perfil del sitio{" "}
          <br></br>La informacion aqui sera publica
        </h2>
        <form className="form-registro">
          <label className="label-registro" for="nombres">
            Nombre:
          </label>
          <input
            className="input-registro"
            type="text"
            id="nombres"
            name="nombres"
            required></input>
          <br></br>
          <label className="label-registro" for="apellidos">
            Pais:
          </label>
          <input
            className="input-registro"
            type="text"
            id="apellidos"
            name="apellidos"
            required></input>
          <br></br>
          <label className="label-registro" for="nombres">
            Estado:
          </label>
          <input
            className="input-registro"
            type="text"
            id="nombres"
            name="nombres"
            required></input>
          <br></br>
          <label className="label-registro" for="nombres">
            Ciudad:
          </label>
          <input
            className="input-registro"
            type="text"
            id="nombres"
            name="nombres"
            required></input>
          <br></br>
          <label className="label-registro" for="password">
            Bio:
          </label>
          <textarea
            className="input-registro"
            type="password"
            id="password"
            name="password"
            required></textarea>
          <br></br>
          <button
            className="button-registro"
            onClick={() => cambiarVista("home")}>
            Guarda tus cambios
          </button>
        </form>
      </body>
    </>
  );
}
