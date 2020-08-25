const $btn = document.getElementById("btn-kick");
const $randonBtn = document.getElementById("btn-kick-random");

const character = {
    name: "Pikachu",
    defaultHP: 100,
    damageHP:100,
    elHP:document.getElementById("health-character"),
    elProgressbar:document.getElementById("progressbar-character"),
    
    renderHPLife: renderHPLife,
    renderProgressbarHP:renderProgressbarHP,
    renderHP:renderHP,
    changeHP:changeHP,


}

const enemy = {
    name: "Charmander",
    defaultHP: 100,
    damageHP:100,
    elHP:document.getElementById("health-enemy"),
    elProgressbar:document.getElementById("progressbar-enemy"),

    renderHPLife: renderHPLife,
    renderProgressbarHP:renderProgressbarHP,
    renderHP:renderHP,
    changeHP:changeHP,
}

$btn.addEventListener('click', ()=>{
    
    enemy.changeHP(random(15));
    character.changeHP(random(15));

    $randonBtn.disabled = false;

});

$randonBtn.addEventListener('click', ()=>{
    

    enemy.changeHP(random(30));
    character.changeHP(random(30));
   
    console.log("wow luck shot");
    $randonBtn.disabled = true;
});

function init (){
    console.log("start game");    
}

function renderHPLife(){
    this.elHP.innerText = this.damageHP + "/" + this.defaultHP;
}

function renderProgressbarHP(){
    this.elProgressbar.style.width = this.damageHP + "%"

}

function renderHP(){
    
    this.renderHPLife();
    this.renderProgressbarHP();
}

function changeHP (count){

    if(this.damageHP < count){
        this.damageHP = 0;
        $btn.disabled = true; 
        $randonBtn.disabled = true; 
        alert("Бедный "+ this.name + " проиграл"); 
    }else{
        this.damageHP -=count;

    }
    
    this.renderHP();
}


function random (num){
   return Math.ceil(Math.random()*num);
}



init();