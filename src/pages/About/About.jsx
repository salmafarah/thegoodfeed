import React, {Component} from 'react';
import "./About.css"

class About extends Component {
    render(){
        return(
            <div className = "Wrap">    
            
            < img src = "https://i.imgur.com/UeAYvsq.png"
              alt = "3 people conversing"
              class = "Image"/>
            < img src = "https://i.imgur.com/whphlgA.png"
              alt = "Friendly ones"
              class = "abtImage"/>

            <p className = "Bismillah"> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>     
            <p className = "Tagline">Curating a more positive social media feed</p>
            
            <div className = "shadow-lg Box">
            <h5> "Give and pour into other people's cups but don't forget to refill your own" - Dr. Rania Awaad.
                Mental health is no longer a stigma. People have started recognizing how important it is to take 
                care of ones' mental health. Yet, there is still a stigmatization around the topic of mental health. </h5> 
            </div>

            <p className = "Team"> OUR TEAM</p>

            <div className = "shadow-lg BoxA">
                <h2> Salma Farah</h2>
            </div>
            <div className = "shadow-lg BoxB">
                <h2> Maggie Negm</h2>
            </div>
             <div className = "shadow-lg BoxC">
                <h2> Hiba Syeda</h2>
            </div>
            <div className = "shadow-lg BoxD">
                <h2> Alaa Salim</h2>
            </div> 

            <h5 className = "Email"> email address</h5>

            </div>

        );
    }
}

export default About;
