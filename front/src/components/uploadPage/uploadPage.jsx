import React, { Component } from 'react';
import NoDisponible from '../noDisponible/noDisponible';
import "../styles/general.css";
import "./uploadPage.css";
import FileChooser from '../fileChooser/fileChooser';


class uploadPage extends Component {
  state = { namePage: 'Macco Accesorios' };



  render() {


    return (
      <div id="modal">
        <span className=""> Agregar un producto al catalogo</span>
        <form className="  ">

          <div id="lineaVerde" className=""></div>
          <div className="">
            <div className="fila">
              <div id="fila" className="">
                <input type="text" placeholder="nombre"  className="nombre" name="nombre" />
              </div>
            </div>
            <FileChooser />
            <div id="lineaRoja" ></div>
            <div className="fila">
              <div id="fila ">
              </div>
              <textarea className="space-around "  rows="4" cols="40" name="description" placeholder="Describa el producto aqui"> </textarea>
            </div>
            <div id="lineaRoja" ></div>
            <div className="fila">
              <div id="fila" className="">
                <input type="number" placeholder="precio"  className="" min="0" name="precio" />
              </div>
            </div>
            <div className="fila">
              <div id="fila" className="">
                <input type="number" placeholder="cantidad"  className="" min="0" name="cantidad" />
              </div>
            </div>


          </div>
        </form>


      </div>



    );
  }
}

export default uploadPage;