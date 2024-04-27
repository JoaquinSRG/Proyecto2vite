import logo from "../media/logo.png";
import banerMatematicas from "../media/baner_matematicas.jpg";
import iconoVideos from "../media/img_enlace-videos.png";
import iconoArticulos from "../media/img_enlace-articulos.png";

import "../pages/mathematics.css";


export default function Mathematics({cambiarVista}) {
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
                <main>
                    <div className="baner_matematicas">
                        <img
                            className="img_baner-matematicas"
                            src={banerMatematicas}
                            alt="imagen del baner principal, un estudiante con traje de graduacion"
                        />
                        <div className="div_titulo-matematicas">
                            <h2 className="titulo-matematicas">Matematicas</h2>
                            <p className="parrafo-cita">
                                <cite >
                                “La matemática es la reina de las ciencias y la aritmética es la reina de las matemáticas. Ella a menudo se digna a prestar un servicio a la astronomía y a otras ciencias naturales, pero en todas las relaciones, tiene derecho a la primera fila”.
                                </cite>
                                (Carl Friedrich Gauss).
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="div_secciones">
                            <a className="link_seccion">
                            <h3 className="titulo-matematicas">Videos</h3>
                            <img src={iconoVideos} alt="" />
                            </a>
                        </div>
                        <div className="div_secciones">
                            <a className="link_seccion">
                            <h3 className="titulo-matematicas">Articulos</h3>
                            <img src={iconoArticulos} alt="" />
                            </a>
                        </div>
                    </div>
                </main>
            </body>
        </>
    )
}