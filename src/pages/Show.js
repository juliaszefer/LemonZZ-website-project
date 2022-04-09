import React from "react";
import Image from "./Image";

export default function Show({anwser}){
    if(anwser !== 0){
        return (
            <li key={anwser.id}>
                <div className={"oneOfYourChoices"}>
                    <div className={"anwserImage"}>
                        <Image anwser={anwser}/>
                    </div>
                    <div className={"allAboutAnwsers"}>
                        <p className={"anwserName"}>{anwser.name}</p>
                        <p className={"anwserAbout"}>{anwser.about}</p>
                    </div>
                </div>
            </li>
        )
    }
}