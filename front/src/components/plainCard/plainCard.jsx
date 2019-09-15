import React, { Component } from "react";
import axios from 'axios';
import "./plainCard.css";
import trash from "./recycle.svg";
import edit from "./pencil.svg";

class PlainCard extends Component {

  borrarItem = (id) => {
    let promise = axios.delete("/crudBolsos/" + id, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    promise.then((res) => {
      alert("El elemento fue borrado");
      this.props.refresh();
    });

    promise.catch((err) => { alert(err) });
  }

  render() {
    return (
      <div id="rectangleGris">
        <img id="imagen" src={this.props.rutaImagen} />
        <h1>{this.props.nombre}</h1>
        <h2>{this.props.precio}</h2>
        {
          this.props.promocion &&
          <div id="promocion">PROMOCION</div>
        }
        {
          (this.props.cantidad === 0) &&
          <div id="noDisponible">NO DISPONIBLE</div>
        }
        {
          this.props.autenticado &&
          <button id="botonEditar" >
            <img id="iconoEditar" src={edit} alt="" />
          </button>
        }
        {
          this.props.autenticado &&
          <button id="botonBorrar" onClick={() => this.borrarItem(this.props.id)}>
            <img id="iconoBorrar" src={trash} width="15%" height="15%" alt="" />
          </button>
        }
      </div >
    );
  }
}

export default PlainCard;