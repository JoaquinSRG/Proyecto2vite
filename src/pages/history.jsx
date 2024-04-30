import logo from "../media/logo.png";
import bannerHistoria from "../media/banner_historia.jpg";
import iconoVideos from "../media/img_enlace-videos.png";
import iconoArticulos from "../media/img_enlace-articulos.png";

import "../pages/history.css";


export default function History({cambiarVista}) {
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
                            src={bannerHistoria}
                            alt="imagen del baner principal, un estudiante con traje de graduacion"
                        />
                        <div className="div_titulo-matematicas">
                            <h2 className="titulo-matematicas">Historia</h2>
                            <p className="parrafo-cita">
                                <cite >
                                La historia es la narración de los sucesos del pasado, generalmente los de la humanidad. También puede abarcar otros ámbitos. Es una disciplina académica que estudia dichos acontecimientos, basándose en documentos, registros o testimonios confiables.
                                </cite>
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