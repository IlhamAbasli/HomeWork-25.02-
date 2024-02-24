"use strict";

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const sliders = document.querySelectorAll(".slider");


let currentIndex = 0;

let currentSlide = document.querySelector(".active");


function nextElem(index) {
    sliders.forEach(element => {
        element.classList.remove("active");
        element.classList.remove("active1");
    });

    sliders[index].classList.add("active");
}



function prevElem(index) {
    sliders.forEach(element => {
        element.classList.remove("active");
        element.classList.remove("active1"); 
    });

    sliders[index].classList.add("active1");
}



next.addEventListener("click",function(){
    currentIndex = (currentIndex + 1) % sliders.length;
    console.log(currentIndex);
    nextElem(currentIndex);
})


prev.addEventListener("click",function(){
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    console.log(currentIndex);
    prevElem(currentIndex);
})




// const sliders =  document.querySelectorAll('.slider');

// const totalSlider = sliders.length;

// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");

// function updateSlider(index) {
//     sliders.forEach(x=>{
//         x.classList.remove('active');
//     });
//     sliders[index].classList.add('active');
// }

// next.addEventListener("click", function(){
//     let currentIndex = document.querySelector('.slider.active').getAttribute("data-id");
//     currentIndex = (parseInt(currentIndex) + 1) % sliders.length;
//     updateSlider(currentIndex);
// });

// prev.addEventListener("click", function(){
//     let currentIndex = document.querySelector('.slider.active').getAttribute("data-id");
//     currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
//     updateSlider(currentIndex);
// });
