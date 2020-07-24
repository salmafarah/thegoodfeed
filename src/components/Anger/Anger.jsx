import React, {Component} from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';


class Anger extends Component {
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
              <div class="emoji selectedEmoji">
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
                            <a href="https://www.goodreads.com/book/show/272724.Purification_of_the_Heart" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.imgur.com/zIKJxrN.jpg" alt="Purification of the Heart book cover" className="card-img-top rounded Big"/>
                            </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/SdxlutK.jpg" alt="woman meditating surrounded by plants" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://musliminc.com/8-amazing-anger-management-tips-from-prophet-muhammad-pbuh-and-islam-the-religion-of-peace-4272" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.imgur.com/HAroJFf.jpg" alt="8 Amazing Anger Management Tips from Prophet Muhammad (PBUH) and Islam, the Religion of Peace article" className="card-img-top rounded Big"/>
                            </a>
                        </div>
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/Z0Tpr29.jpg" alt="Sufficient for us is Allah, and He is the best Disposer of Affairs" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/3zT8SVI.png" alt="Oh Allah remove anger from my heart." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed/quw62_xVEj8"  className="card-img-top rounded"/>
                        </div>
                      </div>
                    </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.verywellmind.com/anger-management-strategies-4178870" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.imgur.com/9ZYHaNY.jpg" alt="11 Anger Management Strategies to Help You Calm Down article" className="card-img-top rounded Big"/>
                            </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/o1mRDtE.jpg" alt="Allah in Arabic calligraphy painting" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.al-islam.org/articles/diseases-soul-anger" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.imgur.com/cCYPqEK.jpg" alt="Diseases of the Soul: Anger article" className="card-img-top rounded Big"/>
                            </a>
                        </div>
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed/9KqdWUEaRDQ"  className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/DBKJaXH.png" alt="Between stimulus and response is our greatest power - the freedom to choose, Stephen Covey" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/xT67Fh8.jpg" alt="Dua for Anger: I seek refuge in Allah from Satan the outcast" className="card-img-top rounded"/>
                        </div>
                      </div>
                    </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/Kd2A5Ik.png" alt="Call upon me, I will respond to you..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.goodreads.com/book/show/410046.How_To_Control_Your_Anger_Before_It_Controls_You" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.imgur.com/7sSe4ya.jpg" alt="How to Control Your Anger Before it Controls You book cover" className="card-img-top rounded Big"/>
                            </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/anger-management/art-20045434" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.imgur.com/iKIP3Un.jpg" alt="Anger Management: 10 tips to tame Your temper" className="card-img-top rounded Big"/>
                            </a>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/hpa5qSM.png" alt="To be calm is the highest achievement of the self, Zen proverb" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/CoVNIEn.png" alt="hold firmly to the rope of Allah, Qur'an 3:103" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed/znYFlGgK3vs" className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                  <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://greatist.com/happiness/breathing-exercises-relax" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.imgur.com/0211gTS.jpg" alt="6 Breathing Exercises That Can Help You Relax in 10 Minutes or Less article" className="card-img-top rounded Big"/>
                        </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/4LMokvO.jpg" alt="and be patient over what befalls you, Al-Qur'an 31:17" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/7KRzouJ.png" alt="And seek help in patient and prayer, Al-Baqara-45" className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed/Viz7cKzBv6Q" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/c8QBW10.png"
                                alt="Dua to remove anger and stubborness: We (Allah) said O fire! Be you coolness and safety for Ibrahim (Abraham)! (Quran 21:69)" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/qwugLXV.png"
                                alt="4-7-8 breathing exercise: inhale through nose for 4 seconds; hold breath for 7 seconds; exhale slowly for 8 seconds; repeat 3 more times" className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/jw1eV4P.jpg" alt="fog over a lake view" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/c3nsPDM.png" alt="inhale exhale" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://islamhashtag.com/tips-and-dua-to-control-anger/" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.imgur.com/5HbvDoI.jpg" alt="Tips and Dua to Control Anger article" className="card-img-top Big"/> 
                            </a>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/75iVTqy.jpg" alt="man meditating with his cat next to him" className="card-img-top"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/WhPpH9Z.jpg" alt="Be patient over what befalls you, Qur'an 31:17" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/HSXcZmUN0OQ" className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Anger;