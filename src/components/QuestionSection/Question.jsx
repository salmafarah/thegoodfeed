import React, {Component} from 'react';
import './Question.css';
import LottieAnxitey from '../Lottie/AnxietyLottie';

class QuestionSection extends Component {
    render(){
        return(
            <div className="Wrapper">
                <div className="Question">
                    <h1 style={{display:"block"}}>Question</h1>
                     <LottieAnxitey/>
                </div>
            </div>
        );
    }
}

export default QuestionSection;