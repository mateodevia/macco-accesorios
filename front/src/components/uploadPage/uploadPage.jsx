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
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeTamano = this.handleChangeTamano.bind(this);
    this.handleChangePromocion = this.handleChangePromocion.bind(this);
    this.handleChangeCantidad = this.handleChangeCantidad.bind(this);
    this.handleChangePrecio = this.handleChangePrecio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  
  handleSubmit(event){
    console.log(this.state);
    alert('A name was submitted: ' + this.state.nameValue);
    event.preventDefault();
  } 
  handleChangeName(event){
    this.setState({nameValue: event.target.value});
  };
  handleChangeDescription(event){
    this.setState({descriptionValue: event.target.value});
  };
  handleChangeCantidad(event){
    this.setState({cantidadValue: event.target.value});
  };
  handleChangeTamano(event){
    this.setState({tamanoValue: event.target.value});
  };
  handleChangePromocion(event){
    this.setState({promocionValue: event.target.value});
  };
  handleChangePrecio(event){
    this.setState({precioValue: event.target.value});
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
                <input type="text" placeholder="nombre" className="nombre" name="nombre" value={this.state.nameValue} onChange={this.handleChangeName} />
              </div>
              
            </div>
            <div id="lineaRoja" ></div>
            <FileChooser />
            <div id="lineaRoja" ></div>
            <div className="fila">
              <input className="descripcion" onKeyPress={this.resize}  height="40px"  name="description" placeholder="Describa el producto aqui"  value={this.state.descripcionValue} onChange={this.handleChangeDescription}/>
            </div>
            <div id="lineaRoja" ></div>
            <div className="fila">
                <input type="number" placeholder="precio"  className="precio" min="0" name="precio" value={this.state.precioValue} onChange={this.handleChangePrecio} />
                <input type="number" placeholder="cantidad"  className="cantidad" min="0" name="cantidad"  value={this.state.cantidadValue} onChange={this.handleChangeCantidad}/>
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