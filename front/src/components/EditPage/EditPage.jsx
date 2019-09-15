import React, { Component } from 'react';
import "./editPage.css";
import FileChooser from '../fileChooser/fileChooser';
import axios from "axios";
import purse from "./shopping-bag.svg";

class EditPage extends Component {
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
    this.handleChangeColor = this.handleChangeColor.bind(this);
    
  }
  componentDidMount(){
    console.log(this.props.id);
    let promesa = axios.get("/crudBolsos/"+this.props.id, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    promesa.then(res => {
      let newState ={...this.state};
      newState.nameValue= res.data.nombre;
      newState.cantidadValue= res.data.cantidad;
      newState.precioValue= res.data.precio;
      newState.imagenValue= res.data.imagen;
      newState.promocionValue= res.data.promocion;
      newState.colorValue= res.data.color;
      newState.tamañoValue= res.data.tamaño;
      newState.imgsUploaded= true;
      
      this.setState(newState);

    });
    promesa.catch(() => console.log("pailas"));
  }
  
  
  handleSubmit(event)
  {
    console.log(this.state);
    alert('A name was submitted: ' + this.state.nameValue);
    event.preventDefault();
    let bolso={};
    bolso.nombre=this.state.nameValue;
    bolso.precio=this.state.precioValue;
    bolso.color=this.state.colorValue;
    bolso.tamaño=this.state.tamanoValue;
    bolso.imagen=this.state.imagenValue;
    bolso.cantidad=this.state.cantidadValue;
    bolso.promocion=this.state.promocionValue;

    let promesa1 = axios.put("/crudBolsos/"+this.props.id, bolso);
      promesa1.then((res) => {
        this.props.refresh();
        this.props.handleClose();
    });
      promesa1.catch(() => console.log("no se pudo comunicar con el servidor"));
  };

   
  handleChangeName(event)
  {
    this.setState({nameValue: event.target.value});
  };
  handleChangeColor(col){
    let promise1=new Promise((resolve,reject)=>{
      this.setState({colorValue:col});
      resolve(col)
    }
    );
    promise1.then((col)=>console.log(this.state.colorValue));
    

    console.log("mousehover");
  }
  handleChangeDescription(event)
  {
    this.setState({descriptionValue: event.target.value});
  };
  handleChangeCantidad(event)
  {
    this.setState({cantidadValue: event.target.value});
  };
  handleChangeTamano(valor)
  {
    let promise_x=new Promise((resolve,reject)=>{
      this.setState({tamanoValue: valor});
        resolve('x');
    });
    promise_x.then((mensaje)=>console.log(this.state,mensaje));  
  };
  handleChangePromocion()
  {
    let promise_Prom=new Promise((resolve,reject)=>{
      console.log("actual",this.state.promocionValue);
      let promo = !this.state.promocionValue;
      this.setState({promocionValue:promo});
      resolve(this.state.promocionValue);
    });
    
    promise_Prom.then((estado)=>{console.log("nuevo",this.state.promocionValue)});
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
                <img src={this.state.imagenValue} id="imagenPreview" alt={this.state.descriptionValue}/> </div>
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
              <button type="button" className="pequeno">
                <img className="equeno_imagen" src={purse} alt="flat_icon_purse" onClick={() => this.handleChangeTamano("pequeno")}/>
                </button>
              <button type="button" value="mediano" onClick={() => this.handleChangeTamano("mediano")}className="mediano">
                <img src={purse} alt="flat_icon_purse"/>
                </button>
              <button type="button" className="grande" onClick={()=>this.handleChangeTamano("grande")}>
                <img src={purse} alt="flat_icon_purse"/>
                </button>
            </div>
            <div id="lineaRoja" ></div>
            <div className="fila">
              <button type="button" id="negro" onMouseEnter={()=>this.handleChangeColor("negro")}>Negro
              </button>
              <button type="button" id="blanco" onMouseEnter={()=>this.handleChangeColor("blanco")}>Blanco
              </button>
              <button type="button" id="azul" onMouseEnter={()=>this.handleChangeColor("azul")}>azul
              </button>
              <button type="button" id="azulClaro" onMouseEnter={()=>this.handleChangeColor("azulClaro")}>azulClaro
              </button>
              <button type="button" id="fucsia" onMouseEnter={()=>this.handleChangeColor("fucsia")}>fucsia
              </button>
              <button type="button" id="cafe" onMouseEnter={()=>this.handleChangeColor("cafe")}>cafe
              </button>
              <button type="button" id="verde" onMouseEnter={()=>this.handleChangeColor("verde")}>verde
              </button>
              <button type="button" id="rosado" onMouseEnter={()=>this.handleChangeColor("rosado")}>rosado
              </button>
              <button type="button" id="avano" onMouseEnter={()=>this.handleChangeColor("avano")}>avano
              </button>
              <button type="button" id="amarillo" onMouseEnter={()=>this.handleChangeColor("amarillo")}>Amarillo
              </button>
              <button type="button" id="rojo" onMouseEnter={()=>this.handleChangeColor("rojo")}>rojo
              </button>
            </div>
            <div id="lineaRoja"></div>
            <div className="fila">
              <button type="button" id="promocion" >PRomocion
              </button>
              <label className="switch">
                <input id="PROMO"type="checkbox"  name="precio" defaultChecked={this.state.promocionValue} onChange={() => this.handleChangePromocion() }/>
                <span className="slider"></span>
            </label>
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

export default EditPage;