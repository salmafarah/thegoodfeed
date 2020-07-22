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
              style={{ width: 120, height: 120}}
            /> 
        </div>
    )
}


export default Animation; 