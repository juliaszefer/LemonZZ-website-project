import React, {useEffect, useState} from "react";
import lemonFruits
    from "./images/lemon-fruits-watercolor-set-hand-draw-illustration-drawn-isolated-white-background-129473390-removebg-preview.png";
import {Link} from "react-router-dom";
import Quiz from "./Quiz";

export default function More() {
    function scrollToAbout() {
        const divElement = document.getElementById('about');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToContact() {
        const divElement = document.getElementById('contact');
        divElement.scrollIntoView({behavior: 'smooth'});
    }

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const API = "http://localhost:3000/menu";

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

    let copy = [...data];

    return (
        <div className={"More"}>
            <section className="MoreHome">
                <header>
                    <div className="logo">
                        <img src={lemonFruits} alt="logo"/>
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
                <div className="MolargeLogo">
                    <div className="titleMore">
                        <div className="more">
                            <div className="pasek"/>
                            <p>MORE</p>
                            <div className="pasek"/>
                        </div>
                    </div>
                    <Quiz copy={copy} data={data}/>
                </div>
            </section>
            <footer>
                <p>
                    Copyright <i className="fa-regular fa-copyright"/> LemonZZ
                </p>
            </footer>
        </div>
    );
}