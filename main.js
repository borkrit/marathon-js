import Pokemon from "./module/pokemon.js"
import { countClick , $getElId } from "./module/countClick.js"
import random from "./module/utils.js"
import getFight from "./module/get.js"
// import { pokemons } from "./module/pokemons.js"


const $divLog = $getElId("log")

// const $btn = $getElId("btn-kick");
// const $randonBtn = $getElId("btn-kick-random");
const $control = document.querySelector('.control')
const $elImg = $getElId('img-player1');
const $namePerson = $getElId('name-player1');
const $elImg2 = $getElId('img-player2');
const $namePerson2 = $getElId('name-player2');

const resbut= $getElId('resbut');






// async function getFight(player) {
//     const pokem = await fetch('https://reactmarathon-api.netlify.app/api/fight?player1id=25&attackId=1&player2id=1');
//     const body = await pokem.json();
//     console.log(body.kick.player);
//     return body.kick.player;
    
// }
    
const get = new getFight();

class Game {

    // getPokemons = async() =>{
    //     const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
    //     const body = await response.json();
    //     return body;
    // }

    // getPlayerPok = async() => {
    //     const pokem = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
    //     const body = await pokem.json();
    //     return body;
    // }
   
   
    start = async() => { 

        // const pokemons = await get.getPokemons();

    //     function generatePerson(){
    //         return pokemons[random(0,pokemons.length-1)]
    //    } 
        const playerFirst = await get.getPlayerPok();
        const playerEnemy = await get.getPlayerPok();

        const f = await get.getFight();
        // const f = await getFight();
        // console.log();
        
        const player1 = new Pokemon ({
            ...playerFirst,
         
             selector: 'player1',
             
         });

         const player2 = new Pokemon ({
             ...playerEnemy,
             selector: 'player2',
         });

         player1.attacks.forEach(item =>{
 
            const $btnAttacs = document.createElement('button');
            $btnAttacs.classList.add('button');
            $btnAttacs.innerText = item.name;
             const $btnCount = countClick(item.maxCount,$btnAttacs )
            $btnAttacs.addEventListener('click', ()=>{
              
                player2.changeHP(f.player1, function(count){
                    // console.log("  hit on:",count)
                });
                player1.changeHP(f.player2, function(count){
                    // console.log("  hit on:",count)
                });
                $btnCount();
            })
            $control.appendChild($btnAttacs);
            $elImg.src=player1.img
            $namePerson.innerText = player1.name;
            
        })
        
        
        player2.attacks.forEach(item =>{
         
            // const $btnAttacs = document.createElement('button');
            // $btnAttacs.classList.add('button');
            // $btnAttacs.innerText = item.name;
            // const $btnCount = countClick(item.maxCount,$btnAttacs )
            // $btnAttacs.addEventListener('click', ()=>{
            //     // console.log(item.name +" "+ item.maxCount + "s"+ random(item.minDamage,item.maxDamage));
            //     player1.changeHP( get.getFight(), function(count){
            //         console.log(" The Enemy hit on:",count)
            //     });
            //     $btnCount();
            // })
            // $control.appendChild($btnAttacs);
            
            $elImg2.src=player2.img
            $namePerson2.innerText = player2.name;
            
        })

       
             
    }

}




// let firstKik = countClick(5);
// let secondKik = countClick(2);

// $btn.addEventListener('click', ()=>{
    
//     player1.changeHP(random(item.minDamage,item.maxDamage), function(count){
//         console.log(" The Enemy hit on:",count)
//     });
//     player2.changeHP(random(20),function(count){
//         console.log("The Character hit on :",count)
//     });
    
//     firstKik(5,$btn);
// });

// $randonBtn.addEventListener('click', ()=>{

//     player1.changeHP(random(50), function(count){
//         console.log("The Enemy hit on super damage :",count)
//     });
//     player2.changeHP(random(50),function(count){
//         console.log("The Character hit on super damage :",count)
//     });

//     secondKik(2,$randonBtn);    
// });





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


resbut.addEventListener('click', ()=>{
    location.reload();
}
);

const game = new Game();
game.start();


