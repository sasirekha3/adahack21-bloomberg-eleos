import React, { Component } from 'react';
import Header from './components/Header.js';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Bootstrap from "react-bootstrap";
import { ButtonGroup,  Dropdown, DropdownButton } from 'react-bootstrap';
import './App.css';
import MapContainer from "./components/MapContainer";

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header/>
        <br />
        <div className={"app-name"}>
            <p>Eleos</p>
        </div>
        <p className="App-intro">
            Sow kindness and compassion wherever you go
        </p>
          <MapContainer />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
