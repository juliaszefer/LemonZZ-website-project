import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../scss/App.scss';
import lemonFruits from "../pages/images/lemon-fruits-watercolor-set-hand-draw-illustration-drawn-isolated-white-background-129473390-removebg-preview.png"
import starters from "../pages/images/Zrzut ekranu 2022-03-25 o 22.43.25.png"
import mainCourses from "../pages/images/Zrzut ekranu 2022-03-31 o 17.27.42.png"
import salads from "../pages/images/Zrzut ekranu 2022-03-31 o 17.28.50.png"
import desserts from "../pages/images/Zrzut ekranu 2022-03-31 o 17.29.19.png"
import drinks from "../pages/images/Zrzut ekranu 2022-03-31 o 17.29.50.png"

const API = "http://localhost:3000/menu";


export default function Menu(){

    function scrollToAbout(){
        const divElement = document.getElementById('about');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToContact(){
        const divElement = document.getElementById('contact');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToStarters(){
        const divElement = document.getElementById('starters');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToMain(){
        const divElement = document.getElementById('main');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToSalads(){
        const divElement = document.getElementById('salads');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToDesserts(){
        const divElement = document.getElementById('desserts');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollToDrinks(){
        const divElement = document.getElementById('drinks');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }
    function scrollBack(){
        const divElement = document.getElementById('home');
        divElement.scrollIntoView({ behavior: 'smooth' });
    }

const [menu, setMenu] = useState(false);
const [basket, setBasket] = useState(false);
const [opacity, setOpacity] = useState(0);

const getMenu = () => {
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Oops...");
            })
            .then((data) => {
                setMenu(data);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }
    useEffect(getMenu, []);

// const handleBasket = () => {
//     if(basket) {
//         setBasket(false);
//     }else{
//         setBasket(true);
//     }
// }
    // if(basket){
    //     console.log(basket);
    //     setOpacity(1);
    // }


    return (
        <>
            <section id={"home"} className={"home"}>
                <header>
                    <div className="logo">
                        <img
                            src={lemonFruits}
                            alt="logo"/>
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
                <div className="MlargeLogo">
                    <div className="titleMenu">
                        <div className="blank"/>
                        <div className="menu">
                            <div className="pasek"/>
                            <p>MENU</p>
                            <div className="pasek"/>
                        </div>
                        <div className="basket">
                            <i className="fa-solid fa-basket-shopping"/>
                            {/*<div className="basketView" style={{*/}
                            {/*    opacity: {opacity},*/}
                            {/*    width: 375+"px",*/}
                            {/*    height: 584+"px",*/}
                            {/*    background: "red",*/}
                            {/*    position: "absolute"*/}
                            {/*}}>*/}

                            {/*</div>*/}
                        </div>
                    </div>
                    <div id={"przyciski"} className="przyciski">
                        <button onClick={scrollToStarters}>STARTERS</button>
                        <button onClick={scrollToMain}>MAIN COURSES</button>
                        <button onClick={scrollToSalads}>SALADS</button>
                        <button onClick={scrollToDesserts}>DESSERTS</button>
                        <button onClick={scrollToDrinks}>DRINKS</button>
                    </div>
                    <img src={starters} id={"starters"} onClick={scrollBack} alt="starters"/>
                    <div className="starters">
                        <div className="startersIn">
                            <div className="biggerS">
                                <div className="BigStarter"/>
                                <div className="BigStarterInfo">
                                    <div className="Shrimps">

                                    </div>
                                    <div className="Lorem">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="price">
                                        <div className="priceExact"/>
                                        <div className="BigButton"/>
                                    </div>
                                </div>
                            </div>
                            <div className="smallerS">
                                <div className="starter1">
                                    <div className="SmallStarter">

                                    </div>
                                    <div className="another">
                                        <div className="sTitle">

                                        </div>
                                        <div className="sInfo">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                                ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                                lorem lacus, in mattis ex condimentum et.</p>
                                        </div>
                                        <div className="sPrice">
                                            <div className="sPriceExact">

                                            </div>
                                            <div className="sButton">

                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                <div className="starter2">
                                    <div className="SmallStarter">

                                    </div>
                                    <div className="another">
                                        <div className="sTitle">

                                        </div>
                                        <div className="sInfo">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                                ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                                lorem lacus, in mattis ex condimentum et.</p>
                                        </div>
                                        <div className="sPrice">
                                            <div className="sPriceExact">

                                            </div>
                                            <div className="sButton">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Mmenu">
                <img src={mainCourses} id={"main"} onClick={scrollBack} alt="Main courses"/>
                <div className="starters">
                    <div className="startersIn">
                        <div className="smallerS">
                            <div className="starter1">
                                <div className="SmallStarter">

                                </div>
                                <div className="another">
                                    <div className="sTitle">

                                    </div>
                                    <div className="sInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="starter2">
                                <div className="SmallStarter">

                                </div>
                                <div className="another">
                                    <div className="sTitle">

                                    </div>
                                    <div className="sInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="biggerS">
                            <div className="BigStarterInfo">
                                <div className="Shrimps">

                                </div>
                                <div className="Lorem">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                        ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                        lorem lacus, in mattis ex condimentum et.</p>
                                </div>
                                <div className="price">
                                    <div className="priceExact"/>
                                    <div className="BigButton"/>
                                </div>
                            </div>
                            <div className="BigStarter"/>
                        </div>
                    </div>
                </div>
                <img src={salads} id={"salads"} onClick={scrollBack} alt="salads"/>
                <div className="starters">
                    <div className="startersIn">
                        <div className="biggerS">
                            <div className="BigStarter"/>
                            <div className="BigStarterInfo">
                                <div className="Shrimps">
                                    <img src="images/"/>
                                </div>
                                <div className="Lorem">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                        ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                        lorem lacus, in mattis ex condimentum et.</p>
                                </div>
                                <div className="price">
                                    <div className="priceExact"/>
                                    <div className="BigButton"/>
                                </div>
                            </div>
                        </div>
                        <div className="smallerS">
                            <div className="starter1">
                                <div className="SmallStarter">

                                </div>
                                <div className="another">
                                    <div className="sTitle">

                                    </div>
                                    <div className="sInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="starter2">
                                <div className="SmallStarter">

                                </div>
                                <div className="another">
                                    <div className="sTitle">

                                    </div>
                                    <div className="sInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={desserts} id={"desserts"} onClick={scrollBack} alt="desserts"/>
                <div className="starters">
                    <div className="startersIn">
                        <div className="smallerS">
                            <div className="starter1">
                                <div className="SmallStarter">

                                </div>
                                <div className="another">
                                    <div className="sTitle">

                                    </div>
                                    <div className="sInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="starter2">
                                <div className="SmallStarter">

                                </div>
                                <div className="another">
                                    <div className="sTitle">

                                    </div>
                                    <div className="sInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="biggerS">
                            <div className="BigStarterInfo">
                                <div className="Shrimps">

                                </div>
                                <div className="Lorem">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                        ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                        lorem lacus, in mattis ex condimentum et.</p>
                                </div>
                                <div className="price">
                                    <div className="priceExact"/>
                                    <div className="BigButton"/>
                                </div>
                            </div>
                            <div className="BigStarter"/>
                        </div>
                    </div>
                </div>
                <img src={drinks} id={"drinks"} onClick={scrollBack} alt="drinks"/>
                <div className="starters">
                    <div className="startersIn">
                        <div className="drinkBox1">
                            <div className="drink">
                                <div className="SmallDrink">

                                </div>
                                <div className="Danother">
                                    <div className="sTitle">

                                    </div>
                                    <div className="DInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="drink">
                                <div className="SmallDrink">

                                </div>
                                <div className="Danother">
                                    <div className="sTitle">

                                    </div>
                                    <div className="DInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="drinkBox1">
                            <div className="drink">
                                <div className="SmallDrink">

                                </div>
                                <div className="Danother">
                                    <div className="sTitle">

                                    </div>
                                    <div className="DInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="drink">
                                <div className="SmallDrink">

                                </div>
                                <div className="Danother">
                                    <div className="sTitle">

                                    </div>
                                    <div className="DInfo">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
                                            ligula in eros varius, tincidunt faucibus mi sodales. Suspendisse auctor
                                            lorem lacus, in mattis ex condimentum et.</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="sPriceExact">

                                        </div>
                                        <div className="sButton">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"moveToMore"}>
                <div className="moveToBox">
                    <div className="stillNotSure">
                        <p>
                            Still not sure what to choose?
                        </p>
                    </div>
                    <div className="clickThis">
                        <p>Click this button and take a little <span>QUIZ</span> that will help you decide!</p>
                    </div>
                    <div className="quizButton">
                        <Link to={"/more"}><button>QUIZ</button></Link>
                    </div>
                </div>
            </section>
            <footer>
                <p>
                    Copyright <i className="fa-regular fa-copyright"/> LemonZZ
                </p>
            </footer>
        </>
    )
}