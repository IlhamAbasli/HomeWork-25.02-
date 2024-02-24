"use strict";

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");


setInterval(()=>{
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let hourRotation = 30 * hr + min / 2;
    let minRotation = min * 6 + (sec / 60) * 6; 
    let secRotation =  sec * 6;

    hour.style.rotate = `${hourRotation}deg`;
    minute.style.rotate = `${minRotation}deg`;
    second.style.rotate = `${secRotation}deg`;
},1000)