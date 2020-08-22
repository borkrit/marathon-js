const $btn = document.getElementById("btn-kick");
const $randonBtn = document.getElementById("btn-kick-random");

const character = {
    name: "Pikachu",
    defaultHP: 100,
    damageHP:100,
    elHP:document.getElementById("health-character"),
    elProgressbar:document.getElementById("progressbar-character"),
}

const enemy = {
    name: "Charmander",
    defaultHP: 100,
    damageHP:100,
    elHP:document.getElementById("health-enemy"),
    elProgressbar:document.getElementById("progressbar-enemy"),
}

$btn.addEventListener('click', ()=>{
    changeHP(random(15), enemy);
    changeHP(random(15), character);
    luckyBtn();

});

function init (){
    console.log("start game");    
}

function renderHPLife(person){
    person.elHP.innerText = person.damageHP + "/" + person.defaultHP;
}

function renderProgressbarHP(person){
    person.elProgressbar.style.width = person.damageHP + "%"

}

function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}

function changeHP (count, person){

    if(person.damageHP < count){
        person.damageHP = 0;
        $btn.disabled = true; 
        $randonBtn.disabled = true; 
        alert("Бедный "+ person.name + " проиграл"); 
    }else{
        person.damageHP -=count;

    }
    renderHP(person);
}


function random (num){
   return Math.ceil(Math.random()*num);
}

function luckyBtn(){
    
    $randonBtn.disabled = false;

    $randonBtn.addEventListener('click', ()=>{
        changeHP(random(30), enemy);
        changeHP(random(30), character);
       
        console.log("wow luck shot");

        $randonBtn.disabled = true;
    });
    
}

init();