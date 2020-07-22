import React from 'react'; 
import Lottie from 'react-lottie-player';
import lottieJson from "./anxietyimg.json"



const Animation = () => {
    return (
        <div>
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ height: 135}}
            /> 
        </div>
    )
}


export default Animation; 