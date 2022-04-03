// import logo from './logo.svg';
import '../scss/App.scss';
import {Link} from "react-router-dom";
import React, {useState} from "react";
import lemonFruits from "../pages/images/lemon-fruits-watercolor-set-hand-draw-illustration-drawn-isolated-white-background-129473390-removebg-preview.png"
import firstStory from "../pages/images/lemon-tree.png";
import secondStory from "../pages/images/sztuczny-kwiat-w-doniczce-lemon-tree-70cm-removebg-preview.png";
import thirdStory from "../pages/images/lemon_tree1-removebg-preview.png";
import contactBackground from "../pages/images/e9e6eaf5a85e23832a71a58be69b8a25_2-removebg-preview.png";
function Home() {
    function scrollToAbout(){
        const divElement = document.getElementById('about');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToContact(){
        const divElement = document.getElementById('contact');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollBack(){
        const divElement = document.getElementById('home');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }

const [opacity, setOpacity] = useState(0);

    const handleCheck = () => {
        if(opacity === 0){
            setOpacity(1);
        }else if(opacity === 1){
            setOpacity(0);
        }
    }

  return (
      <>
          <section id={"home"} className="home">
              <header>
                  <div className="logo">
                      <img src={lemonFruits} alt="logo"/>
                      <div className="h1lemonzz">
                          <h1>LemonZZ</h1>
                      </div>
                  </div>
                  <div className="buttons">
                      <Link to={"/"}><button>HOME</button></Link>
                      <button onClick={scrollToAbout}>ABOUT US</button>
                      <Link to={"/menu"}><button>MENU</button></Link>
                      <Link to={"/more"}><button>MORE</button></Link>
                      <button onClick={scrollToContact}>CONTACT</button>
                  </div>
              </header>
              <div className="largeLogo">
                  <div className="LemonLogo">
                      <div className="LogoCenter">
                          <h1>LemonZZ</h1>
                      </div>
                      <div className="LemonSlogan">
                          <p>When life gives you lemons, make lemonade</p>
                      </div>
                  </div>
              </div>
          </section>
          <section id={"about"} className="about_me">
              <div className="HtitleMenu" onClick={scrollBack}>
                  <div className="blank"/>
                  <div className="about">
                      <div className="pasek"/>
                      <p>ABOUT US</p>
                      <div className="pasek"/>
                  </div>
              </div>
              <div className="history">
                  <div className="story">
                      <div className="pakunek">
                          <div className="textStory">
                              <div className="titleStory">
                                  <p>
                                      It has all started with a small lemon tree…
                                  </p>
                              </div>
                              <div className="infoStory">
                                  <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor lorem lacus, in mattis ex condimentum et. Praesent nunc velit, sodales eu accumsan ac, rutrum sed leo. Praesent auctor elit vestibulum, egestas ipsum ac, fermentum enim.
                                  </p>
                              </div>
                              <div className="pasek2"/>
                          </div>
                      </div>
                      <div className="imgStory">
                          <div className="circleStory">
                              <img src={firstStory} alt={"small lemon tree"}/>
                          </div>
                      </div>
                  </div>
                  <div className="story">
                      <div className="imgStory">
                          <div className="circleStory2">
                              <img src={secondStory} alt={"small lemon tree"}/>
                          </div>
                      </div>
                      <div className="pakunek2">
                          <div className="textStory">
                              <div className="titleStory">
                                  <p>
                                      As it got bigger, we also grew bigger…
                                  </p>
                              </div>
                              <div className="infoStory2">
                                  <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor lorem lacus, in mattis ex condimentum et. Praesent nunc velit, sodales eu accumsan ac, rutrum sed leo. Praesent auctor elit vestibulum, egestas ipsum ac, fermentum enim.
                                  </p>
                              </div>
                              <div className="pasek2"/>
                          </div>
                      </div>
                  </div>
                  <div className="story">
                      <div className="pakunek">
                          <div className="textStory">
                              <div className="titleStory">
                                  <p>
                                      Out of nowhere it became a dream come true…
                                  </p>
                              </div>
                              <div className="infoStory">
                                  <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor lorem lacus, in mattis ex condimentum et. Praesent nunc velit, sodales eu accumsan ac, rutrum sed leo. Praesent auctor elit vestibulum, egestas ipsum ac, fermentum enim.
                                  </p>
                              </div>
                              <div className="pasek2"/>
                          </div>
                      </div>
                      <div className="imgStory">
                          <div className="circleStory3">
                              <img src={thirdStory} alt={"small lemon tree"}/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id={"contact"} className="contact">
              <div className="HtitleMenu2" onClick={scrollBack}>
                  <img src={contactBackground} alt={"Lemon tree photo"}/>
                  <div className="about">
                      <div className="pasek"/>
                      <p>CONTACT</p>
                      <div className="pasek"/>
                  </div>
                  <div className="blank"/>
              </div>
              <div className="contactForm">
                  <div className="boxForm">
                      <div className="questions">
                          <p>
                              If you have any questions, please complete the form below
                          </p>
                      </div>
                      <div className="questionsBox">
                          <div className="allQuestions">
                              <input type={"name"} placeholder={"Type your name…"} className={"firstInput"}/>
                              <input type={"email"} placeholder={"Type your e-mail…"} className={"firstInput"}/>
                              <input type={"text"} placeholder={"Type your message…"} className={"thirdInput"}/>
                              <div className="send">
                                  <div className="consent">

                                          <p className="consentText">
                                              <button onClick={handleCheck}>
                                                  <i style={{
                                                      opacity: opacity,
                                                  }} className="fa-solid fa-check"/>
                                              </button>
                                              I hereby give consent for my personal data included in my
                                              application to be processed for the purposes of the recruitment
                                              process under the European Parliament’s and Council of the
                                              European Union Regulation on the Protection of Natural Persons as
                                              of 27 April 2016, with regard to the processing of personal data
                                              and on the free movement of such data, and repealing Directive
                                              95/46/EC (Data Protection Directive)
                                          </p>
                                  </div>
                                  <div className="submitButton">
                                      <button>SEND</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <footer>
              <p>
                  Copyright <i className="fa-regular fa-copyright"/> LemonZZ
              </p>
          </footer>
      </>
  );
}

export default Home;
