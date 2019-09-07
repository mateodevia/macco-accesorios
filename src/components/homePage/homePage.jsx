import React, { Component } from 'react';
import './homePage.css'
import BlurredCarousel from "../blurredCarousel/blurredCarousel";
import Catalogo from "../catalogo/catalogo";
import Footer from '../footer/footer';
import bolso2 from "../bolsosPage/bolso2.JPG";
import bolso8 from "../bolsosPage/bolso8.JPG";
import bolso6 from "../bolsosPage/bolso6.JPG";

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    state = {
        productosDestacados: [
            {
                rutaImagen: bolso2,
                nombre: 'Bolso 2',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso8,
                nombre: 'Bolso 8',
                precio: '$100,000'
            },
            {
                rutaImagen: bolso6,
                nombre: 'Bolso 6',
                precio: '$100,000'
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <BlurredCarousel />
                <h1>Productos Destacados</h1>
                <Catalogo productos={this.state.productosDestacados} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomePage;