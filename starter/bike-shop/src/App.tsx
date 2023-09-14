import React from 'react';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="container bg-white">
        <Header />
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">Bikes</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
