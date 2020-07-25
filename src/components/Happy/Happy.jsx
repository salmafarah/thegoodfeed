import React, {Component} from 'react';
// import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';


class Meh extends Component {
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
              <div class="emoji selectedEmoji">
                <Link to="/meh" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/QQV4kCY.jpg" alt="mehEmoji" class="emojiImg" />
                  <p>Meh</p>
                </Link>
              </div>
            </div>

            <div className="container align-items-center mt-5">
              <div className="row">

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                <a href="https://www.goodreads.com/book/show/57538.It_s_All_in_Your_Head?ac=1&from_search=true&qid=K8qlukoVRY&rank=1"
                   target="_blank"
                   rel="noopener noreferrer">
                <img src="https://i.imgur.com/stMj7L8.jpg" 
                     alt="It's all in your head: think your way to happiness by Mark Levine and Stephen M Pollan" 
                     className="rounded card-img-top img-fluid"/>
                </a>
              </div>
              </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4"> 
              <div className="card border border-white rounded">
                  <img src="https://i.imgur.com/vK4WTTl.png" 
                       alt="Today you are you, that is truer than true. There is no one alive that is youer than you - Dr.Suess" 
                       className="rounded card-img-top img-fluid"/>
             </div>
             </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                  <a href="https://www.goodreads.com/book/show/6398634-the-happiness-project?ac=1&from_search=true&qid=xzqg6scRvC&rank=1"
                     target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://i.imgur.com/fg0kGEd.jpg" 
                       alt="The Happiness Project: Or Why I Spent a Year Trying to Sing in the Morning, Clean My Closets, Fight Right, Read Aristotle, and Generally Have More Fun by Gretchen Rubin" 
                       className="rounded card-img-top img-fluid"/>
                  </a>
              </div>
              </div>
                     
              </div>

              <div className="row">
              
            <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
            <div className="card border border-white rounded">
                <a href="https://www.whyislam.org/spiritual-journeys/happiness/"
                   target="_blank"
                   rel="noopener noreferrer">
                <img src="https://i.imgur.com/FuGR1lj.png" 
                     alt="Four Common Barriers to Happiness and their Islamic Solutions" 
                     className="rounded card-img-top img-fluid"/>
                </a>
            </div>
            </div>

            <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 ">
            <div className="card border border-white rounded">
               <img src="https://i.imgur.com/xMst2vY.png" 
                    alt="When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life." 
                    className="rounded card-img-top img-fluid"/>
            </div>
            </div>

            <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
            <div className="card border border-white rounded">
                <a href="https://yaqeeninstitute.org/omar-edward-moad/the-technology-of-happiness/" 
                   target="_blank"
                   rel="noopener noreferrer">
                <img src="https://i.imgur.com/Lx14WLo.png" 
                     alt="The Technology of Happiness - Yaqeen Institute" 
                     className="rounded card-img-top img-fluid"/>
               </a>
            </div>
            </div>
{/* 
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://psychcentral.com/blog/feeling-blah-this-might-be-why/" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/TqTDZV1.png" 
                            alt="Feeling Blah this might be why" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>*/}
            </div>


            <div className="row">
            
            <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
            <div className="card border border-white rounded">
               <a href="https://lewishowes.com/podcast/welcome-to-the-school-of-greatness/" 
                  target="_blank"
                  rel="noopener noreferrer">
                <img src="https://i.imgur.com/SzhtdKv.png" 
                     alt="The School of Greatness podcast" 
                     className="rounded card-img-top img-fluid"/>
                </a>
            </div>
            </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.islamicfinanceguru.com/podcast/" 
                               target="_blank"
                               rel="noopener noreferrer">
                                <img src="https://i.imgur.com/l62ZGK2.png" 
                                 alt="Millionaire Muslium" 
                                 className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                        </div>

                        <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.goodreads.com/book/show/17851885-i-am-malala?ac=1&from_search=true&qid=D7nGS6VChR&rank=1" 
                             target="_blank"
                               rel="noopener noreferrer">
                            <img src="https://i.imgur.com/BQqNNJV.jpg" 
                             alt="I am Malala" 
                             className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                    <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.al-islam.org/articles/death-beautiful-gift-believer" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/lOBXKBZ.png" 
                            alt="Death: A beautiful Gift for a beliver" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.goodreads.com/book/show/525197.In_The_Early_Hours?ac=1&from_search=true&qid=tjzTkHObTs&rank=1" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/PPTSUdD.jpg" 
                                alt="Thriving at work" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.soundvision.com/article/11-sayings-of-the-prophet-to-inspire-optimism" 
                             target="_blank"
                             rel="noopener noreferrer">
                                <img src="https://i.imgur.com/Y22MUL4.png" 
                                alt="11 sayings of the prophet to inspire optimism" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                    </div>

                <div className="row">
                <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.goodreads.com/book/show/50158142-healing-politics?ac=1&from_search=true&qid=AI3ivNSxRC&rank=1"
                             target="_blank" 
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/6ykBwHm.jpg" 
                            alt="Healing Politics" 
                            className="rounded card-img-top img-fluid"/>
                        </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/45443399-everything-is-fucked?ac=1&from_search=true&qid=mUJ2p11vzB&rank=1" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/SEwMzbF.png" 
                            alt="Every thing is Fucked" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/44430409-prayers-of-the-pious?ac=1&from_search=true&qid=pNX92TQfkV&rank=1" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/vFTEHZS.png" 
                            alt="Payers of the Pious" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                  </div>

                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card  border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/20726946-laughing-all-the-way-to-the-mosque?ac=1&from_search=true&qid=4mPM6pIRBQ&rank=1" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/gZX6h9V.jpg" 
                                alt="Laughing All the Way to the Mosque" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/36589118-proud?ac=1&from_search=true&qid=jrRK5344MA&rank=2" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/vEEU9Lb.jpg" 
                                alt="Proud: My Fight for an Unlikely American Dream" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                            <img src="https://i.imgur.com/oPsAIEc.png" 
                            alt="Allah tests us with what we love" 
                            className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="hhttps://www.goodreads.com/book/show/25898620-threading-my-prayer-rug?ac=1&from_search=true&qid=PSlJshHPQ1&rank=2" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/8COfjy8.jpg" 
                                alt="Threading my prayer Rug" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
        
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                            <img src="https://i.imgur.com/ZGJY4h5.png" 
                            alt="There is no beauty better than Intellect" 
                            className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/432539.The_Sealed_Nectar_Biography_of_Prophet_Muhammad?ac=1&from_search=true&qid=hr8TKa5AQz&rank=1" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/YpN0Ip6.jpg" 
                                alt="The Sealed Nectar Biography of Prophet Muhammed " 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.goodreads.com/book/show/3788053-three-cups-of-tea?ac=1&from_search=true&qid=KJvMU5Ver0&rank=2" 
                             target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/kjhyW0B.jpg" 
                                alt="Three cups of tea by Sarah L.Thomson" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                      
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/51927994-this-is-what-america-looks-like?ac=1&from_search=true&qid=3JHjRtjz8U&rank=1" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/RxliAID.jpg" 
                            alt="THis is what America Looks like by Ilhan Omar" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                      <div className="card border border-white rounded">
                            <a href="https://www.goodreads.com/book/show/714314.The_Autobiography_of_Malcom_X?ac=1&from_search=true&qid=wuJkuf0l9O&rank=1" 
                            target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/CNlWjtd.jpg" 
                            alt="The autobiography of MalcolmX" 
                            className="rounded card-img-top img-fluid"/>
                        </a>
                        </div>
                      </div>
                  </div> 


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/51321388-we-are-not-here-to-be-bystanders?ac=1&from_search=true&qid=WY2HXdqbx4&rank=2" 
                         target="_blank"
                         rel="noopener noreferrer">
                            <img src="https://i.imgur.com/V8Izlik.jpg" 
                            alt="We are not here to be bystanders " 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/81240.The_Meaning_of_the_Holy_Qur_an?ac=1&from_search=true&qid=L6sTeaeaoS&rank=1" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/uO2zfgc.jpg" 
                            alt="The meaning of the Holy Quran" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                            <img src="https://i.imgur.com/X0xCgIT.png" 
                            alt="Falling down is an accident; standing down is a choice" 
                            className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.goodreads.com/book/show/43261127-tiny-habits?ac=1&from_search=true&qid=MnBBRe1WaE&rank=1" 
                             target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/7cFSX8Y.png" 
                            alt="Tiny habits: the small changes that change everything" 
                            className="rounded card-img-top img-fluid"/>
                        </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/35840054-relentless-optimism?ac=1&from_search=true&qid=skdAxWlGFP&rank=1" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/5wOYUtG.png" 
                            alt="Relentless optimism by Darrin Donnelly" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/pBQsOCD.png" 
                            alt="The early bird cathes the worm but the second mouse gets the cheese" 
                            className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Meh;