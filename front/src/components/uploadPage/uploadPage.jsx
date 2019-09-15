import React, { Component } from 'react';
import NoDisponible from '../noDisponible/noDisponible';
import "../styles/general.css";
import "./uploadPage.css";
import FileChooser from '../fileChooser/fileChooser';


class uploadPage extends Component {
  constructor(props){
    super(props);
    this.state = { autenticado: false,
      namePage: 'Macco Accesorios',
      nameValue: null,
      descriptionValue: null,
      cantidadValue: null,
      precioValue: null,
      cantidadValue: null,

      values:{
        name:null,
        descripcion:null,
        precio:null,
        cantidad:null,
      },
      descripcion: {
        width:"100%",
        height:"20px",
      }
    };
    this.resize=this.resize.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  
  handleSubmit(event){
    console.log(this.state.nameValue);
    alert('A name was submitted: ' + this.state.nameValue);
    event.preventDefault();
  }
handleChange(event){
  this.setState({nameValue: event.target.value});


};

resize(){
 

};
  render() {


    return (
      <div>
        <span className=""> Agregar un producto al catalogo</span>
        <form className="  " onSubmit={this.handleSubmit}>

          <div id="lineaVerde" className=""></div>
          <div className="">
            <div className="fila">
              <div id="fila" className="">
                <input type="text" placeholder="nombre" className="nombre" name="nombre" value={this.state.nameValue} onChange={this.handleChange} />
              </div>
              
            </div>
            <div id="lineaRoja" ></div>
            <FileChooser />
            <div id="lineaRoja" ></div>
            <div className="fila">
              <input className="descripcion" onKeyPress={this.resize}  height="40px"  name="description" placeholder="Describa el producto aqui"  value={this.state.descripcionValue} onChange={this.handleChange}/>
            </div>
            <div id="lineaRoja" ></div>
            <div className="fila">
                <input type="number" placeholder="precio"  className="precio" min="0" name="precio" />
                <input type="number" placeholder="cantidad"  className="cantidad" min="0" name="cantidad" />
            </div>
            <div id="lineaRoja" ></div>
            <div className="fila"></div>
            <div id="lineaVerde" className=""></div>
            <div className="fila">
                <input type="submit"  className="submit" min="0" name="precio" value="Submit"/>
            </div>

          </div>
        </form>
      </div>



    );
  }
}

export default uploadPage;