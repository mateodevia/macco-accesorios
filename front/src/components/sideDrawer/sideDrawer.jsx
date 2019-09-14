import React, { Component } from "react";
import "./sideDrawer.css";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pequeño: true,
      Mediano: true,
      Grande: true
    };
  }

  handleChange1 = (event) => {
    let nuevoEstado = { ...this.state };
    nuevoEstado.Pequeño = !nuevoEstado.Pequeño;
    this.setState(nuevoEstado);
  }

  handleChange2 = (event) => {
    let nuevoEstado = { ...this.state };
    nuevoEstado.Mediano = !nuevoEstado.Mediano;
    this.setState(nuevoEstado);
  }

  render() {
    return (
      <div id="sticky">
        <div className="cont">
          <button id="botonSide" onClick={() => this.handleClose()}>></button>
        </div>
        <nav id="sideDrawerNav">
          <ul className='filtros'>
            < li className="filtro">
              <h1 className="tituloFiltro">Tamaño</h1>
              <div id="inputFiltro">
                <input type="checkbox" defaultChecked={this.state.Pequeño} value={this.state.Pequeño} onChange={this.handleChange1} />
                <p>Pequeño</p>
              </div>
              <input type="checkbox" defaultChecked={this.state.Mediano} value={this.state.Mediano} onChange={this.handleChange2} />
              Mediano
              <input type="checkbox" defaultChecked={this.state.Grande} value={this.state.Grande} onChange={this.handleChange2} />
              Grande
            </li>
          </ul>
        </nav>
      </div >
    );
  }
}

export default SideDrawer;