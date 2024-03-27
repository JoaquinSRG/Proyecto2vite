import logo from "../media/logo.png";
import banerPrincipal from "../media/img_baner-principal.png";
import iconoMatematicas from "../media/img_baner-matematicas.png";
import iconoHistoria from "../media/img_baner-historia.png";

import "../pages/home.css";

function Homepage({ cambiarVista }) {
  return (
    <div>
      <header>
        <nav className="nav">
          <input
            className="nav_checkbox"
            type="checkbox"
            id="nav_checkbox"
            title="menu hamburguesa"
          />
          <label for="nav_checkbox" class="nav_toggle">
            <svg className="menu" width="100" viewBox="0 0 50 50">
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
            </svg>
            <svg className="close" width="100" viewBox="0 0 84 84">
              <path
                d="M42,0C18.803,0,0,18.807,0,42c0,23.197,18.803,42,42,42c23.193,0,42-18.803,42-42
                            C84,18.807,65.193,0,42,0z M50.643,42l15.303,15.302l-8.643,8.642L42.002,50.643L26.699,65.944l-8.641-8.642L33.359,42
                            l-15.3-15.298l8.641-8.646L42,33.357l15.301-15.299l8.643,8.641L50.643,42z"
              />
            </svg>
          </label>
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
              <a className="link" onClick={() => cambiarVista("registrar")}>
                Registrate
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

      <main>
        <div className="baner_principal">
          <img
            className="img"
            src={banerPrincipal}
            alt="imagen del baner principal, un estudiante con traje de graduacion"
          />
          <div className="div_titulo">
            <h2 className="titulo">Educacion al alcance de tu mano</h2>
          </div>
        </div>
        <div className="div_temas">
          <div className="div_tema">
            <a className="link_tema" href="./html/paginamatematicas">
              <h3 className="titulo">Matematicas</h3>
              <img src={iconoMatematicas} alt="" />
            </a>
          </div>
          <div className="div_tema">
            <a className="link_tema" href="./html/paginahistoria.html">
              <h3 className="titulo">Historia</h3>
              <img src={iconoHistoria} alt="" />
            </a>
          </div>
        </div>
      </main>

      <footer id="footer">
        <ul className="footer_lista">
          <li className="footer_lista_item">
            <div className="footer_div_contenido">
              <h3 className="footer_titulo">Autores</h3>
              <p className="footer_parrafo">Joel Tamayo de Anda</p>
              <p className="footer_parrafo">
                Joaquin Serafin Rodriguez Gonzalez
              </p>
            </div>
          </li>
          <li className="footer_lista_item">
            <div className="footer_div_contenido">
              <h3 className="footer_titulo">Contacto</h3>
              <a
                className="footer_link"
                href="mailto:joel.tamayo23B@udgvirtual.udg.mx">
                Contáctame vía email
              </a>
              <br />
              <br />
              <a
                className="footer_link"
                href="mailto:joel.tamayo23B@udgvirtual.udg.mx">
                Contáctame vía email
              </a>
            </div>
          </li>
          <li className="footer_lista_item">
            <div className="footer_div_contenido">
              <h3 className="footer_titulo">Codigo</h3>
              <p className="footer_parrafo">223983583</p>
              <p className="footer_parrafo">000000000</p>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Homepage;
