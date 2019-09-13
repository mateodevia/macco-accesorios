import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/navBar/navbar";
import HomePage from "./components/homePage/homePage";
import BolsosPage from "./components/bolsosPage/bolsosPage";
import AretesPage from "./components/aretesPage/aretesPage";
import CollaresPage from "./components/collaresPage/collaresPage";
import PulserasPage from "./components/pulserasPage/pulserasPage";
import SwaroskyPage from "./components/swaroskiPage/swaroskyPage";
import NoviasPage from "./components/noviasPage/noviasPage";
import FileChooser from "./components/fileChooser/fileChooser";
import uploadPage from "./components/uploadPage/uploadPage";
import LoginForm from "./components/login/login";

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

  render() {
    return (
      <HashRouter>
        <Route path="/" component={NavBar} />
        <Route path="/" component={HomePage} exact />
        <Route path="/administrador" render={(props) => <LoginForm {...props} handleAuthentication={this.handleAuthentication} />} exact />
        <Route path="/bolsos" render={(props) => <BolsosPage {...props} autenticado={this.state.autenticado} />} />
        <Route path="/aretes" component={AretesPage} />
        <Route path="/collares" component={CollaresPage} />
        <Route path="/pulseras" component={PulserasPage} />
        <Route path="/swarosky" component={SwaroskyPage} />
        <Route path="/novias" component={uploadPage} />

      </HashRouter>
    );
  }
}

export default App;
