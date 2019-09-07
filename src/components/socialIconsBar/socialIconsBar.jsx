import React, { Component } from 'react';
import "./socialIconsBar.css";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import whatsapp from "./whatsapp.svg";

class SocialIconsBar extends Component {
    state = {
        redes: [
            {
                nombre: 'facebook',
                imagen: facebook,
                url: 'https://www.facebook.com/MACCO-accesorios-106017357411348/'
            },
            {
                nombre: 'instagram',
                imagen: instagram,
                url: 'https://www.instagram.com/macco__accesorios/'
            },
            {
                nombre: 'whatsapp',
                imagen: whatsapp,
                url: ''
            }
        ]
    }
    render() {
        return (
            <ul className="lista">
                {this.state.redes.map(
                    red =>
                        <li className="itemLista">
                            <a href={red.url}>
                                <img id={red.nombre} src={red.imagen} />
                            </a>
                        </li>
                )}
            </ul>
        );
    }
}

export default SocialIconsBar;