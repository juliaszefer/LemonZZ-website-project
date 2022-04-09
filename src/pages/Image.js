import React from "react";
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

export default function Image({anwser}){

    if(anwser.image === "../pages/images/2cba33f9707d75aa3b13294addec1446-removebg-preview.png"){
        return <img style={{
            height: 170+"px"
        }} src={shrimps} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/64918b8fc323f80670348cdbb2978a75-removebg-preview.png"){
        return <img style={{
            height: 170+"px"
        }} src={spinach} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/0f009d390977cd951029883896165010-removebg-preview.png"){
        return <img style={{
            height: 150+"px"
        }} src={tofu} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/3cde07246dc3352989bc335cc26449be-removebg-preview.png"){
        return <img style={{
            height: 200+"px",
            margin: "0 20px 60px 0"
        }} src={salmon} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/082ee3579670df0c5abf2ec464f899f4-removebg-preview.png"){
        return <img style={{
            height: 180+"px"
        }} src={risotto} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/db7fedca08dd4899a81156b06480f40c-removebg-preview.png"){
        return <img style={{
            height: 190+"px",
            margin: "0 10px 50px 0"
        }} src={chicken} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/841a0c4c8220a8f27bd681c04cabedfd-removebg-preview.png"){
        return <img style={{
            height: 160+"px"
        }} src={avocado} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/1492179abc5b7dd51533edbb3ba4df3a-removebg-preview.png"){
        return <img style={{
            height: 190+"px"
        }} src={pomegranate} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/0f8f1e484be40576153420d025ed819f-removebg-preview.png"){
        return <img style={{
            height: 290+"px",
            margin: "0 60px 135px 0"
        }} src={cucumber} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/a09e6ccbe1d0ae550f823214a87cc19e-removebg-preview.png"){
        return <img style={{
            height: 230+"px",
            margin: "0 12px 0 0"
        }} src={chocolate} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/0226bd1fdb9f06de0f8db1ca7b66c227-removebg-preview.png"){
        return <img style={{
            height: 200+"px",
            margin: "0 12px 0 0"
        }} src={matcha} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/f98dd68483c03288dcd9bc57807c1e99-removebg-preview.png"){
        return <img style={{
            height: 150+"px",
            margin: "0 13px 0 0"
        }} src={lemonTart} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/a3e9174435c9be7ed64ffff28f459abc-removebg-preview.png"){
        return <img style={{
            height: 300+"px",
            margin: "0 0 28px 0"
        }} src={dream} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/939d6db03b050a5f5e688f2fc7d1f43e-removebg-preview.png"){
        return <img style={{
            height: 190+"px",
            margin: "0 0 41px 0"
        }} src={iceberg} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/e5c2634170b7d8ab2be8d09cd14355c4-removebg-preview.png"){
        return <img style={{
            height: 220+"px",
            margin: "0 0 -10px 0"
        }} src={forest} alt={anwser.name}/>
    }else if(anwser.image === "../pages/images/bf85986f5ce198c63c10eeb16d7f58d7-removebg-preview.png"){
        return <img style={{
            height: 170+"px",
            margin: "0 -22px 49px 0"
        }} src={wonderland} alt={anwser.name}/>
    }
}