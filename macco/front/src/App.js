import React from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/navBar/navbar";
import HomePage from "./components/homePage/homePage";
import BolsosPage from "./components/bolsosPage/bolsosPage";
import AretesPage from "./components/aretesPage/aretesPage";
import CollaresPage from "./components/collaresPage/collaresPage";
import PulserasPage from "./components/pulserasPage/pulserasPage";
import SwaroskyPage from "./components/swaroskiPage/swaroskyPage";
import NoviasPage from "./components/noviasPage/noviasPage";
import FileChooser from "./components/fileChooser/fileChooser"

function App() {
  return (
    <HashRouter>
      <Route path="/" component={NavBar} />
      <Route path="/" component={HomePage} exact />
      <Route path="/bolsos" component={BolsosPage} />
      <Route path="/aretes" component={AretesPage} />
      <Route path="/collares" component={CollaresPage} />
      <Route path="/pulseras" component={PulserasPage} />
      <Route path="/swarosky" component={SwaroskyPage} />
      <Route path="/novias" component={NoviasPage} />
      <Route path="/" component={FileChooser} />
    </HashRouter>
  );
}

export default App;
