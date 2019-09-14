import React, { Component } from "react";
import "./catalogo.css";
import PlainCard from "../plainCard/plainCard";
import NoDisponible from "../noDisponible/noDisponible";

class Catalogo extends Component {

  constructor(props){
    super(props);
    this.state = { uploading: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
       
  

  handleClose() {
    this.setState((state)=>{

      return {uploading:false};
    });
  }


  handleClickToParent(){

    this.props.handleClick=this.state.handleClick;
  }
  handleClick() {
    this.setState((state)=>{

      return {uploading:true};
    });
  }
  render() {
    return (
 <div>
       {this.state.uploading &&   <div className="modal" id="myModal">
       <div className="modal-content">
    <button className="close" onClick={this.handleClose}>x</button>
          <p>Some text in the Modal..</p>
          </div>
        </div>}
        <div className="row justify-content-center">
          {this.props.productos.map(
            producto =>
              < PlainCard autenticado={this.props.autenticado} key={producto._id} rutaImagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} />
          )}
        </div>
        <button onClick={this.handleClick}>heyyyyyyy</button>
      </div>
    );
  }
}

export default Catalogo;