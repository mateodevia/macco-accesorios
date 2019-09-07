import React, { Component } from 'react';

class NoDisponible extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className='contenedor'>
                    <img src="https://img.icons8.com/ios-filled/100/000000/image-not-avialable.png" />
                </div>
                <h1>Oops! Este contenido aun no esta disponible</h1>
                <h2>Estamos trabajando, para traertelo lo mas pronto posible</h2>
            </React.Fragment>
        );
    }
}

export default NoDisponible;