import React, { Component } from 'react';
import NoDisponible from '../noDisponible/noDisponible';
import "../styles/general.css";
import "./uploadPage.css";
import FileChooser from '../fileChooser/fileChooser';
import axios from "axios";
import purse from "./shopping-bag.svg";

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
      imagenValue: null,
      promocionValue: true,
      colorValue: null,
      tamañoValue: null,
      imgsUploaded: false,
      descripcion: {
        width:"100%",
        height:"20px",
      }
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeTamano = this.handleChangeTamano.bind(this);
    this.handleChangePromocion = this.handleChangePromocion.bind(this);
    this.handleChangeCantidad = this.handleChangeCantidad.bind(this);
    this.handleChangePrecio = this.handleChangePrecio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveURLs = this.receiveURLs.bind(this);
  }
  
  
  handleSubmit(event)
  {
    console.log(this.state);
    alert('A name was submitted: ' + this.state.nameValue);
    event.preventDefault();
    let bolso={};
    bolso.nombre=this.state.nameValue;
    bolso.precio=this.state.precioValue;
    bolso.color="negro";
    bolso.tamaño="pequeño";
    bolso.imagen=this.state.imagenValue;
    bolso.cantidad=this.state.cantidadValue;
    bolso.promocion=false;

    let promesa1 = axios.post("/crudBolsos", bolso);
      promesa1.then((res) => {
    });
    promesa1.catch(() => console.log("no se pudo comunicar con el servidor"));
  };
   
  handleChangeName(event)
  {
    this.setState({nameValue: event.target.value});
  };
  handleChangeDescription(event)
  {
    this.setState({descriptionValue: event.target.value});
  };
  handleChangeCantidad(event)
  {
    this.setState({cantidadValue: event.target.value});
  };
  handleChangeTamano(event)
  {
    this.setState({tamanoValue: event.target.value});
  };
  handleChangePromocion(event)
  {
    this.setState({promocionValue: event.target.value});
  };
  handleChangePrecio(event)
  {
    this.setState({precioValue: event.target.value});
  };
  receiveURLs(URL)
  {
    this.setState({imagenValue: URL,
      imgsUploaded: true,
    });
    
    console.log(this.state.imagenValue);
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
            {
              this.state.imgsUploaded && <div> 
                holA 
                <img src={this.state.imagenValue} alt={this.state.descriptionValue}/> </div>
            }
            
            <FileChooser receiveURLs={this.receiveURLs}  />
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
            <div className="fila">
              <button className="pequeno"><img className="pequeno_imagen" src={purse} alt="flat_icon_purse"/></button>
              <button type="button" className="mediano"><img src={purse} alt="flat_icon_purse"/></button>
              <button type="button" className="grande"><img src={purse} alt="flat_icon_purse"/></button>

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