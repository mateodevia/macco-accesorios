import React, { Component } from "react";
import "./plainCard.css";
import trash from "./recycle.svg";
import edit from "./pencil.svg";

class PlainCard extends Component {
    state = {

        deleteRoute:trash,
        editRoute: edit,


    }
    render() {
        return (
            <div id="rectangleGris">
                <img id="imagen" src={this.props.rutaImagen} />

                <h1>{this.props.nombre}</h1>
                <h2>{this.props.precio}</h2>
                <button id="botonEditar" >
                    <img id ="iconoEditar" src={this.state.editRoute} alt="" />
                </button>
                <button id="botonBorrar"><img id="iconoBorrar" src={this.state.deleteRoute} width="15%" height="15%" alt=""></img> </button>

            </div>
        );
    }
}

export default PlainCard;