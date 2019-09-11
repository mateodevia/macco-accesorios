import React, { Component } from 'react';
import Catalogo from '../catalogo/catalogo'
import Footer from '../footer/footer';
import "../styles/general.css";
import bolsos from "./bolsos.JPG";
import bolso1 from "./bolso1.JPG";
import bolso2 from "./bolso2.JPG";
import bolso3 from "./bolso3.JPG";
import bolso4 from "./bolso4.JPG";
import bolso5 from "./bolso5.JPG";
import bolso6 from "./bolso6.JPG";
import bolso7 from "./bolso7.JPG";
import bolso8 from "./bolso8.JPG";
import bolso9 from "./bolso9.JPG";

class BolsosPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    state = {
        imagen: bolsos,
        productos: [
            {
                rutaImagen: bolso1,
                nombre: 'Bolso 1',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso2,
                nombre: 'Bolso 2',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso3,
                nombre: 'Bolso 3',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso4,
                nombre: 'Bolso 4',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso5,
                nombre: 'Bolso 5',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso6,
                nombre: 'Bolso 6',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso7,
                nombre: 'Bolso 7',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso8,
                nombre: 'Bolso 8',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso9,
                nombre: 'Bolso 9',
                precio: '$100,000'
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <img className="imagen" src={this.state.imagen} />
                </div>
                <Catalogo productos={this.state.productos} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BolsosPage;