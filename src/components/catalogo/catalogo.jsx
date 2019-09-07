import React, { Component } from 'react';
import "./catalogo.css";
import PlainCard from "../plainCard/plainCard";

class Catalogo extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    {this.props.productos.map(
                        producto =>
                            <PlainCard rutaImagen={producto.rutaImagen} nombre={producto.nombre} precio={producto.precio} />
                    )}
                </div>
            </div>
        );
    }
}

export default Catalogo;