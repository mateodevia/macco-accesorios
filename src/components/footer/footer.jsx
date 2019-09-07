import React, { Component } from 'react';
import "./footer.css";
import SocialIconsBar from '../socialIconsBar/socialIconsBar';


class Footer extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div id="lineaVerde" />
                <h1>Siguenos en</h1>
                <SocialIconsBar />
                <div id="lineaRoja" />
                <div className="fondoGris">
                    <div className="fila">
                        <h4 className="item">maccoaccesorios@outlook.es</h4>
                        <h4 className="item">cel: 320 847 8097</h4>
                        <h4 className="item">Bogota, Colombia</h4>
                    </div>
                    <div className="contenedor">
                        <img id="logo" src="logo.jpeg" />
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Footer;