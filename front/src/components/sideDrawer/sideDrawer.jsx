import React, { Component } from "react";
import "./sideDrawer.css";
import cerrado from "./arrowRight.svg";
import abierto from "./arrowDown.svg";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tamaños: {
        pequeño: true,
        mediano: true,
        grande: true
      },
      precios: {
        precioBajo: true,
        precioMedio: true,
        precioAlto: true
      },
      colores: {
        negro: true,
        blanco: true,
        rojo: true,
        azul: true,
        verde: true,
        rosado: true

      }
    };
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange(arreglo, atrib) {
    let nuevoEstado = { ...this.state };
    nuevoEstado[arreglo][atrib] = !nuevoEstado[arreglo][atrib];
    this.setState(nuevoEstado);
  }

  handleChange2 = (event) => {
    let nuevoEstado = { ...this.state };
    nuevoEstado.Pequeño = !nuevoEstado.Pequeño;
    this.setState(nuevoEstado);
  }

  render() {
    return (
      <div id="sticky">
        <div className="cont">
          {!this.state.isOpen &&
            <button id="botonCerrado" onClick={() => this.handleClick()}>
              <img className="botonFiltros" src={cerrado} alt="" />
            </button>
          }
          {this.state.isOpen &&
            <button id="botonAbierto" onClick={() => this.handleClick()}>
              <img className="botonFiltros" src={abierto} alt="" />
            </button>
          }
          <h4 id="palabraFiltros">Filtros</h4>
        </div>
        {this.state.isOpen &&
          <nav id="sideDrawerNav">
            <ul className='filtros'>
              <li className="filtro">
                <h4 className="tituloFiltro">Tamaño</h4>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("tamaños", "pequeño")} />
                  <h6 className="opcion">Pequeño</h6>
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("tamaños", "mediano")} />
                  <h6 className="opcion">Mediano</h6>
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("tamaños", "grande")} />
                  <h6 className="opcion">Grande</h6>
                </div>
              </li>
              <li className="filtro">
                <h4 className="tituloFiltro">Precio</h4>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("precios", "precioBajo")} />
                  <h6 className="opcion">$50,000 - $100,000</h6>
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("precios", "precioMedio")} />
                  <h6 className="opcion">$100,000 - $200,000</h6>
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("precios", "precioAlto")} />
                  <h6 className="opcion">$100,000 - $200,000</h6>
                </div>
              </li>
              <li className="filtro">
                <h4 className="tituloFiltro">Color</h4>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("colores", "negro")} />
                  <div id="negro" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("colores", "blanco")} />
                  <div id="blanco" />
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("colores", "rojo")} />
                  <div id="rojo" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("colores", "azul")} />
                  <div id="azul" />
                </div>
                <div className="contenedorInputValor">
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("colores", "verde")} />
                  <div id="verde" />
                  <input className="inputFiltro" type="checkbox" defaultChecked={true} onChange={() => this.handleChange("colores", "rosado")} />
                  <div id="rosado" />
                </div>
              </li>
            </ul>
          </nav>
        }
      </div >
    );
  }
}

export default SideDrawer;