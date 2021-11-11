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
        <div class="content">
          <div class="subcontent">
            <h4>Responsive Card Layout</h4>
            A responsive card layout using SASS, flexbox, and media queries
            <iframe src="https://codesandbox.io/embed/vigorous-sun-puvi8?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fstyles.scss&moduleview=1&theme=dark"
                 class="csb-iframe"
                 title="Card-Layout"
                 allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                 sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
               ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
