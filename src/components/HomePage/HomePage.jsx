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
              <img src="https://imgur.com/KuysHg5.jpg" alt="Phone img" className="HomePageimg"/>
            <p className="MoveText"> How are you feeling?</p>
            <div className="row HomePage Move1">
              <div className="col-sm-6">
                <Link to='/anxiety'><AnxiteyLottie/></Link>
                <p className="HomepageText"> Anxious</p>
              </div>
              <div className="col-sm-6">
                <Link to='/happy'> <HappyLottie/></Link>
               <p className="HomepageText mt-3">  Happy</p>
              </div>
              </div>

              <div className="row HomePage Move2">
              <div className="col-sm-6">
              <Link to='/angry'> <AngryLottie/></Link>
                <p className="HomepageText mt-2"> Angry</p>
              </div>
              <div className="col-sm-6">
              <Link to='/sad'> <SadLottie/></Link>
               <p className="HomepageText mt-2"> Sad</p>
              </div>
              </div>

              <div className="row HomePage Move3 mb-3">
              <div className="col-sm-6">
              <Link to='/fear'> <FearLottie/> </Link>
                <p className="HomepageText mt-2"> Fear</p>
              </div>
              <div className="col-sm-6">
              <Link to='/meh'> <MehLottie/></Link>
               <p className="HomepageText mt-2"> Meh</p>
              </div>
              </div>
            </div>
        );
    }
}

export default QuestionSection;