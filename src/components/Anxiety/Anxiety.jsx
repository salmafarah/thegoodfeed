import React, {Component} from 'react';
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
              <div className="row justify-content-centre mb-4">
                      <div className="col-sm-4 col-md-4">
                        <div className="card img-fluid border border-white rounded Big">
                        <a href="https://productivemuslim.com/3-powerful-tips-to-overcome-fear/" target="_blank" rel="noopener noreferrer">
                          <img src="https://imgur.com/xrVd1He.jpg" alt="..." className="card-img-top img-fluid rounded"/>
                        </a>
                        </div>
                      </div>
                      <div className=" col-sm-4 col-md-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed//KlUMrzwmbyo" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <div className="card img-fluid border border-white rounded">
                          <img src="https://imgur.com/Tp9bkYW.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                          <img src="https://imgur.com/ff8a15Q.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded Big">
                        <a href="https://www.psychologytoday.com/ca/blog/insight-therapy/201009/overcoming-fear-the-only-way-out-is-through" target="_blank" rel="noopener noreferrer">
                          <img src="https://imgur.com/5t4Amkv.jpg" alt="..." className="card-img-top rounded"/>
                        </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/t3TqLIM.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                    </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/I9NOmtBU-uw" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/mQ9Oecs.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/iwRxef6.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                          <img src="https://imgur.com/Y0ET91g.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded Big">
                        <a href="https://www.quranicconnection.tv/fear-in-islam/" target="_blank" rel="noopener noreferrer">
                          <img src="https://imgur.com/Q0zrhpe.jpg" alt="..." className="card-img-top rounded"/>
                        </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/lyn1DZYzBGs" className="card-img-top rounded"/>
                        </div>
                      </div>
                    </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded Big">
                        <a href="https://www.soundvision.com/article/10-tips-to-liberate-yourself-from-fear" target="_blank" rel="noopener noreferrer">
                          <img src="https://imgur.com/NIzHIN6.jpg" alt="..." className="card-img-top rounded"/>
                        </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/wiBFY73iAsI" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/ffXKVfUcQE8" className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/lgwGWlzFtfs" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded Big">
                        <a href="http://www.naseeb.com/journals/seeking-courage-from-allah-195091" target="_blank" rel="noopener noreferrer">
                          <img src="https://imgur.com/5mFa3Jv.jpg" alt="..." className="card-img-top rounded"/>
                        </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/TqKDWcb.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                  <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/Qb2Mjqb.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/11iMw3H.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/MEGFkfo.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                          <img src="https://imgur.com/Ci5pfBw.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded Big">
                        <a href="https://www.mentalhealth.org.uk/publications/overcome-fear-anxiety" target="_blank" rel="noopener noreferrer">
                          <img src="https://imgur.com/1Wke4D1.jpg" alt="..." className="card-img-top rounded"/>
                        </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/tbnzAVRZ9Xc" className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded Big">
                        <a href="https://hadithoftheday.com/coping-with-fear/" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/OSdOrXz.jpg" alt="..." className="card-img-top  rounded"/>
                        </a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/dww3Oo8ropA" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/6xhd5Bo.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://www.youtube.com/embed/PgQ3sW0BWfI" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/cvEQeGH.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/abOMisX.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Anxiety;