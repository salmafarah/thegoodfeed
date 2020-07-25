import React, {Component} from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';


class Happy extends Component {
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
              <div class="emoji selectedEmoji">
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
              <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.amazon.com/Its-All-Your-Head-Happiness/dp/0060760001" 
                             target="_blank"
                               rel="noopener noreferrer">
                            <img src="https://i.imgur.com/mR2EYgB.png" 
                             alt="It's all in your head by Mark Levine and Stephen M.Polland" 
                             className="card border border-white rounded"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/4bUU6FM.png" 
                            alt="Today you are you, that is truer than true. There is no one alive who is youer than you. - Dr.Suess " 
                            className="card border border-white rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://gretchenrubin.com/books/the-happiness-project/about-the-book/" 
                             target="_blank"
                               rel="noopener noreferrer">
                                <img src="https://i.imgur.com/YinHXT2.png" 
                                 alt="...." 
                                 className="card border border-white rounded"/>
                            </a>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://yaqeeninstitute.org/yasienmohamed/the-idea-of-happiness-in-the-quran/" 
                             target="_blank"
                               rel="noopener noreferrer">
                                <img src="https://i.imgur.com/6IBvfJ5.png" 
                                alt="....." 
                                className="card border border-white rounded"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/Ud2txvh.jpg" 
                            alt="...." 
                            className="card border border-white rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.nytimes.com/guides/well/how-to-be-happy" 
                             target="_blank"
                               rel="noopener noreferrer">
                                <img src="https://i.imgur.com/wTY5Z5n.png" 
                                 alt="...." 
                                 className="card border border-white rounded"/>
                            </a>
                        </div>
                      </div>
                    </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://gretchenrubin.com/books/better-than-before/about-the-book/" 
                             target="_blank"
                               rel="noopener noreferrer">
                                <img src="https://i.imgur.com/CxIUawf.png" 
                                alt="....." 
                                className="card border border-white rounded"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.psychologytoday.com/us/blog/click-here-happiness/201801/how-be-happy-23-ways-be-happier" 
                             target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/pGZCUO5.png" 
                                alt="....." 
                                className="card border border-white rounded "/>
                            </a>
                        </div>
                      </div>

                      <div className="col xl4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://gretchenrubin.com/books/the-four-tendencies/intro/" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/R8jdHzx.png" 
                                alt="....." 
                                className="card border border-white rounded "/>
                            </a>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                    <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/74BUnzo.png" 
                            alt="....." 
                            className="card border border-white rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed?v=78nsxRxbf4w"  
                            className="card-img-top rounded"/>
                        </div>
                      </div>

                      {/* <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/DBKJaXH.png" 
                            alt="....." 
                            className="card-img-top rounded"/>
                        </div>
                      </div> */}

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://greatergood.berkeley.edu/podcasts/series/the_science_of_happiness" 
                             target="_blank"
                             rel="noopener noreferrer">
                                <img src="https://i.imgur.com/nfbhiQh.png" 
                                alt="....." 
                                className="card border border-white rounded"/>
                            </a>
                        </div>
                      </div>
                    </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed?v=_R6R62qUgIs"  
                            className="card-img-top rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/1ilCaZh.png" 
                            alt="....." 
                            className="card-img-top rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed?v=pIhUUs28dj0"  
                            className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/XO8xPfz.png" 
                            alt="......." 
                            className="card-img-top rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed?v=FiPoBO6mQ2o"  
                            className="card-img-top rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/aNEMuAp.png" 
                            alt="......." 
                            className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed?v=kj-sfwmw9KM" 
                            className="card-img-top rounded"/>
                        </div>
                      </div>
        
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.whyislam.org/spiritual-journeys/happiness/" 
                             target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/x1NTioL.png" 
                            alt="....." 
                            className="card border border-white rounded"/>
                        </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <Iframe url="https://www.youtube.com/embed?v=g3SO3Ej2G6E" 
                            className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                    <div className="card img-fluid border border-white rounded">
                    <a href="https://yaqeeninstitute.org/omar-edward-moad/the-technology-of-happiness/" 
                     target="_blank"
                     rel="noopener noreferrer">
                        <img src="https://i.imgur.com/Lx14WLo.png" 
                        alt="....." 
                        className="card border border-white rounded"/>
                        </a>
                    </div>
                    </div>

                    <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/8FA3ko9.png" 
                            alt="......" 
                            className="card-img-top rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                      <div className="card img-fluid border border-white rounded">
                            <a href="https://gretchenrubin.com/podcasts/" 
                            target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/IhoG7WQ.jpg" 
                            alt="....." 
                            className="card border border-white rounded"/>
                        </a>
                        </div>
                      </div>
                      
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/7YmLNQw.png" 
                            alt="...." 
                            className="card-img-top rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.abebooks.com/Happiness-New-Approach-Life-Want-Lyubomirsky/30700043475/bd?cm_mmc=ggl-_-US_Shopp_Trade-_-used-_-naa&gclid=EAIaIQobChMIrJmm76_g6gIVLR-tBh2MZgB1EAQYAiABEgJSSvD_BwE"
                             target="_blank" 
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/wcBpyhZ.png" 
                            alt="....." 
                            className="card border border-white rounded"/>
                        </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/8aI8q2o.png" 
                            alt="...." 
                            className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <a href="https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713" 
                             target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/Oltaumx.png" 
                            alt="....." 
                            className="card border border-white rounded"/>
                        </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/yNzyzK9.png" 
                            alt="....." 
                            className="card border border-white rounded"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 Big mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/cwsMZjo.png" 
                            alt="....." 
                            className="card border border-white rounded"/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Happy;