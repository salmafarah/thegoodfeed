import React, {Component} from 'react';
import "./About.css"

class About extends Component {
    render(){
        return(
            <div className = "Background">    
              <p className="Bismillah text-center align-top"> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
              <p className="Tagline mt-4 text-center align-top">Curating a more positive social media feed</p>

              <div className="container-fluid">
               <div className="row mt-5">
                  <div className="col-12 col-lg-6">
                  <p className="card p-3 BoxA Info shadow-lg text-left">The Good Feed started as an idea to create a more positive feed in the age of social media and to eliminate the typical negative feelings that arise from using social media, 
                such as comparison, being influenced, inadequacy, FOMO, suppressing your feelings, information overload, and feeling lost spiritually. We then expanded our original app idea 
                to include mental health and islamic resources. We want users to leave this app feeling much better about themselves along with more hope and connection to their faith 
                compared to the usage of other social media platforms. </p>
                  </div>
                  <div className="col-12 col-lg-6"> 
                   <div className="card border-0">
                  < img src = "https://i.imgur.com/OhAduIZ.png" alt = "3 people conversing" className = "Image img-fluid"/>
                  </div>
                 </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12">
                  <p className="card text-center border-0 Team">OUR TEAM </p>
                  </div>
                  </div>
                  <div className="row mt-4 mb-5">
                  <div className="col-12 col-lg-3"> 
                  <div className="card h-100">
                      <div className="card-body">
                        <h2 className="card-title">Salma Farah</h2>
                        <h6 className="card-subtitle mb-2 text-muted">Software Developer</h6>
                        <p className="card-text">Salma is a software developer passionate about design, user experience, and creating innovative applications. When she's not coding, she loves spending time with her family, writing, making art, watching everything on Netflix’s and learning about new design aspects using Adobe and Figma.</p>
                        <a href="https://github.com/salmafarah" target="_blank" rel="noopener noreferrer" className="card-link"> GitHub: salmafarah </a>
                      </div>
                    </div>
                 </div>
                 <div className="col-12 col-lg-3"> 
                  <div className="card h-100">
                      <div className="card-body">
                        <h2 className="card-title">Alaa Salim</h2>
                        <h6 className="card-subtitle mb-2 text-muted">Computer Scientist</h6>
                        <p className="card-text">Alaa is a developer with a passion for designing. She enjoys painting and sketching. Although most of the time she’s watching crime shows on Netflix she also likes to do word searches, puzzles and learn new Adobe tools.</p>
                        <a href="https://github.com/alaa-salim" target="_blank" rel="noopener noreferrer" className="card-link"> GitHub: alaa-salim </a>
                      </div>
                    </div>
                 </div>
                 <div className="col-12 col-lg-3"> 
                  <div className="card h-100">
                      <div className="card-body">
                        <h2 className="card-title">Hiba Syeda</h2>
                        <h6 className="card-subtitle mb-2 text-muted">Computer Scientist</h6>
                        <p className="card-text">Hiba is a computer science student with experience in business, digital outreach, and social media. She is currently working towards gaining skills
                                     in web and mobile development. Her non-tech related hobbies include reading books/research, drawing, running, volunteering, and organizing things.</p>
                        <a href="https://github.com/hibacodes" target="_blank" rel="noopener noreferrer" className="card-link"> GitHub: hibacodes </a>
                      </div>
                    </div>
                 </div>
                 <div className="col-12 col-lg-3"> 
                  <div className="card h-100">
                      <div className="card-body">
                        <h2 className="card-title">Maggie Negm</h2>
                        <h6 className="card-subtitle mb-2 text-muted">Software Developer</h6>
                        <p className="card-text">Maggie is a software developer with experience in the frontend and backend. She is passionate about open-source and helping other
                                     junior developers. She enjoys reading fantasy fiction, poetry, and deen/spirituality books. She also enjoys watching TV sitcoms and stand up comedy shows.</p>
                        <a href="https://github.com/maggienegm" target="_blank" rel="noopener noreferrer" className="card-link"> GitHub: maggienegm</a>
                      </div>
                    </div>
                 </div>
                 </div>
                </div>
              








           

            </div>

        );
    }
}

export default About;
