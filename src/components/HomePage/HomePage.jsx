import React, {Component} from 'react';
import './HomePage.css';
import AnxiteyLottie from '../Lottie/AnxietyLottie';
import HappyLottie from '../Lottie/HappyLottie'; 
import AngryLottie from '../Lottie/AngryLottie';
import MehLottie from '../Lottie/MehLottie';
import SadLottie from '../Lottie/SadLottie';
import FearLottie from '../Lottie/FearLottie';
import {Link } from 'react-router-dom';



class QuestionSection extends Component {
 
    render(){
        return(
            <div className="Wrap align-items-center">
            <img src="https://imgur.com/KuysHg5.jpg" alt="..." className="HomePageimg"/>
            <div className="row HomePage">
                    <div className="col-sm-6 Green">
                  <p> Hello</p>
                      </div>
                    <div className="col-lg-4 Green Moveside">
                      <div className="card">
                      <h1>Question</h1>
                    <div className="Lottie">
                     <Link to='/anxiety'><AnxiteyLottie/></Link>
                     <Link to='/happy'> <HappyLottie/></Link>
                     <Link to='/angry'> <AngryLottie/></Link>
                     <Link to='/meh'> <MehLottie/></Link>
                     <Link to='/sad'> <SadLottie/></Link>
                     <Link to='/fear'> <FearLottie/> </Link> 
                     </div>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionSection;