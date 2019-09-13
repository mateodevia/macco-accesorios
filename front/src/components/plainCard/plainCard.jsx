import React, { Component } from "react";
import "./plainCard.css";
import trash from "./recycle.svg";
import edit from "./pencil.svg";

class PlainCard extends Component {
  render() {
    return (
      <div id="rectangleGris">
        <img id="imagen" src={this.props.rutaImagen} />

        <h1>{this.props.nombre}</h1>
        <h2>{this.props.precio}</h2>
        {this.props.autenticado &&
                    <button id="botonEditar" >
                      <img id="iconoEditar" src={trash} alt="" />
                    </button>
        }
        {this.props.autenticado &&
                    <button id="botonBorrar">
                      <img id="iconoBorrar" src={edit} width="15%" height="15%" alt="" />
                    </button>
        }
      </div>
    );
  }
}

export default PlainCard;