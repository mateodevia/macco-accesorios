import React, { Component } from "react";
import "./catalogo.css";
import PlainCard from "../plainCard/plainCard";
import NoDisponible from "../noDisponible/noDisponible";

class Catalogo extends Component {


 constructor(props){
    super(props);
    this.state = { uploading: false }
    this.handleClick = this.handleClick.bind(this);
 }
       
  handleClick() {
    this.setState((state)=>{

        return {uploading:true};
    });
  }
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          {this.props.productos.map(
            producto =>
              < PlainCard autenticado={this.props.autenticado} key={producto._id} rutaImagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} />
          )}
        </div>
       <button onClick={this.handleClick}>heyyyyyyy</button>
       {this.state.uploading && <div id="modal"> <div className="modalContent">    Lorem, ipsum dolor sit a earum explicabo, tentiuepellat porro dolor.
       </div>
        </div>}
 
      </div>
    );
  }
}

export default Catalogo;