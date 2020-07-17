import React, {Component} from 'react';
import './Question.css';
import AnxiteyLottie from '../Lottie/AnxietyLottie';
import HappyLottie from '../Lottie/HappyLottie'; 

class QuestionSection extends Component {
    render(){
        return(
            <div className="Wrap">
                <div className="Question">
                    <h1>Question</h1>
                    <div className="Lottie">
                     <AnxiteyLottie/>
                     <HappyLottie/>
                     </div>
                </div>
            </div>
        );
    }
}

export default QuestionSection;