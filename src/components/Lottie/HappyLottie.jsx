import React from 'react'; 
import Lottie from 'react-lottie-player';
import lottieJson from "./happyimg.json"



const Animation = () => {
    return (
        <div>
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 150, height: 150, border:"5px solid red"}}
            /> 
        </div>
    )
}


export default Animation; 