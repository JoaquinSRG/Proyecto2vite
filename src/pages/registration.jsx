import "../pages/registration.css";

export default function Registration({ cambiarVista }) {
  return (
    <>
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
    </>
  );
}
