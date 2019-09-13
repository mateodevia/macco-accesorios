import React, { Component } from "react";
import axios from "axios";
import "./login.css";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usuario = React.createRef();
    this.clave = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    let credenciales = {};
    credenciales.usuario = this.usuario.current.value;
    credenciales.clave = this.clave.current.value;
    let promesa1 = axios.post("/autenticacion/login", credenciales);
    promesa1.then((res) => {
      if (res.data === "OK") {
        this.props.handleAuthentication();
      }
      else {
        alert("Credenciales invalidas");
      }
    });
    promesa1.catch(() => console.log("no se pudo comunicar con el servidor"));
  }

  render() {
    return (
      <div id="contenedorLogin">
        <div id="login">
          <form id="formulario" onSubmit={this.handleSubmit}>
            <h1>¡Bienvenido Administrador!</h1>
            <input className="campoTexto" type="text" placeholder="Usuario" ref={this.usuario} />
            <input className="campoTexto" type="text" placeholder="Contraseña" ref={this.clave} />
            <input id="botonLogin" type="submit" value="Submit" />
          </form>
        </div>
      </div>);
  }
}

export default LoginForm;