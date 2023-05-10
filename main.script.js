let numbers = document.querySelector("input[name=number]")
let color = document.querySelector("select[name=color]")
let type = document.querySelector("select[name=type]")
let place = document.querySelector("select[name=place]")
let btnAdd = document.querySelector("#btn-add")
let number = document.querySelector("#numberid")
let car = document.querySelector(".car")
let cars = document.querySelector(".cars")
let lvl1 = document.querySelector(".lvl-1")
let lvl2 = document.querySelector(".lvl-2")
let lvl3 = document.querySelector(".lvl-3")
let btnLvl1 = document.querySelector(".btnLvl1")
let btnLvl2 = document.querySelector(".btnLvl2")
let btnLvl3 = document.querySelector(".btnLvl3")
let carLvl1 = document.querySelector(".carsLvl1")
let carLvl2 = document.querySelector(".carsLvl2")
let carLvl3 = document.querySelector(".carsLvl3")

let lvl = 1;
btnLvl1.onclick = function (){
    btnLvl1.classList.add("isActive")
    btnLvl2.classList.remove("isActive")
    btnLvl3.classList.remove("isActive")
    lvl1.style.display = "block"
    lvl2.style.display = "none"
    lvl3.style.display = "none"
    lvl = 1;
}

btnLvl2.onclick = function (){
    btnLvl1.classList.remove("isActive")
    btnLvl2.classList.add("isActive")
    btnLvl3.classList.remove("isActive")
    lvl1.style.display = "none"
    lvl2.style.display = "block"
    lvl3.style.display = "none"
    lvl = 2
}

btnLvl3.onclick = function (){
    btnLvl1.classList.remove("isActive")
    btnLvl2.classList.remove("isActive")
    btnLvl3.classList.add("isActive")
    lvl1.style.display = "none"
    lvl2.style.display = "none"
    lvl3.style.display = "block"
    lvl = 3
}


btnAdd.onclick = function (){
    createCar(numbers.value, color.value, type.value, place.value);
}


function createCar(number, color, type, place){

let html = '<div class="car color-' + color + ' place-lvl' + lvl  + '-' + place + ' type-' + type + '">'
+ '<div class="front">'
+ '<div class="headlight-left"></div>'
+ '<div class="bumper"></div>'
+ '<div class="headlight-right"></div>'
+ '</div>'
+ '<div class="bonnet color-' + color + '">'
+ '</div>'
+ '<div class="roof color-' + color + '">'
+ '<div class="window"></div>'
+ '<p class="numberid">' + number + '</p>'
+ '</div>'
+ '<div class="boot color-' + color + '">'
+ '<div class="window"></div>'
+ '</div>'
+ '<div class="back">'
+ '<div class="rear-headlight-left"></div>'
+ '<div class="bumper"></div>'
+ '<div class="rear-headlight-right"></div>'
+ '</div>'
+ '</div>';


if (lvl == 1) {
    carLvl1.innerHTML += html;
  } else if (lvl == 2) {
    carLvl2.innerHTML += html;
  } else if (lvl == 3) {
    carLvl3.innerHTML += html;
  }
}
carLvl1.onclick = function(event){
    let element = event.target;
    let parentElement = element.parentElement;
    if(parentElement.classList.contains("car")){
        let approve = confirm("Вы действительно хотите удалить машину?");
        if(approve){
            parentElement.remove();
        }
    }
}

carLvl2.onclick = function(event){
    let element = event.target;
    let parentElement = element.parentElement;
    if(parentElement.classList.contains("car")){
        let approve = confirm("Вы действительно хотите удалить машину?");
        if(approve){
            parentElement.remove();
        }
    }
}

carLvl3.onclick = function(event){
    let element = event.target;
    let parentElement = element.parentElement;
    if(parentElement.classList.contains("car")){
        let approve = confirm("Вы действительно хотите удалить машину?");
        if(approve){
            parentElement.remove();
        }
    }
}
