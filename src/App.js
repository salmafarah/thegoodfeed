import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import About from "./pages/About/About";
import Happy from "./components/Happy/Happy";
import Angry from "./components/Anger/Anger";
import Sad from "./components/Sad/Sad";
import Meh from "./components/Meh/Meh";
import Fear from "./components/Fear/Fear";
import Anxiety from "./components/Anxiety/Anxiety";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Nav />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/happy" component={Happy} />
          <Route path="/sad" component={Sad} />
          <Route path="/fear" component={Fear} />
          <Route path="/meh" component={Meh} />
          <Route path="/angry" component={Angry} />
          <Route path="/anxiety" component={Anxiety} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
