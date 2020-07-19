import React from 'react'; 
import Lottie from 'react-lottie-player';
import lottieJson from "./fearimg.json"



const Animation = () => {
    return (
        <div>
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 170, height: 170, border:"5px solid red"}}
            /> 
        </div>
    )
}


export default Animation; 