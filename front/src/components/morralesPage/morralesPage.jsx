import React, { Component } from 'react';
import Catalogo from '../catalogo/catalogo';
import '../styles/general.css';
import axios from 'axios';

class MorralesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { productos: [] };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let promesa = axios.get('/crudMorrales', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        promesa.then((res) => {
            this.setState({ productos: res.data });
        });
        promesa.catch(() => console.log('pailas'));
    }

    refresh = () => {
        let promesa = axios.get('/crudMorrales', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        promesa.then((res) => {
            this.setState({ productos: res.data });
        });
        promesa.catch(() => console.log('pailas'));
    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <img
                        className='imagen'
                        src='https://res.cloudinary.com/drfggfn8f/image/upload/v1568479748/macco/bolsos/kbm6hsxlel13qoijtr9v.jpg'
                    />
                </div>
                <Catalogo
                    url={'crudMorrales'}
                    productos={this.state.productos}
                    autenticado={this.props.autenticado}
                    filtro={true}
                    refresh={this.refresh}
                />
            </React.Fragment>
        );
    }
}

export default MorralesPage;
