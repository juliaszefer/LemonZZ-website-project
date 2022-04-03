import React from "react";
import lemonFruits
    from "./images/lemon-fruits-watercolor-set-hand-draw-illustration-drawn-isolated-white-background-129473390-removebg-preview.png";
import {Link} from "react-router-dom";

export default function More(){
    function scrollToAbout(){
        const divElement = document.getElementById('about');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToContact(){
        const divElement = document.getElementById('contact');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }


    return (
      <>
          <section className="home">
              <header>
                  <div className="logo">
                      <img src={lemonFruits} alt="logo"/>
                      <div className="h1lemonzz">
                          <h1>LemonZZ</h1>
                      </div>
                  </div>
                  <div className="buttons">
                      <Link to={"/"}><button>HOME</button></Link>
                      <Link to={"/"} onClick={scrollToAbout}><button>ABOUT US</button></Link>
                      <Link to={"/menu"}><button>MENU</button></Link>
                      <Link to={"/more"}><button>MORE</button></Link>
                      <Link to={"/"} onClick={scrollToContact}><button>CONTACT</button></Link>
                  </div>
              </header>
              <div className="MlargeLogo"/>
          </section>
          <footer>
              <p>
                  Copyright <i className="fa-regular fa-copyright"/> LemonZZ
              </p>
          </footer>
      </>
    );
}