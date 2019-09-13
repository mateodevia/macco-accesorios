import React, { Component } from "react";
import "./catalogo.css";
import PlainCard from "../plainCard/plainCard";

class Catalogo extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          {this.props.productos.map(
            producto =>
              < PlainCard autenticado={true} key={producto._id} rutaImagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} />
          )}
        </div>
      </div>
    );
  }
}

export default Catalogo;