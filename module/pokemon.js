class Selector {
    constructor(name){
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.img = document.getElementById(`img-${name}`);

    }
}

class Pokemon extends Selector {
    constructor({name, hp, type,img, attacks=[], selector}){
        super(selector);
        this.name = name;
        this.hp = {
            current: hp,
            default: hp
        };
        this.attacks = attacks;
        this.img = img;
        this.type = type;
        this.renderHP();
       
    }

    changeHP = (count, callback) =>{
   
        this.hp.current -=count;
        // createT(log,$divLog)
        console.log(count)
        if(this.hp.current <= 0){
            // const $pLog = document.createElement('p');
            this.hp.current = 0;
            
            alert("Бедный "+ this.name + " проиграл"); 
     
        }
        this.renderHP();
        callback && callback(count);
    }

    renderHP = ()=>{
        
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderProgressbarHP = () =>{
        this.elProgressbar.style.width = this.hp.current + "%"
    
    }
      
    renderHPLife = ()=>{
        this.elHP.innerText = this.hp.current + "/" + this.hp.default;
    }
    
    
    
}

export default Pokemon;
