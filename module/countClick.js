
function $getElId(id){
    return document.getElementById(id);
}

const $countButton = $getElId("count-button");


function countClick(countCli , el){
    
     const innerText = el.innerText;
     el.innerText = `${innerText} (${countCli})`;
    return function(){  
        countCli--;
        if(countCli === 0){
            el.disabled = true;
        }
        el.innerText = `${innerText} (${countCli})`;
        return countCli;



        // if( countCli == 1){
        //      let finishCount = ( `Удары  ${btn.innerText}  закончились  ${countCli-1} из ${max}`);    
        //     btn.disabled = true;
        //     createT(finishCount,$countButton);
        // }else{
        //     countCli --;
        //      let clickCount = `Ударов  ${btn.innerText}  осталось  ${countCli} из  ${max} `;
        //     createT(clickCount,$countButton);
        // }
    }
}

function createT(log,$parentEl){
    const $pLog = document.createElement('p');
    $pLog.innerText =log;
    $parentEl.insertBefore($pLog, $parentEl.children[0]);
}

export  { countClick, $getElId }