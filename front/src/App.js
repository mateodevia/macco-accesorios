import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/navBar/navbar";
import HomePage from "./components/homePage/homePage";
import BolsosPage from "./components/bolsosPage/bolsosPage";
import MorralesPage from "./components/morralesPage/morralesPage";
import TennisPage from "./components/tennisPage/tennisPage";
import LoginForm from "./components/login/login";
import Footer from "./components/footer/footer";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autenticado: false
    };
  }

  handleAuthentication = () => {
    this.setState({ autenticado: true });
  }

  handleCerrarSesion = () => {
    this.setState({ autenticado: false });
  }

  handleClick = (selectedTitle) => {
    this.setState({ isOpen: !this.state.isOpen, selected: selectedTitle });
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" component={NavBar} />
        <Route path="/" component={HomePage} exact />
        <Route path="/administrador" render={(props) => <LoginForm {...props} autenticado={this.state.autenticado} handleAuthentication={this.handleAuthentication} handleCerrarSesion={this.handleCerrarSesion} />} exact />
        <Route path="/bolsos" render={(props) => <BolsosPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/morrales" render={(props) => <MorralesPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/tennis" render={(props) => <TennisPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/" render={(props) => <Footer {...props} autenticado={this.state.autenticado} handleCerrarSesion={this.handleCerrarSesion} />} />
      </HashRouter>
    );
  }
}

export default App;
