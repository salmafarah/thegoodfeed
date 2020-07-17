import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'; 
import Footer from './components/Footer/Footer'
import Question from './components/QuestionSection/Question'
import About from './pages/About/About'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
            <Route
              exact path="/"
                render={ props => (
                  <Question/>
                )}
              />
              <Route
              path="/about"
                render={ props => (
                  <About/>
                )}
              />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}





export default App;
