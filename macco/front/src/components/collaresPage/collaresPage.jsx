import React, { Component } from 'react';
import NoDisponible from '../noDisponible/noDisponible';

class CollaresPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    state = {}
    render() {
        return (<NoDisponible />);
    }
}

export default CollaresPage;