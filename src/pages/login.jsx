import logo from "../media/logo.png"
import "./login.css"

export default function Login({ cambiarVista }) {
    return (
      <div>
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
                <a class="link" href="/">
                  Inicio
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
      <body className="body-login">
        <div className="div_formulario">
            <form className="formulario" action="#" method="post">
                <div className="header">
                    <h1 className="titulo">Login</h1>
                    <img className="imagen"
                    src={logo}
                    alt="" />
                </div>
                <div className="main">
                    <ul className="lista-contenido">
                            <li>
                                <div className="entrada">
                                    <label className="etiqueta" for="correo">Correo</label>
                                    <br/>
                                    <input className="input" type="email" id="correo" name="email_usuario" placeholder="Ingresa tu correo"/>
                                </div>
                            </li>
                            <li>
                                <div className="entrada">
                                    <label className="etiqueta" for="contraseña">Password</label>
                                    <br/>
                                    <input className="input" type="password" id="contraseña" name="contraseña" placeholder="Ingresa tu contraseña"/>
                                </div>
                            </li>
                            <li className="contenedor_restablecerContrasena">
                                    <a className="restablecerContrasena" href="#">Olvidaste tu contraseña?</a>
                            </li>
                            <li class="contenedor_boton">
                                <input id="boton" className="boton" onClick={() => cambiarVista("home")} type="button" value="Iniciar sesion"/>
                            </li>
                            <li className="contenedor_sinCuenta">
                                <label for="">No tienes una cuenta?</label>
                                <a onClick={() => cambiarVista("registrar")}>Crear una</a>
                            </li>
                    </ul>
                </div>
            </form>
        </div>
    </body>
      </div>
    );
}