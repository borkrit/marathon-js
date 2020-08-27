function $getElId(id){
    return document.getElementById(id);
}

const $divLog = $getElId("log")
const $btn = $getElId("btn-kick");
const $randonBtn = $getElId("btn-kick-random");

const character = {
    name: "Pikachu",
    HP:{
        default:100,
        current:100,
    },
    
    elHP:$getElId("health-character"),
    elProgressbar:$getElId("progressbar-character"),
    
    renderHPLife: renderHPLife,
    renderProgressbarHP:renderProgressbarHP,
    renderHP:renderHP,
    changeHP:changeHP,
}

const enemy = {
    name: "Charmander",
    HP:{
        default:100,
        current:100,
    },
    elHP:$getElId("health-enemy"),
    elProgressbar:$getElId("progressbar-enemy"),

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
    this.elHP.innerText = this.HP.current + "/" + this.HP.default;
}

function renderProgressbarHP(){
    this.elProgressbar.style.width = this.HP.current + "%"

}

function renderHP(){
    
    this.renderHPLife();
    this.renderProgressbarHP();
}

function changeHP (count){

    
    this.HP.current -=count;

    const log = this === enemy ? generateLog(this, character, count, this.HP.default, this.HP.current) : generateLog(this, enemy,count, this.HP.default, this.HP.current);
    
    createT(log)
    
    if(this.HP.current < count){
        const $pLog = document.createElement('p');
        this.HP.current = 0;
        $btn.disabled = true; 
        $randonBtn.disabled = true; 
        alert("Бедный "+ this.name + " проиграл"); 
 
    }
    
    this.renderHP();

}

function createT(log){
    const $pLog = document.createElement('p');
    $pLog.innerText =log;
    $divLog.insertBefore($pLog, $divLog.children[0]);
}

function random (num){
   return Math.ceil(Math.random()*num);
}

function generateLog(firstPerson,secondPerson,count,def,cur){
   

    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${-count} урона [${cur} / ${def}]`,
        `${firstPerson.name}поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${-count} урона [${cur} / ${def}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${-count} урона  [${cur} / ${def}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${-count} урона  [${cur} / ${def}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${-count} урона  [${cur} / ${def}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${-count} урона  [${cur} / ${def}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${-count} урона [${cur} / ${def}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника ${-count} урона  [${cur} / ${def}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${-count} урона [${cur} / ${def}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${-count} урона  [${cur} / ${def}]`
    ];
    
    return logs[random(logs.length-1)];
}

init();