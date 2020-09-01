import Pokemon from "./module/pokemon.js"
import countClick from "./module/countClick.js"
import random from "./module/utils.js"

function $getElId(id){
    return document.getElementById(id);
}
const $divLog = $getElId("log")

const $btn = $getElId("btn-kick");
const $randonBtn = $getElId("btn-kick-random");



const player1 = new Pokemon ({
    name:'Pikachy', 
    HP:100,
    type: 'electro',
    selector: 'character',
});

const player2 = new Pokemon ({
    name:'Charmander', 
    HP:100,
    type: 'fire',
    selector: 'enemy',
});
        
console.log(player1);
console.log(player2);   



let firstKik = countClick(5);
let secondKik = countClick(2);

$btn.addEventListener('click', ()=>{
    
    player1.changeHP(random(20), function(count){
        console.log(" The Enemy hit on:",count)
    });
    player2.changeHP(random(20),function(count){
        console.log("The Character hit on :",count)
    });
    
    firstKik(5,$btn);
});

$randonBtn.addEventListener('click', ()=>{

    player1.changeHP(random(50), function(count){
        console.log("The Enemy hit on super damage :",count)
    });
    player2.changeHP(random(50),function(count){
        console.log("The Character hit on super damage :",count)
    });

    secondKik(2,$randonBtn);    
});




// function createT(log,$parentEl){
//     const $pLog = document.createElement('p');
//     $pLog.innerText =log;
//     $parentEl.insertBefore($pLog, $parentEl.children[0]);
// }



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

