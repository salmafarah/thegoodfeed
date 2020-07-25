import React, {Component} from 'react';
import '../EmotionCSS.css';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

class Sad extends Component {
    render(){
        return(
          <div class="container">
            <div class="emojiNavBar">
              <div class="emoji">
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
              <div class="emoji selectedEmoji">
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
              <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/Dx7O0AP.jpg" alt="Prophet (PBUH) Dua" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <Iframe url="https://youtube.com/embed/PRJHORk4pZg" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/pCu09GI.jpg" alt="Distressed or Depressed Dua" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                          <a href="https://www.goodreads.com/book/show/40880320-don-t-be-sad" target="_blank" rel="noopener noreferrer"> 
                          <img src="https://imgur.com/nB2BqRI.jpg" alt="Don't Be Sad Book" className="rounded card-img-top img-fluid"/></a>
                      
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/3lrAI6u.jpg" alt="Maxime Lagace Quote" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                    <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/16112413-reclaim-your-heart" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/OwngtC6.jpg" alt="Reclaim Your Heart Book" className="rounded card-img-top img-fluid"/></a>
                      
                        </div>
                      </div>
                    </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/0ugBQDD.jpg" alt="Quran Verse (2:286)" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://deenspiration.com/podcast-player/" target="_blank" rel="noopener noreferrer">   
                        <img src="https://imgur.com/lqHOshv.jpg" alt="Deenspiration Podcast" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/BZThqeX.jpg" alt="Tough Dua" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="http://mentalhealth4muslims.com/dealing-with-grief/" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/145Tbuo.jpg" alt="Dealing With Grief Article" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                       <img src="https://imgur.com/TR1tSZY.jpg" alt="Lilly Singh Quote" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://yaqeeninstitute.org/sarah-sultan/everything-is-falling-apart-dealing-with-unexpected-life-detours/" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/EkK7Kdb.jpg" alt="Everything is Falling Apart Article" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                    </div>

                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/X4nErHM.jpg" alt="Imam Ibn al-Qayyim Quote" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/chE00kGtg48" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/yBB817G.jpg" alt="Quran Verse (2:153)" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/41811277-surahs-verse-from-the-holy-quran-for-stress-depression-anxiety" target="_blank" rel="noopener noreferrer"> 
                          <img src="https://imgur.com/8qJIRXK.jpg" alt="Surahs and Verse Book" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/wNiiFZa.jpg" alt="Nicholas Sparks Quote" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/910495.Du_a" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/9V245sj.jpg" alt="Dua Book" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                          <img src="https://imgur.com/UypVEW5.jpg" alt="Ibn Qayyim Al-Jawziyyah Quote" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.apa.org/research/action/speaking-of-psychology" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/Yk9B253.jpg" alt="Speaking of Psychology Podcast" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/oly4jDm.jpg" alt="islamify.org Quote" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://thriveglobal.com/stories/stop-social-media-comparison-tips/" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/U03LLyL.jpg" alt="4 Ways to Ditch the Comparison Game Article" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/OJfHHYi.jpg" alt="Faraaz Kazi Quote" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.psychologytoday.com/us/blog/compassion-matters/201507/the-value-sadness" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/P2JIH0g.jpg" alt="The Value of Sadness Article" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/HrCLIzz.jpg" alt="@what.is.mental.illness Comic" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <Iframe url="https://youtube.com/embed/eFbBBQPgkYk" className="rounded card-img-top img-fluidd"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/HqYRmzN.jpg" alt="chibird.com Comic" className="rounded card-img-top img-fluidd"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/21413760-the-upward-spiral" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/hRENN3A.jpg" alt="The Upward Spiral Book" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                        <img src="https://imgur.com/ZBZrPr3.jpg" alt="Abby Rose Quote" className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/13237327-the-magic" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/8TAJrBY.jpg" alt="Magic Book" className="rounded card-img-top img-fluid"/></a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          
            
        );
    }
}

export default Sad;
