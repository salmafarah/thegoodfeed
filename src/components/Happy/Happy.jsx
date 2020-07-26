import React, {Component} from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';


class Happy extends Component {
    render(){
        return(
          <div className="container">
            <div className="emojiNavBar">
              <div className="emoji">
                <Link to="/anxiety" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/cDXx3RL.jpg" alt="anxietyEmoji" className="emojiImg" />
                  <p>Anxious</p>
                </Link>
              </div>
              <div className="emoji selectedEmoji">
                <Link to="/happy" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/a19PgPn.jpg" alt="happyEmoji" className="emojiImg" />
                  <p>Happy</p>
                </Link>
              </div>
              <div className="emoji">
                <Link to="/angry" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/Wm7bH2r.jpg" alt="angryEmoji" className="emojiImg" />
                  <p>Angry</p>
                </Link>
              </div>
              <div className="emoji">
                <Link to="/sad" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/4bTQhis.jpg" alt="sadEmoji" className="emojiImg" />
                  <p>Sad</p>
                </Link>
              </div>
              <div className="emoji">
                <Link to="/fear" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/BQtaQJm.jpg" alt="fearEmoji" className="emojiImg" />
                  <p>Fear</p>
                </Link>
              </div>
              <div className="emoji">
                <Link to="/meh" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/QQV4kCY.jpg" alt="mehEmoji" className="emojiImg" />
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
                <img src="https://i.imgur.com/eDIzhsj.png" 
                     alt="The Technology of Happiness - Yaqeen Institute" 
                     className="rounded card-img-top img-fluid"/>
               </a>
            </div>
            </div>

            </div>


            <div className="row">
            
            <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
            <div className="card border border-white rounded">
               <a href="https://gretchenrubin.com/books/better-than-before/about-the-book/" 
                  target="_blank"
                  rel="noopener noreferrer">
                <img src="https://i.imgur.com/LO8IKvt.jpg" 
                     alt="Better Than Before by Gretchen Rubin" 
                     className="rounded card-img-top img-fluid"/>
                </a>
            </div>
            </div>

            <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
            <div className="card border border-white rounded">
              <a href="https://www.psychologytoday.com/us/blog/click-here-happiness/201801/how-be-happy-23-ways-be-happier" 
                 target="_blank"
                 rel="noopener noreferrer">
              <img src="https://i.imgur.com/pGZCUO5.png" 
                   alt="How to Be Happy: 23 Ways to Be Happier" 
                   className="rounded card-img-top img-fluid"/>
              </a>
            </div>
            </div>

            <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
            <div className="card border border-white rounded">
                <a href="https://gretchenrubin.com/books/the-four-tendencies/intro/" 
                   target="_blank"
                   rel="noopener noreferrer">
                <img src="https://i.imgur.com/FQE1o51.jpg" 
                     alt="The Four Tendencies by Gretchen Rubin" 
                     className="rounded card-img-top img-fluid"/>
                </a>
            </div>
            </div>

            </div>


            <div className="row">
     
             <div className="col-12  col-sm-12 col-mb-4 col-lg-4  mb-4">
             <div className="card border border-white rounded">
                <Iframe url="https://www.youtube.com/embed/_R6R62qUgIs" 
                       className="rounded card-img-top img-fluid"/>
             </div>
             </div>

             <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
             <div className="card border border-white rounded">
               <img src="https://i.imgur.com/wJCUAvd.png" 
                    alt="Today is the perfect day to be happy" 
                    className="rounded card-img-top img-fluid"/>
             </div>
             </div>

             <div className="col-12  col-sm-12 col-mb-4 col-lg-4  mb-4">
             <div className="card border border-white rounded">
                <Iframe url="https://www.youtube.com/embed/pIhUUs28dj0" 
                        className="rounded card-img-top img-fluid"/>
             </div>
             </div>
            </div>

             <div className="row">
             <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
             <div className="card border border-white rounded">
                <img src="https://i.imgur.com/Qq6DtHz.png" 
                     alt="Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around." 
                     className="rounded card-img-top img-fluid"/>
              </div>
              </div>

              <div className="col-12  col-sm-12 col-mb-4 col-lg-4  mb-4">
              <div className="card border border-white rounded">
                  <Iframe url="https://www.youtube.com/embed/GXy__kBVq1M" 
                          className="rounded card-img-top img-fluid"/>
              </div>
              </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                 <img src="https://i.imgur.com/SNPvEiB.png" 
                      alt="Dua for today: Ya Allah, bless us with good health and prosperity. Bless us with happiness and contentment. Keep us steadfast, with sabr and shukr." 
                      className="rounded card-img-top img-fluid"/>
              </div>
              </div>
              </div>

              <div className="row">
              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card  border border-white rounded">
                <Iframe url="https://www.youtube.com/embed/g3SO3Ej2G6E" 
                        className="rounded card-img-top img-fluid"/>
              </div>
              </div>
                        
              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                  <a href="https://www.goodreads.com/book/show/43822448-chicken-soup-for-the-soul?ac=1&from_search=true&qid=e9CMxuPt1H&rank=1" 
                     target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://i.imgur.com/4GVQSqX.png" 
                       alt="Chicken Soup for the Soul: Think Positive, Live Happy: 101 Stories about Creating Your Best Life" 
                       className="rounded card-img-top img-fluid"/>
                  </a>
              </div>
              </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card  border border-white rounded">
                <Iframe url="https://www.youtube.com/embed/q42CHm2-tYw" 
                        className="rounded card-img-top img-fluid"/>
              </div>
              </div>
              </div>

              <div className="row">
              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                 <img src="https://i.imgur.com/Ud2txvh.jpg" 
                      alt="If you want other to be happy, practise compassion. If you want to be happy, practise happy." 
                      className="rounded card-img-top img-fluid"/>
              </div>
              </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                  <a href="https://greatergood.berkeley.edu/podcasts/series/the_science_of_happiness" 
                     target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://i.imgur.com/nfbhiQh.png" 
                       alt="The Science of Happiness | Greater Good" 
                       className="rounded card-img-top img-fluid"/>
                  </a>
              </div>
              </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                  <img src="https://i.imgur.com/AA6GdK2.png" 
                       alt="If you want to be happy, be. - Leo Tolstoy" 
                       className="rounded card-img-top img-fluid"/>
              </div>
              </div>

              </div>

              <div className="row">
                 
              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                 <img src="https://i.imgur.com/NpgJpNn.png" 
                      alt="If you want other to be happy, practise compassion. If you want to be happy, practise happy." 
                      className="rounded card-img-top img-fluid"/>
              </div>
              </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                  <img src="https://i.imgur.com/7YmLNQw.png" 
                       alt="The secret to being happy is accepting where you are in life and making the most out of everyday" 
                       className="rounded card-img-top img-fluid"/>
              </div> 
              </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                  <a href="https://www.goodreads.com/book/show/2326098.The_How_of_Happiness?ac=1&from_search=true&qid=EAA3atyhgb&rank=1" 
                     target="_blank"
                     rel="noopener noreferrer">
                  <img src="https://i.imgur.com/iAqm8ku.jpg" 
                       alt="The How of Happiness: A Scientific Approach to Getting the Life You Want" 
                       className="rounded card-img-top img-fluid"/>
                  </a>
              </div>
              </div>
              </div> 

              <div className="row">
                 
              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                 <img src="https://i.imgur.com/aNEMuAp.png" 
                      alt="Happiness is the best makeup." 
                      className="rounded card-img-top img-fluid"/>
              </div>
              </div>

              <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
              <div className="card border border-white rounded">
                 <img src="https://i.imgur.com/DuJpjHP.png" 
                      alt="Do what makes you happy." 
                      className="rounded card-img-top img-fluid"/>
              </div>
              </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                          <a href="https://www.goodreads.com/book/show/22571656-the-happiness-equation" 
                             target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/A2uHFxd.png" 
                            alt="The Happiness Equation: Want Nothing + Do Anything = Have Everything by Neil Pasricha " 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.goodreads.com/book/show/15843166-you-are-a-badass" 
                             target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/87UAQhP.png" 
                            alt="You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life by Jen Sincero " 
                            className="rounded card-img-top img-fluid"/>
                        </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card img-fluid border border-white rounded">
                            <img src="https://i.imgur.com/Xl15xs5.png" 
                            alt="Always believe something wonderful is about to happen " 
                            className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://gretchenrubin.com/podcasts/" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/xbx95Oa.png" 
                            alt="Podcast: Happier by Gretchen Rubin" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                  </div>
                </div>
              </div>
        );
    }
}

export default Happy;