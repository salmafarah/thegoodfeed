import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav'; 
import Footer from './components/Footer/Footer'
import Question from './components/QuestionSection/Question'


class App extends Component {
  render(){
    return (
      <div className="App">
        <Nav/>
        <Question/>
        <Footer/>
      </div>
    );
  }
}





export default App;
