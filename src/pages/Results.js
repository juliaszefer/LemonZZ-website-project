import React, {useState} from "react";
import Show from "./Show";

export default function Results({list, copy}){

    if(list === true){
        return(
            <div className={"preferences"}>
                <p className={"basedOnYour"}>BASED ON YOUR ANSWERS WE WOULD SUGGEST…</p>
                <ul>
                    {copy.map(anwser => <Show anwser={anwser}/>)}
                </ul>
            </div>
        )
    }
}