import React, {Component} from 'react';
import '../EmotionCSS.css';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

class Anxiety extends Component {
    render(){
        return(
          <div class="container">
          <div class="emojiNavBar">
            <div class="emoji selectedEmoji">
              <Link to="/anxiety" style={{ textDecoration: 'none' }}>
                <img src="https://imgur.com/cDXx3RL.jpg" alt="anxietyEmoji" class="emojiImg" />
                <p>Anxious</p>
              </Link>
            </div>
            <div class="emoji">
              <Link to="/happy" style={{ textDecoration: 'none' }}>
                <img src="https://imgur.com/a19PgPn.jpg" alt="happyEmoji" class="emojiImg" />
                <p>Happy</p>
              </Link>
            </div>
            <div class="emoji">
              <Link to="/angry" style={{ textDecoration: 'none' }}>
                <img src="https://imgur.com/Wm7bH2r.jpg" alt="angryEmoji" class="emojiImg" />
                <p>Angry</p>
              </Link>
            </div>
            <div class="emoji">
              <Link to="/sad" style={{ textDecoration: 'none' }}>
                <img src="https://imgur.com/4bTQhis.jpg" alt="sadEmoji" class="emojiImg" />
                <p>Sad</p>
              </Link>
            </div>
            <div class="emoji">
              <Link to="/fear" style={{ textDecoration: 'none' }}>
                <img src="https://imgur.com/BQtaQJm.jpg" alt="fearEmoji" class="emojiImg" />
                <p>Fear</p>
              </Link>
            </div>
            <div class="emoji">
              <Link to="/meh" style={{ textDecoration: 'none' }}>
                <img src="https://imgur.com/QQV4kCY.jpg" alt="mehEmoji" class="emojiImg" />
                <p>Meh</p>
              </Link>
            </div>
          </div>

            <div className="container align-items-center mt-5">
              <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/35834423-free-your-mind" target="_blank" rel="noopener noreferrer">    
                        <img src="https://imgur.com/8cGmeM4.jpg></iframe>" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://youtube.com/embed/PUwAIx8h2kw" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/alBffXm.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/16154383-islam-s-treatment-for-anxiety-and-worry" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/ZWTf9mt.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.soundvision.com/article/25-ways-to-deal-with-stress-and-anxiety" target="_blank" rel="noopener noreferrer">   
                        <img src="https://imgur.com/U3Ufy39.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                    <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/KWuMEw9.jpg" alt="..." className="card-img-top rounded"/>
                      
                        </div>
                      </div>
                    </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/28231714-adult-coloring-book-designs" target="_blank" rel="noopener noreferrer">       
                        <img src="https://imgur.com/vYoQeMF.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://calmer-you.com/category/podcast/" target="_blank" rel="noopener noreferrer">   
                        <img src="https://imgur.com/NPzW7jH.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/31grm9a.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/27264160-fortress-of-the-muslim" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/GfI3cW4.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/QHkXvPq2pQE" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded"> 
                        <img src="https://imgur.com/2jDasp1.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                    </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/review/show/1611640069" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/qll0MC4.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://inspiritedminds.org.uk/blog/mindful-muslim-podcast/" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/MyaoD1h.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/qbPxUkH.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/425857.The_Relief_From_Distress" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/OT6M833.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.fastcompany.com/40522127/4-tips-to-help-you-curb-your-anxiety-from-uncertainty" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/xOmACpD.jpg" alt="..." className="card-img-top rounded Big"/></a>
                      </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/cOZcTsC.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                  <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/29214797-anti-stress" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/xPBkP7o.jpg" alt="..." className="card-img-top rounded Big"/></a> 
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/shDbwztqXSQ" className="card-img-top rounded"/>
                      </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/sCfmF6D.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/40408946-25-ways-to-deal-with-stress-anxiety-depression-from-islamic-perspecti" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/oQGW1NT.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.anxietyslayer.com/journal" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/0Vpr8IC.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">  
                        <img src="https://imgur.com/qbPxUkH.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/41551225-practicing-mindfulness" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/6jHgLPw.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://tiffinandteaofficial.com/duas-for-anxiety/" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/Ef9uycD.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/NOWGpEC.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/9415367-dealing-with-worries-stress" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/v6JPT9h.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/MB5IX-np5fE" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/wGwrudB.jpg" alt="..." className="card-img-top  rounded"/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          
            
        );
    }
}

export default Anxiety;

                    