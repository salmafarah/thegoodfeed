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
            <div className="Wrap">
              <img src="https://imgur.com/CDKqZSv.jpg" alt="Phone img" className="HomePageimg"/>
              <p className="TagLine1"> Curating a more positive</p>
              <p className="TagLine2"> social media feed</p>

              <div className="shadow-lg EmotionBox">
               <div className="container text-center">

               <div className="row  text-center">
                  <div className="col-sm-12">
                  <p className="text-center mt-3 QuestionText"> How are you feeling?</p>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className=" col-4 col-md-4 mr-4 EmotionCol">
                   <Link to='/anxiety'><AnxiteyLottie/></Link>
                    <p className="HomepageText"> Anxious</p>
                  </div>
                  <div className="col-4 col-md-4 mt-2 EmotionCol">
                  <Link to='/happy'> <HappyLottie/></Link>
                  <p className="HomepageText">  Happy</p>
                  </div>
                  </div>

                  <div className="row justify-content-center">
                  <div className=" col-4 col-md-4 mr-4 EmotionCol">
                  <Link to='/angry'> <AngryLottie/></Link>
                    <p className="HomepageText mt-2"> Angry</p>
                  </div>
                  <div className=" col-4 col-md-4 EmotionCol">
                  <Link to='/sad'> <SadLottie/></Link>
                  <p className="HomepageText mt-2"> Sad</p>
                  </div>
                  </div>

                  <div className="row justify-content-center">
                  <div className=" col-4 col-md-4 mr-4 EmotionCol">
                  <Link to='/fear'> <FearLottie/> </Link>
                    <p className="HomepageText mt-2"> Fearful</p>
                  </div>
                  <div className=" col-4 col-md-4 EmotionCol">
                  <Link to='/meh'> <MehLottie/></Link>
                  <p className="HomepageText mt-2"> Meh</p>
                  </div>
            </div>
          </div>
          </div>
          </div>
      
        );
    }
}

export default QuestionSection;