import React, { Component } from 'react';
import NoDisponible from '../noDisponible/noDisponible';

class SwaroskyPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    state = {}
    render() {
        return (<NoDisponible />);
    }
}

export default SwaroskyPage;