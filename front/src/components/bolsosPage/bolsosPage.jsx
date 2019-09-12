import React, { Component } from "react";
import Catalogo from "../catalogo/catalogo";
import Footer from "../footer/footer";
import "../styles/general.css";
import axios from "axios";

class BolsosPage extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { productos: [] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let promesa = axios.get("/crudBolsos", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    promesa.then(res => {

      this.setState({ productos: res.data });
    });
    promesa.catch(() => console.log("pailas"));
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <img className="imagen" src={this.state.imagen} />
        </div>
        <Catalogo productos={this.state.productos} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BolsosPage;