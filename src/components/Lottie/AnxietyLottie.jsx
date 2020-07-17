import React from 'react'; 
import Lottie from 'react-lottie-player';
import lottieJson from "./anxiteyimg.json"



const Animation = () => {
    return (
        <div>
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 150, height: 150 }}
            /> 
        </div>
    )
}


export default Animation; 