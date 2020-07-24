import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'; 
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import About from './pages/About/About';
import Happy from './components/Happy/Happy';
import Angry from './components/Anger/Anger';
import Sad from './components/Sad/Sad';
import Meh from './components/Meh/Meh';
import Fear from './components/Fear/Fear';
import Anxiety from './components/Anxiety/Anxiety';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
            <Route
              exact path="/"
                render={ props => (
                  <HomePage/>
                )}
              />
              <Route
              path="/about"
                render={ props => (
                  <About/>
                )}
              />
              <Route
              path="/happy"
                render={ props => (
                  <Happy/>
                )}
              />
              <Route
              path="/sad"
                render={ props => (
                  <Sad/>
                )}
              />
            <Route
              path="/fear"
                render={ props => (
                  <Fear/>
                )}
              />
            <Route
              path="/meh"
                render={ props => (
                  <Meh/>
                )}
              />
            <Route
              path="/angry"
                render={ props => (
                  <Angry/>
                )}
              />
              <Route
              path="/anxiety"
                render={ props => (
                  <Anxiety/>
                )}
              />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}





export default App;
