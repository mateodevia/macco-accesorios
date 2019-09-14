import React, { Component } from "react";
import "./catalogo.css";
import PlainCard from "../plainCard/plainCard";
import SideDrawer from "../sideDrawer/sideDrawer";

class Catalogo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
      productosAPintar: props.productos
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ productosAPintar: newProps.productos });
  }

  handleClick() {
    this.setState((state) => {

      return { uploading: true };
    });
  }

  handlerFiltroTamaño = (tamaños) => {
    let newState = { ...this.state };

    let nuevaListaAPintar = this.props.productos.filter((producto) => {
      if (!tamaños.pequeño && producto.tamaño === "pequeño") {

        return false;
      }
      else if (!tamaños.mediano && producto.tamaño === "mediano") {

        return false;
      }
      else if (!tamaños.grande && producto.tamaño === "grande") {

        return false;
      }
      else {
        return true;
      }
    });

    newState.productosAPintar = nuevaListaAPintar;
    this.setState(newState);
  }

  handlerFiltroPrecio = (precios) => {
    let newState = { ...this.state };

    let nuevaListaAPintar = this.props.productos.filter((producto) => {
      if (!precios.precioBajo && (producto.precio <= 100000)) {

        return false;
      }
      else if (!precios.precioMedio && (100000 <= producto.precio) && (producto.precio <= 200000)) {

        return false;
      }
      else if (!precios.precioAlto && (200000 <= producto.precio)) {

        return false;
      }
      else {
        return true;
      }
    });

    newState.productosAPintar = nuevaListaAPintar;
    this.setState(newState);
  }

  handlerFiltroColor = (colores) => {
    let newState = { ...this.state };

    let nuevaListaAPintar = this.props.productos.filter((producto) => {
      if (!colores.negro && producto.color === "negro") {

        return false;
      }
      else if (!colores.azul && producto.color === "azul") {

        return false;
      }
      else if (!colores.cafe && producto.color === "cafe") {

        return false;
      }
      else if (!colores.avano && producto.color === "avano") {

        return false;
      }
      else if (!colores.blanco && producto.color === "blanco") {

        return false;
      }
      else if (!colores.azulClaro && producto.color === "azulClaro") {

        return false;
      }
      else if (!colores.verde && producto.color === "verde") {

        return false;
      }
      else if (!colores.amarillo && producto.color === "amarillo") {

        return false;
      }
      else if (!colores.rojo && producto.color === "rojo") {

        return false;
      }
      else if (!colores.fucsia && producto.color === "fucsia") {

        return false;
      }
      else if (!colores.rosado && producto.color === "rosado") {

        return false;
      }
      else {
        return true;
      }
    });

    newState.productosAPintar = nuevaListaAPintar;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        {this.props.filtro &&
          <SideDrawer handlerFiltroTamano={this.handlerFiltroTamaño} handlerFiltroPrecio={this.handlerFiltroPrecio} handlerFiltroColor={this.handlerFiltroColor}></SideDrawer>
        }
        <div className="row justify-content-center">
          {this.state.productosAPintar.map(
            producto =>
              < PlainCard autenticado={this.props.autenticado} key={producto._id} rutaImagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} cantidad={producto.cantidad} promocion={producto.promocion} />
          )}
        </div>
        <button onClick={this.handleClick}>heyyyyyyy</button>
        {this.state.uploading &&
          <div id="modal"> <div className="modalContent">    Lorem, ipsum dolor sit a earum explicabo, tentiuepellat porro dolor.
          </div>
          </div>
        }

      </div>
    );
  }
}
export default Catalogo;