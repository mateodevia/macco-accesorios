import React, { Component } from 'react';
import './homePage.css'
import BlurredCarousel from "../blurredCarousel/blurredCarousel";
import Catalogo from "../catalogo/catalogo";
import Footer from '../footer/footer';
import bolso2 from "../bolsosPage/bolso2.jpg";
import bolso8 from "../bolsosPage/bolso8.jpg";
import bolso6 from "../bolsosPage/bolso6.jpg";

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    state = {
        productosDestacados: [
            {
                imagen: "https://res.cloudinary.com/drfggfn8f/image/upload/v1568469505/macco/bolsos/eik0rmakvxoy75ndc1ff.jpg",
                nombre: 'Tula Hermes',
                precio: '140000'
            },
            {
                imagen: "https://res.cloudinary.com/drfggfn8f/image/upload/v1568469506/macco/bolsos/aqjej6fhr6vgyherv1nc.jpg",
                nombre: 'Buyuwant',
                precio: '250000'
            },
            {
                imagen: "https://res.cloudinary.com/drfggfn8f/image/upload/v1568469503/macco/bolsos/mqlbjdsibeahnblt68cg.jpg",
                nombre: 'Hexagonal Pequeño',
                precio: '60000'
            },
            {
                imagen: "https://res.cloudinary.com/drfggfn8f/image/upload/v1568253636/macco/bolsos/randflmwmgrenm4s4dcn.jpg",
                nombre: 'Bolso de Lujo Lacatu',
                precio: '250000'
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <BlurredCarousel />
                <h1>Productos Destacados</h1>
                <Catalogo productos={this.state.productosDestacados} filtro={false} />
            </React.Fragment>
        );
    }
}

export default HomePage;