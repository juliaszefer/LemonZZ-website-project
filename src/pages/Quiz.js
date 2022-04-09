import React, {useState} from "react";
import Results from "./Results";

export default function Quiz({data}){

    const [list, setList] = useState(false);
    const [color, setColor] = useState("#FED94B");
    const [color1, setColor1] = useState("#FED94B");
    const [color4, setColor4] = useState("#FED94B");
    const [color5, setColor5] = useState("#FED94B");
    const [color6, setColor6] = useState("#FED94B");
    const [color7, setColor7] = useState("#FED94B");
    const [endColor, setEndColor] = useState("#8DC56E");
    const [copy, setCopy] = useState([...data]);
    const [resultButton, setResultButton] = useState("RESULTS");


    const handleFood = () => {
        copy.forEach((dish, index) => {
            if(dish.category !== "food"){
                copy[index] = 0;
            }
        });
        setColor("#8DC56E");
    }
    const handleDrink = () => {
        copy.forEach((dish, index) => {
            console.log(dish);
            console.log(index);
            if(dish.category !== "drink"){
                console.log("index to remove:" + index);
                copy[index] = 0;
            }
        });
        console.log(copy);
        setColor1("#8DC56E");
    }
    const handleSweet = () => {
        copy.forEach((dish, index) => {
            if(dish.taste !== "sweet"){
                copy[index] = 0;
            }
        });
        setColor4("#8DC56E");
    }
    const handleSour = () => {
        copy.forEach((dish, index) => {
            if(dish.taste !== "sour"){
                copy[index] = 0;
            }
        });
        setColor5("#8DC56E");
    }
    const handleSalty = () => {
        copy.forEach((dish, index) => {
            if(dish.taste !== "salty"){
                copy[index] = 0;
            }
        });
        setColor6("#8DC56E");
    }
    const handleBitter = () => {
        copy.forEach((dish, index) => {
            if(dish.taste !== "bitter"){
                copy[index] = 0;
            }
        });
        setColor7("#8DC56E");
    }
    const tryAgain = () => {
        setCopy([...data]);
        console.log("copy");
        console.log(copy);
        setColor("#FED94B");
        setColor1("#FED94B");
        setColor4("#FED94B");
        setColor5("#FED94B");
        setColor6("#FED94B");
        setColor7("#FED94B");
    }
    const showResults = () => {
        if(list === false){
            setList(true);
            setResultButton("HIDE RESULTS");
        }else{
            setList(false);
            setResultButton("RESULTS");
        }
    }


    return (
        <>
            <p className={"takeALittle"}>TAKE A LITTLE <span>QUIZ</span> AND LET US HELP YOU DECIDE WHAT TO ORDER</p>
            <div className="quizView">
                <h1>You can only choose one from each question</h1>
                <p className={"whatDoYou"}>What do you prefer?</p>
                <div className="category">
                    <button style={{
                        background: color
                    }} onClick={handleFood}>FOOD</button>
                    <button style={{
                        background: color1
                    }} onClick={handleDrink}>DRINKS</button>
                </div>
                <p className={"otherQuestion"}>In which taste are you interested in?</p>
                <div className="taste">
                    <button style={{
                        background: color4
                    }} onClick={handleSweet}>SWEET</button>
                    <button style={{
                        background: color5
                    }} onClick={handleSour}>SOUR</button>
                    <button style={{
                        background: color6
                    }} onClick={handleSalty}>SALTY</button>
                    <button style={{
                        background: color7
                    }} onClick={handleBitter}>BITTER</button>
                </div>
                <div className="end">
                    <button style={{
                        background: endColor
                    }} className={"endResult"} onClick={showResults}>{resultButton}</button>
                </div>
                <div className="again">
                    <div className="blank"/>
                    <button onClick={tryAgain}>TRY AGAIN</button>
                </div>
            </div>
            <Results list={list} copy={copy}/>
        </>
    )
}