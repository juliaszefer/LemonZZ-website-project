import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../scss/App.scss';
import lemonFruits
    from "../pages/images/lemon-fruits-watercolor-set-hand-draw-illustration-drawn-isolated-white-background-129473390-removebg-preview.png"
import starters from "../pages/images/Zrzut ekranu 2022-03-25 o 22.43.25.png"
import mainCourses from "../pages/images/Zrzut ekranu 2022-03-31 o 17.27.42.png"
import salads from "../pages/images/Zrzut ekranu 2022-03-31 o 17.28.50.png"
import desserts from "../pages/images/Zrzut ekranu 2022-03-31 o 17.29.19.png"
import drinks from "../pages/images/Zrzut ekranu 2022-03-31 o 17.29.50.png"
import shrimps from "../pages/images/2cba33f9707d75aa3b13294addec1446-removebg-preview.png"
import spinach from "../pages/images/64918b8fc323f80670348cdbb2978a75-removebg-preview.png"
import tofu from "../pages/images/0f009d390977cd951029883896165010-removebg-preview.png"
import salmon from "../pages/images/3cde07246dc3352989bc335cc26449be-removebg-preview.png"
import risotto from "../pages/images/082ee3579670df0c5abf2ec464f899f4-removebg-preview.png"
import chicken from "../pages/images/db7fedca08dd4899a81156b06480f40c-removebg-preview.png"
import avocado from "../pages/images/841a0c4c8220a8f27bd681c04cabedfd-removebg-preview.png"
import pomegranate from "../pages/images/1492179abc5b7dd51533edbb3ba4df3a-removebg-preview.png"
import cucumber from "../pages/images/0f8f1e484be40576153420d025ed819f-removebg-preview.png"
import chocolate from "../pages/images/a09e6ccbe1d0ae550f823214a87cc19e-removebg-preview.png"
import matcha from "../pages/images/0226bd1fdb9f06de0f8db1ca7b66c227-removebg-preview.png"
import lemonTart from "../pages/images/f98dd68483c03288dcd9bc57807c1e99-removebg-preview.png"
import dream from "../pages/images/a3e9174435c9be7ed64ffff28f459abc-removebg-preview.png"
import iceberg from "../pages/images/939d6db03b050a5f5e688f2fc7d1f43e-removebg-preview.png"
import forest from "../pages/images/e5c2634170b7d8ab2be8d09cd14355c4-removebg-preview.png"
import wonderland from "../pages/images/bf85986f5ce198c63c10eeb16d7f58d7-removebg-preview.png"
import Basket from "./Basket";

const API = "http://localhost:3000/menu";


export default function Menu() {

    function scrollToAbout() {
        const divElement = document.getElementById('about');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToContact() {
        const divElement = document.getElementById('contact');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToStarters() {
        const divElement = document.getElementById('starters');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToMain() {
        const divElement = document.getElementById('main');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToSalads() {
        const divElement = document.getElementById('salads');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToDesserts() {
        const divElement = document.getElementById('desserts');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToDrinks() {
        const divElement = document.getElementById('drinks');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollBack() {
        const divElement = document.getElementById('home');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    const [data, setData] = useState(null);
    const [opacity, setOpacity] = useState(0);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0);
    const [tab, setTab] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch((err) => {
                console.log("error");
                throw new Error(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) {
        return "Loading..."
    }


    const handleBasket = () => {
        if (opacity === 0) {
            setOpacity(1);
        } else if (opacity === 1) {
            setOpacity(0);
        }
    }
    const increment = (id) => {
        setCounter((prev) => prev + 1);
        id = 0;
        setTab(prev => [...prev, data[id]]);
    }
    const increment2 = (id) => {
        setCounter((prev) => prev + 1);
        id = 2;
        setTab(prev => [...prev, data[id]]);
    }
    const increment3 = (id) => {
        setCounter((prev) => prev + 1);
        id = 3;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment4 = (id) => {
        setCounter((prev) => prev + 1);
        id = 4;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment5 = (id) => {
        setCounter((prev) => prev + 1);
        id = 5;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment6 = (id) => {
        setCounter((prev) => prev + 1);
        id = 6;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment7 = (id) => {
        setCounter((prev) => prev + 1);
        id = 7;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment8 = (id) => {
        setCounter((prev) => prev + 1);
        id = 8;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment9 = (id) => {
        setCounter((prev) => prev + 1);
        id = 9;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment10 = (id) => {
        setCounter((prev) => prev + 1);
        id = 10;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment11 = (id) => {
        setCounter((prev) => prev + 1);
        id = 11;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment12 = (id) => {
        setCounter((prev) => prev + 1);
        id = 12;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment13 = (id) => {
        setCounter((prev) => prev + 1);
        id = 13;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment14 = (id) => {
        setCounter((prev) => prev + 1);
        id = 14;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment15 = (id) => {
        setCounter((prev) => prev + 1);
        id = 15;
        setTab((prev) => [...prev, data[id]]);
    }
    const increment1 = (id) => {
        setCounter((prev) => prev + 1);
        id = 1;
        setTab((prev) => [...prev, data[id]]);
    }

    console.log(tab);

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
                        <Link to={"/"}>
                            <button>HOME</button>
                        </Link>
                        <Link to={"/"} onClick={scrollToAbout}>
                            <button>ABOUT US</button>
                        </Link>
                        <Link to={"/menu"}>
                            <button>MENU</button>
                        </Link>
                        <Link to={"/more"}>
                            <button>MORE</button>
                        </Link>
                        <Link to={"/"} onClick={scrollToContact}>
                            <button>CONTACT</button>
                        </Link>
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
                            <i onClick={handleBasket} className="fa-solid fa-basket-shopping">
                                <div className="quantity">
                                    <p>{counter}</p>
                                </div>
                            </i>
                            <Basket tab={tab} opacity={opacity}/>
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
                                <div className="BigStarter">
                                    <img src={shrimps} alt={data[0].name}/>
                                </div>
                                <div className="BigStarterInfo">
                                    <div className="Shrimps">
                                        <p>{data[0].name}</p>
                                    </div>
                                    <div className="Lorem">
                                        <p>{data[0].about}</p>
                                    </div>
                                    <div className="price">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[0].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="smallerS">
                                <div className="starter1">
                                    <div className="SmallStarter">
                                        <img src={spinach} alt={data[1].name}/>
                                    </div>
                                    <div className="another">
                                        <div className="sTitle">
                                            <p>{data[1].name}</p>
                                        </div>
                                        <div className="sInfo">
                                            <p>{data[1].about}</p>
                                        </div>
                                        <div className="sPrice">
                                            <div className="priceExact">
                                                <div className="pusty"/>
                                                <p>{data[1].price}</p>
                                            </div>
                                            <div className="BigButton">
                                                <button onClick={increment1}>
                                                    <i className="fa-solid fa-plus"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="starter1">
                                    <div className="SmallStarter">
                                        <img id={"tofu"} src={tofu} alt={data[2].name}/>
                                    </div>
                                    <div className="another">
                                        <div className="sTitle">
                                            <p>{data[2].name}</p>
                                        </div>
                                        <div className="sInfo">
                                            <p>{data[2].about}</p>
                                        </div>
                                        <div className="sPrice">
                                            <div className="priceExact">
                                                <div className="pusty"/>
                                                <p>{data[2].price}</p>
                                            </div>
                                            <div className="BigButton">
                                                <button onClick={increment2}>
                                                    <i className="fa-solid fa-plus"/>
                                                </button>
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
                                    <img id={"salmon"} src={salmon} alt={data[3].name}/>
                                </div>
                                <div className="another">
                                    <div className="sTitle">
                                        <p>{data[3].name}</p>
                                    </div>
                                    <div className="sInfo">
                                        <p>{data[3].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[3].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment3}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="starter1">
                                <div className="SmallStarter">
                                    <img id={"risotto"} src={risotto} alt={data[4].name}/>
                                </div>
                                <div className="another">
                                    <div className="sTitle">
                                        <p>{data[4].name}</p>
                                    </div>
                                    <div className="sInfo">
                                        <p>{data[4].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[4].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment4}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="biggerS">
                            <div className="BigStarter">
                                <img id={"chicken"} src={chicken} alt={data[5].name}/>
                            </div>
                            <div className="BigStarterInfo">
                                <div className="Shrimps">
                                    <p>{data[5].name}</p>
                                </div>
                                <div className="Lorem">
                                    <p>{data[5].about}</p>
                                </div>
                                <div className="price">
                                    <div className="priceExact">
                                        <div className="pusty"/>
                                        <p>{data[5].price}</p>
                                    </div>
                                    <div className="BigButton">
                                        <button onClick={increment5}>
                                            <i className="fa-solid fa-plus"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={salads} id={"salads"} onClick={scrollBack} alt="salads"/>
                <div className="starters">
                    <div className="startersIn">
                        <div className="biggerS">
                            <div className="BigStarter">
                                <img id={"avocado"} src={avocado} alt={data[6].name}/>
                            </div>
                            <div className="BigStarterInfo">
                                <div className="Shrimps">
                                    <p>{data[6].name}</p>
                                </div>
                                <div className="Lorem">
                                    <p>{data[6].about}</p>
                                </div>
                                <div className="price">
                                    <div className="priceExact">
                                        <div className="pusty"/>
                                        <p>{data[6].price}</p>
                                    </div>
                                    <div className="BigButton">
                                        <button onClick={increment6}>
                                            <i className="fa-solid fa-plus"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="smallerS">
                            <div className="starter1">
                                <div className="SmallStarter">
                                    <img id={"pomegranate"} src={pomegranate} alt={data[7].name}/>
                                </div>
                                <div className="another">
                                    <div className="sTitle">
                                        <p>{data[7].name}</p>
                                    </div>
                                    <div className="sInfo">
                                        <p>{data[7].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[7].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment7}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="starter1">
                                <div className="SmallStarter">
                                    <img id={"cucumber"} src={cucumber} alt={data[8].name}/>
                                </div>
                                <div className="another">
                                    <div className="sTitle">
                                        <p>{data[8].name}</p>
                                    </div>
                                    <div className="sInfo">
                                        <p>{data[8].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[8].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment8}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
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
                                    <img id={"chocolate"} src={chocolate} alt={data[9].name}/>
                                </div>
                                <div className="another">
                                    <div className="sTitle">
                                        <p>{data[9].name}</p>
                                    </div>
                                    <div className="sInfo">
                                        <p>{data[9].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[9].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment9}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="starter1">
                                <div className="SmallStarter">
                                    <img id={"matcha"} src={matcha} alt={data[10].name}/>
                                </div>
                                <div className="another">
                                    <div className="sTitle">
                                        <p>{data[10].name}</p>
                                    </div>
                                    <div className="sInfo">
                                        <p>{data[10].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[10].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment10}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="biggerS">
                            <div className="BigStarter">
                                <img id={"lemonTart"} src={lemonTart} alt={data[11].name}/>
                            </div>
                            <div className="BigStarterInfo">
                                <div className="Shrimps">
                                    <p>{data[11].name}</p>
                                </div>
                                <div className="Lorem">
                                    <p>{data[11].about}</p>
                                </div>
                                <div className="price">
                                    <div className="priceExact">
                                        <div className="pusty"/>
                                        <p>{data[11].price}</p>
                                    </div>
                                    <div className="BigButton">
                                        <button onClick={increment11}>
                                            <i className="fa-solid fa-plus"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={drinks} id={"drinks"} onClick={scrollBack} alt="drinks"/>
                <div className="starters">
                    <div className="startersIn">
                        <div className="drinkBox1">
                            <div className="drink">
                                <div className="SmallDrink">
                                    <img id={"dream"} src={dream} alt={data[12].name}/>
                                </div>
                                <div className="Danother">
                                    <div className="sTitle">
                                        <p>{data[12].name}</p>
                                    </div>
                                    <div className="DInfo">
                                        <p>{data[12].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[12].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment12}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="drink">
                                <div className="SmallDrink">
                                    <img id={"iceberg"} src={iceberg} alt={data[13].name}/>
                                </div>
                                <div className="Danother">
                                    <div className="sTitle">
                                        <p>{data[13].name}</p>
                                    </div>
                                    <div className="DInfo">
                                        <p>{data[13].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[13].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment13}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="drinkBox1">
                            <div className="drink">
                                <div className="SmallDrink">
                                    <img id={"forest"} src={forest} alt={data[14].name}/>
                                </div>
                                <div className="Danother">
                                    <div className="sTitle">
                                        <p>{data[14].name}</p>
                                    </div>
                                    <div className="DInfo">
                                        <p>{data[14].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[14].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment14}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="drink">
                                <div className="SmallDrink">
                                    <img id={"wonderland"} src={wonderland} alt={data[15].name}/>
                                </div>
                                <div className="Danother">
                                    <div className="sTitle">
                                        <p>{data[15].name}</p>
                                    </div>
                                    <div className="DInfo">
                                        <p>{data[15].about}</p>
                                    </div>
                                    <div className="sPrice">
                                        <div className="priceExact">
                                            <div className="pusty"/>
                                            <p>{data[15].price}</p>
                                        </div>
                                        <div className="BigButton">
                                            <button onClick={increment15}>
                                                <i className="fa-solid fa-plus"/>
                                            </button>
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
                        <Link to={"/more"}>
                            <button>QUIZ</button>
                        </Link>
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