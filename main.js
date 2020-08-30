function $getElId(id){
    return document.getElementById(id);
}

const $divLog = $getElId("log")
const $countButton = $getElId("count-button")
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
let firstKik = countClick(5);
let secondKik = countClick(2);
$btn.addEventListener('click', ()=>{
    
    enemy.changeHP(random(15));
    character.changeHP(random(15));

    
    
    firstKik(5,$btn);
});

$randonBtn.addEventListener('click', ()=>{

    enemy.changeHP(random(50));
    character.changeHP(random(50));
   
    console.log(`wow luck shot  `);
    
    secondKik(2,$randonBtn);
   
    
});
function countClick(countCli){
    let count = countCli;
     
    return function(max = 0, btn){  
        
        if( count == 1){
             let finishCount = ( `Удары  ${btn.innerText}  закончились  ${count-1} из ${max}`);    
            btn.disabled = true;
            createT(finishCount,$countButton);
        }else{
            count -= 1;
             let clickCount = `Ударов  ${btn.innerText}  осталось  ${count} из  ${max} `;
            createT(clickCount,$countButton);
        }
    }
}

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

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy,count);
    
    createT(log,$divLog)
    
    if(this.HP.current < count){
        const $pLog = document.createElement('p');
        this.HP.current = 0;
        $btn.disabled = true; 
        $randonBtn.disabled = true; 
        alert("Бедный "+ this.name + " проиграл"); 
 
    }
    
    this.renderHP();

}

function createT(log,$parentEl){
    const $pLog = document.createElement('p');
    $pLog.innerText =log;
    $parentEl.insertBefore($pLog, $parentEl.children[0]);
}

function random (num){
   return Math.ceil(Math.random()*num);
}

function generateLog(firstPerson,secondPerson,count){
   const { HP:{default:def, current}, name } = firstPerson ;
   const { name:nameSecondPerson } = secondPerson

    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${nameSecondPerson}, не помня себя от испуга, ударил в предплечье врага. ${-count} урона [${current} / ${def}]`,
        `${name}поперхнулся, и за это ${nameSecondPerson} с испугу приложил прямой удар коленом в лоб врага. ${-count} урона [${current} / ${def}]`,
        `${name} забылся, но в это время наглый ${nameSecondPerson}, приняв волевое решение, неслышно подойдя сзади, ударил. ${-count} урона  [${current} / ${def}]`,
        `${name} пришел в себя, но неожиданно ${nameSecondPerson} случайно нанес мощнейший удар. ${-count} урона  [${current} / ${def}]`,
        `${name} поперхнулся, но в это время ${nameSecondPerson} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${-count} урона  [${current} / ${def}]`,
        `${name} удивился, а ${nameSecondPerson} пошатнувшись влепил подлый удар. ${-count} урона  [${current} / ${def}]`,
        `${name} высморкался, но неожиданно ${nameSecondPerson} провел дробящий удар. ${-count} урона [${current} / ${def}]`,
        `${name} пошатнулся, и внезапно наглый ${nameSecondPerson} беспричинно ударил в ногу противника ${-count} урона  [${current} / ${def}]`,
        `${name} расстроился, как вдруг, неожиданно ${nameSecondPerson} случайно влепил стопой в живот соперника. ${-count} урона [${current} / ${def}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${nameSecondPerson} со скуки, разбил бровь сопернику. ${-count} урона  [${current} / ${def}]`
    ];
    
    return logs[random(logs.length-1)];
}

init();