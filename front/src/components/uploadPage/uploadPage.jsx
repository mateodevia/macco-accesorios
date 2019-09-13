import React, { Component } from 'react';
import NoDisponible from '../noDisponible/noDisponible';
import "../styles/general.css";
import "./uploadPage.css";
import 'bootstrap/dist/css/bootstrap.css';
import FileChooser from '../fileChooser/fileChooser';


class uploadPage extends Component
{
   state = { namePage: 'Macco Accesorios' };



    render() {

var textarea = {
    border: '0 none white',
    overflow: 'hidden',
    padding: '0',
    outline: 'none',
    "text-align": 'center',
    
};


  var styles1 = {
    margin: '20px',
    width: '250px',
    height: '250px',
    backgroundColor: 'yellow',
    display: 'inline-block',
  };  var styles2 = {
    margin: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: 'blue',
    display: 'inline-block',
    "text-align" : 'right',
  };

      var styles = {
    "text-align": 'center',
     "font-family": "Century Gothic, CenturyGothic, Geneva, AppleGothic, sans-serif",
     "font-weight": "bold",

  };


        return (


<div>
<span className="row"> Agregar un producto al catalogo</span>
<form className="border border-light p-5">

<div id="lineaVerde" className=""></div>
 <div className="container">
    <div className="fila">
      <div id="fila" className=""> 
        <input type="text" placeholder="nombre" style={styles} className="col form-control" name="nombre"/>
      </div>
   </div>
   <FileChooser/>
   <div id="lineaRoja" ></div>
    <div className="fila">
    <div id="fila separado">
    </div>
    <textarea className="space-around " style={textarea} rows = "2" cols = "20" name = "description" placeholder="Describa el producto aqui"> </textarea>
</div>
<div id="lineaRoja" ></div>
<div className="fila">
      <div id="fila" className=""> 
        <input type="number" placeholder="precio" style={styles} className="col form-control" min="0" name="precio"/>
      </div>
   </div>
   <div className="fila">
      <div id="fila" className=""> 
        <input type="number" placeholder="cantidad" style={styles} className="col form-control" min="0"name="cantidad"/>
      </div>
   </div>


  </div>
</form>


</div>



          );
    }
}

export default uploadPage;