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
                            <a href="https://www.amazon.com/Dont-Know-What-Step-Step/dp/0143128515" 
                             target="_blank"
                               rel="noopener noreferrer">
                                <img src="https://i.imgur.com/ZDD8xfW.png" 
                                 alt="I don't ko wwhat I want but I kmow it's not this" 
                                 className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                                <img src="https://i.imgur.com/nkKN6mM.png" 
                                 alt="In the midst of chaos there is also opportunity" 
                                 className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                                <img src="https://i.imgur.com/xj7Hkgu.png" 
                                 alt="To the mind is the whole universe surrenders" 
                                 className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                     
                  </div>


                  <div className="row">
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.harpersbazaar.com/uk/beauty/mind-body/a27416416/mid-point-mental-health-why-are-we-all-feeling-so-flat/" 
                             target="_blank"
                               rel="noopener noreferrer">
                                <img src="https://i.imgur.com/rPKrxFH.png" 
                                alt="Mid-piont Mental Health: why are we all feeling so flat" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                        <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.amazon.com/Where-You-Not-Who-Youll/dp/1455532681" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/zzsaLfV.png" 
                            alt="..." 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                        </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://psychcentral.com/blog/feeling-blah-this-might-be-why/" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/TqTDZV1.png" 
                            alt="Feeling Blah this might be why" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://lewishowes.com/podcast/welcome-to-the-school-of-greatness/" 
                             target="_blank"
                               rel="noopener noreferrer">
                            <img src="https://i.imgur.com/0w6j6qp.jpg" 
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
                                <img src="https://i.imgur.com/13zoZ97.png" 
                                 alt="Millionaire Muslium" 
                                 className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                        </div>

                        <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713/ref=pd_sbs_14_1/147-3390570-7212226?_encoding=UTF8&pd_rd_i=0062457713&pd_rd_r=02323e38-6cce-4316-a082-9a14952f1ade&pd_rd_w=yYC74&pd_rd_wg=USIGm&pf_rd_p=bdc67ba8-ab69-42ee-b8d8-8f5336b36a83&pf_rd_r=R1B7QS8PVZ4JM1EE8PQZ&psc=1&refRID=R1B7QS8PVZ4JM1EE8PQZ" 
                             target="_blank"
                               rel="noopener noreferrer">
                            <img src="https://i.imgur.com/Oltaumx.png" 
                             alt="Subtle art of not giving a fuck" 
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
                            <a href="https://www.amazon.com/Thriving-At-Work-Didnt-School-ebook/dp/B0783QZ5T2" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/XS2A3Ad.png" 
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
                            <a href="https://www.amazon.com/Healing-Politics-Doctors-Political-Epidemic/dp/1419743023/ref=pd_sbs_14_3/132-4834624-9685322?_encoding=UTF8&pd_rd_i=1419743023&pd_rd_r=80fc9685-eed0-4427-9ee8-8d47f4825e42&pd_rd_w=LGSFw&pd_rd_wg=a3FY1&pf_rd_p=bdc67ba8-ab69-42ee-b8d8-8f5336b36a83&pf_rd_r=G7FMZQN674R8XB77C6QQ&psc=1&refRID=G7FMZQN674R8XB77C6QQ"
                             target="_blank" 
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/UdAFDbq.png" 
                            alt="Healing Politics" 
                            className="rounded card-img-top img-fluid"/>
                        </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.amazon.com/Untitled-Mark-Manson/dp/0062888439" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/GrpBKbq.png" 
                            alt="Every thing is Fucked" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.amazon.com/Prayers-Pious-Omar-Suleiman/dp/1847741290" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/zQx1eAY.png" 
                            alt="Payers of the Pious" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                  </div>

                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card  border border-white rounded">
                        <a href="https://www.amazon.com/Laughing-All-Way-Mosque-Misadventures/dp/0349005931" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/TU8r1Wp.png" 
                                alt="Laughing All the Way to the Mosque" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.amazon.com/Proud-Fight-Unlikely-American-Dream/dp/0316518964" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/CfdyMs2.png" 
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
                        <a href="https://www.amazon.com/Threading-My-Prayer-Rug-Pakistani/dp/1628728620/ref=pd_lpo_14_img_0/146-2166979-3798624?_encoding=UTF8&pd_rd_i=1628728620&pd_rd_r=4f0d5826-25f7-4891-8e61-ee5d843481b3&pd_rd_w=q7tR0&pd_rd_wg=lhiYr&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=44YJ2DXEW30CQH5YF5MF&psc=1&refRID=44YJ2DXEW30CQH5YF5MF" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/1Pzh5v9.png" 
                                alt="Threading my prayer Rug" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
        
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                            <img src="https://i.imgur.com/LUxaSqQ.png" 
                            alt="There isno beauty better than Intellect" 
                            className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.amazon.com/Muslim-Girl-Coming-Amani-Al-Khatahtbeh/dp/1501159518/ref=pd_lpo_14_img_1/146-2166979-3798624?_encoding=UTF8&pd_rd_i=1501159518&pd_rd_r=4f0d5826-25f7-4891-8e61-ee5d843481b3&pd_rd_w=q7tR0&pd_rd_wg=lhiYr&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=44YJ2DXEW30CQH5YF5MF&psc=1&refRID=44YJ2DXEW30CQH5YF5MF" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/M0wQr3f.png" 
                                alt="Muslium Girl" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.amazon.com/Chicken-Soup-Soul-Positive-Creating/dp/161159992X/ref=pd_lpo_14_img_0/134-9659737-3995727?_encoding=UTF8&pd_rd_i=161159992X&pd_rd_r=32545167-9a69-404d-b2dc-67b69dbfd7ff&pd_rd_w=vJMKP&pd_rd_wg=NXlPY&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=EYS7SS1BP11H4XF6368B&psc=1&refRID=EYS7SS1BP11H4XF6368B" 
                             target="_blank"
                            rel="noopener noreferrer">
                                <img src="https://i.imgur.com/tAybLn7.png" 
                                alt="Think positive live happy" 
                                className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>
                      
                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.amazon.com/This-What-America-Looks-Like/dp/0062954210/ref=pd_sbs_14_3/132-4834624-9685322?_encoding=UTF8&pd_rd_i=0062954210&pd_rd_r=35ac91b0-ab6a-4b98-badd-9ee7e7a333f4&pd_rd_w=mCvxR&pd_rd_wg=zBh1X&pf_rd_p=bdc67ba8-ab69-42ee-b8d8-8f5336b36a83&pf_rd_r=AYYPG2RKN5PCJAYBZQFR&psc=1&refRID=AYYPG2RKN5PCJAYBZQFR" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/9oomwwa.png" 
                            alt="Looks Like" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                      <div className="card border border-white rounded">
                            <a href="https://www.amazon.com/Becoming-Kareem-Growing-Off-Court/dp/031655538X" 
                            target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/SC7i0hV.png" 
                            alt="Becoming Kareem" 
                            className="rounded card-img-top img-fluid"/>
                        </a>
                        </div>
                      </div>
                  </div> 


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.amazon.com/Are-Not-Here-Bystanders-Resistance/dp/198210516X/ref=pd_sbs_14_4/132-4834624-9685322?_encoding=UTF8&pd_rd_i=198210516X&pd_rd_r=fb8396c9-c551-4828-8cb3-89f2c725a99d&pd_rd_w=Cce5f&pd_rd_wg=DUpsn&pf_rd_p=bdc67ba8-ab69-42ee-b8d8-8f5336b36a83&pf_rd_r=FJQWQQM3P3J6E7FSQJVX&psc=1&refRID=FJQWQQM3P3J6E7FSQJVX" 
                         target="_blank"
                         rel="noopener noreferrer">
                            <img src="https://i.imgur.com/sJjWbT4.png" 
                            alt="...." 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                        <a href="https://www.amazon.com/Letters-Young-Muslim-Omar-Ghobash/dp/1250119847/ref=pd_sbs_14_15?_encoding=UTF8&pd_rd_i=1250119847&pd_rd_r=7dc78583-0b13-4dc4-aed7-c39efe4d0009&pd_rd_w=lZlXW&pd_rd_wg=kRzhe&pf_rd_p=bdc67ba8-ab69-42ee-b8d8-8f5336b36a83&pf_rd_r=J5S6M0ADWRCM0HXC654N&psc=1&refRID=J5S6M0ADWRCM0HXC654N" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/p9iDU5p.png" 
                            alt="Letters to a young muslim" 
                            className="rounded card-img-top img-fluid"/>
                            </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4">
                        <div className="card border border-white rounded">
                            <img src="https://i.imgur.com/X0xCgIT.png" 
                            alt="Falling down is an accident; stzyign down is a choice" 
                            className="rounded card-img-top img-fluid"/>
                        </div>
                      </div>
                  </div>


                  <div className="row">
                  <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card border border-white rounded">
                            <a href="https://www.amazon.com/dp/B07492TJ79/ref=sspa_dk_detail_6?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR0NOQlgzQ0VaOTg0JmVuY3J5cHRlZElkPUEwNDUwODE0N01NWFIyMTBJRlpCJmVuY3J5cHRlZEFkSWQ9QTA2NzA0NDAyR04xTjhONUpDNloyJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" 
                             target="_blank"
                             rel="noopener noreferrer">
                            <img src="https://i.imgur.com/N5WcTgd.png" 
                            alt="....." 
                            className="rounded card-img-top img-fluid"/>
                        </a>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-mb-4 col-lg-4 col-xl-4 mb-4 Big">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.amazon.com/They-Cant-Kill-All-Baltimore-ebook/dp/B01CO4AUA4" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://i.imgur.com/VYBEEZ4.png" 
                            alt="Can't kill us all" 
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