import React, {Component} from 'react';
import "./About.css"

class About extends Component {
    render(){
        return(
            <div className = "Background">    
            
            < img src = "https://i.imgur.com/OhAduIZ.png"
              alt = "3 people conversing"
              class = "Image"/>

            <p className = "Bismillah"> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>     
            <p className = "Tagline">Curating a more positive social media feed</p>
            
            <div className = "shadow-lg Box">
            <h3 className = "Info"> The Good Feed started as an idea to create a more positive feed in the age of social media and to eliminate the typical negative feelings that arise from using social media, 
                such as comparison, being influenced, inadequacy, FOMO, suppressing your feelings, information overload, and feeling lost spiritually. We then expanded our original app idea 
                to include mental health and islamic resources. We want users to leave this app feeling much better about themselves along with more hope and connection to their faith 
                compared to the usage of other social media platforms. </h3> 
            </div>

            <p className = "Team"> OUR TEAM</p>

            <div className = "shadow-lg BoxA">
                <h2> Salma Farah</h2>
                <p className = "Bio"> Salma is a software developer passionate about design, user experience, and creating innovative applications. When she's not coding, she loves 
                spending time with her family, writing, making art, watching everything on Netflix’s and learning about new design aspects using Adobe and Figma.</p>
                <p className = "Contact"> GitHub: salmafarah </p>
                <img src = "https://i.imgur.com/AJwVv9p.png"
                  alt = "Icon of Salma"
                  class = "Icon" />
            </div>

            <div className = "shadow-lg BoxB">
                <h2> Maggie Negm</h2>
                <p className = "Bio"> Maggie is a software developer with experience in the frontend and backend. She is passionate about open-source and helping other 
                                      junior developers. She enjoys reading fantasy fiction, poetry, and deen/spirituality books. She also enjoys watching TV sitcoms and stand up comedy shows. </p>
                <p className = "Contact"> GitHub: maggienegm </p>
                <img src = "https://i.imgur.com/fqiU2lM.png"
                  alt = "Icon of Maggie"
                  class = "IconA" />
            </div>

             <div className = "shadow-lg BoxC">
                <h2> Hiba Syeda</h2>
                <p className = "Bio"> Hiba is a computer science student with experience in business, digital outreach, and social media. She is currently working towards gaining skills 
                                      in web and mobile development. Her non-tech related hobbies include reading books/research, drawing, running, volunteering, and organizing things.</p>
                <p className = "Contact"> GitHub: hibacodes </p>
                <img src = "https://i.imgur.com/V6UVtx4.png"
                  alt = "Icon of Hiba"
                  class = "IconA" />
            </div>

            <div className = "shadow-lg BoxD">
                <h2> Alaa Salim</h2>
                <p className = "Bio"> Alaa is a developer with a passion for designing. She enjoys painting, and sketching. Although most of the time she’s watching 
                                      crime shows on Netflix she also likes to do word searches, puzzles and learn new Adobe tools.</p>
                <p className = "Contact"> GitHub: alaa-salim </p>
                <img src = "https://i.imgur.com/EXGXZlf.png"
                  alt = "Icon of Alaa"
                  class = "Icon" />
            </div> 

            <h1 className = "Alhamdulillah"> ٱلْحَمْدُ لِلَّٰهِ</h1>

            </div>

        );
    }
}

export default About;
