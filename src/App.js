//import logo from './logo.svg';
//import React, { Component } from "react";
import Sidebar from "./components/sidebar/sidebar";
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <Sidebar class="grid-sidebar" />
        <div class="header"></div>
        <div class="content"></div>
      </div>
    </div>
  );
}

// delete this pointless comment

export default App;
