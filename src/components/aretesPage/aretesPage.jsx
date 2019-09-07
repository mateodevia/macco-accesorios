import React, { Component } from 'react';
import Catalogo from '../catalogo/catalogo'
import Footer from '../footer/footer';
import "../styles/general.css";
import aretes from "./aretes.JPG";
import aretes1 from "./aretes1.JPG";
import aretes2 from "./aretes2.JPG";
import aretes3 from "./aretes3.JPG";
import aretes4 from "./aretes4.JPG";
import aretes5 from "./aretes5.JPG";
import aretes6 from "./aretes6.JPG";
import aretes7 from "./aretes7.JPG";
import aretes8 from "./aretes8.JPG";
import aretes9 from "./aretes9.JPG";
import aretes10 from "./aretes10.JPG";
import aretes11 from "./aretes11.JPG";
import aretes12 from "./aretes12.JPG";
import aretes13 from "./aretes13.JPG";
import aretes14 from "./aretes14.JPG";
import aretes15 from "./aretes15.JPG";
import aretes16 from "./aretes16.JPG";
import aretes17 from "./aretes17.JPG";
import aretes18 from "./aretes18.JPG";
import aretes19 from "./aretes19.JPG";

class AretesPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    state = {
        imagen: aretes,
        productos: [
            {
                rutaImagen: aretes1,
                nombre: 'Aretes 1',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes2,
                nombre: 'Aretes 2',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes3,
                nombre: 'Aretes 3',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes4,
                nombre: 'Aretes 4',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes5,
                nombre: 'Aretes 5',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes6,
                nombre: 'Aretes 6',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes7,
                nombre: 'Aretes 7',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes8,
                nombre: 'Aretes 8',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes9,
                nombre: 'Aretes 9',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes10,
                nombre: 'Aretes 10',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes11,
                nombre: 'Aretes 11',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes12,
                nombre: 'Aretes 12',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes13,
                nombre: 'Aretes 13',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes14,
                nombre: 'Aretes 14',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes15,
                nombre: 'Aretes 15',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes16,
                nombre: 'Aretes 16',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes17,
                nombre: 'Aretes 17',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes18,
                nombre: 'Aretes 18',
                precio: '$100,000'
            },
            {
                rutaImagen: aretes19,
                nombre: 'Aretes 19',
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

export default AretesPage;