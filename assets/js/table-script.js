"use strict";


let inputName = document.querySelector(".name");
let inputSurname = document.querySelector(".surname");
let inputAge = document.querySelector(".age");

let message1 = document.querySelector(".errorname");
let message2 = document.querySelector(".errorsurname");
let message3 = document.querySelector(".errorage");
let exist = document.querySelector(".exist");

let submit = document.querySelector("button")
let table = document.querySelector("table tbody");

submit.addEventListener("click",function(){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    if(inputName.value.trim() == ""){
        message1.classList.remove("d-none");
        return
    }else{
        message1.classList.add("d-none");
    }


    if(inputSurname.value.trim() == ""){
        message2.classList.remove("d-none");
        return
    }else{
        message2.classList.add("d-none");
    }


    if(inputAge.value.trim() == ""){
        message3.classList.remove("d-none");
        return
    }else{
        message3.classList.add("d-none");
    }


    table.querySelectorAll("tr").forEach(element => {
        let datas = element.querySelectorAll("td");
        if (datas[0].innerText === inputName.value.trim() && datas[1].innerText === inputSurname.value.trim() && datas[2].innerText === inputAge.value.trim()) {
            exist.classList.remove("d-none");
            return;
        }
    });

    let nameTd = document.createElement("td");
    let surnameTd = document.createElement("td");
    let ageTd = document.createElement("td");
    
    nameTd.innerHTML = inputName.value;
    surnameTd.innerHTML = inputSurname.value;
    ageTd.innerHTML = inputAge.value;


    tr.append(nameTd);
    tr.append(surnameTd);
    tr.append(ageTd);

    table.appendChild(tr);

    inputName.value = " ";
    inputSurname.value = " ";
    inputAge.value = " ";
})




