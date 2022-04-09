import React from "react";
import basketT from "./images/Zrzut ekranu 2022-04-3 o 20.51.28.png";
import Images2 from "./Images2";


export default function Basket({tab, opacity}) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += parseFloat(tab[i].price);
    }


    if (opacity === 1) {
        return (
            <div className="basketView">
                <div className="basketStripe">
                    <img src={basketT} alt={"BASKET"}/>
                </div>
                <div className={"basketElements"}>
                    <ul>
                        {tab.map(id => <li key={id.id}>
                            <div className={"basketOrder"}>
                                <div className={"images2"}>
                                    <Images2 anwser={id}/>
                                </div>
                                <p className={"basketName"}>{id.name}</p>
                            </div>
                            <p className={"basketPrice"}>{id.price}</p>
                        </li>)}
                    </ul>
                </div>
                <div className="longLine"/>
                <div className="basketAll">
                    <p>Total:</p>
                    <p>{sum.toFixed(2)}</p>
                </div>
                <div className="checkoutButton">
                    <button>CHECKOUT</button>
                </div>
            </div>
        )
    }
}