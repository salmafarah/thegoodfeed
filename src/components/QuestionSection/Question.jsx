import React, {Component} from 'react';
import './question.css';
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
                <div className="Question">
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
        );
    }
}

export default QuestionSection;