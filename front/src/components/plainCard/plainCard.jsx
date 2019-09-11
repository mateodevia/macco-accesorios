import React, { Component } from 'react';
import "./plainCard.css";

class PlainCard extends Component {
    state = {}
    render() {
        return (
            <div id="rectangleGris">
                <img id="imagen" src={this.props.rutaImagen} />

                <h1>{this.props.nombre}</h1>
                <h2>{this.props.precio}</h2>
            </div>
        );
    }
}

export default PlainCard;