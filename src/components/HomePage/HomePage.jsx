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
            <div className="Wraper">
              <div className="container-fluid">
               <div className="row">
                  <div className="col-12 col-md-6 col-lg-6">
                  <p className="HomePageTag border-0 text-wrap">Curating a more positive social media feed</p>
                  </div>
                <div className="col-12 col-md-6 col-lg-6 justify-content-center d-flex align-items-center text-center">
                <div className="card h-100 border-0 shadow-lg mt-5 Width">
                      <div className="card-body QuestionBox rounded">
                        <h1 className="card-title QuestionTitle">How Are You Feeling ?</h1>
                        <div className="row mb-3 mt-4 justify-content-center">
                          <div className="col-5">
                          <Link to='/anxiety'><AnxiteyLottie/></Link>
                          <p className="QuestionText"> Anxitey</p>
                          </div>
                          <div className="col-5">
                          <Link to='/happy'> <HappyLottie/></Link>
                          <p className="QuestionText"> Happy</p>
                          </div>
                        </div>

                        <div className="row mb-3 justify-content-center">
                          <div className="col-5">
                          <Link to='/angry'> <AngryLottie/></Link>
                          <p className="QuestionText"> Anger</p>
                          </div>
                          <div className="col-5">
                          <Link to='/sad'> <SadLottie/></Link>
                          <p className="QuestionText"> Sad</p>
                          </div>
                        </div>

                        <div className="row mb-3 justify-content-center">
                          <div className="col-5">
                          <Link to='/fear'> <FearLottie/> </Link>
                          <p className="QuestionText"> Fearful</p>
                          </div>
                          <div className="col-5">
                          <Link to='/meh'> <MehLottie/></Link>
                          <p className="QuestionText"> Meh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      
        );
    }
}

export default QuestionSection;