class Selector {
    constructor(name){
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selector {
    constructor({name, HP, type, selector}){
        super(selector);
        this.name = name;
        this.HP={
            current: HP,
            default: HP
        };

        this.type = type;
        this.renderHP();
       
    }

    changeHP = (count, callback) =>{
   
        this.HP.current -=count;
        // createT(log,$divLog)
        console.log(count)
        if(this.HP.current <= count){
            // const $pLog = document.createElement('p');
            this.HP.current = 0;
            
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
        this.elProgressbar.style.width = this.HP.current + "%"
    
    }
      
    renderHPLife = ()=>{
        this.elHP.innerText = this.HP.current + "/" + this.HP.default;
    }
    
    
    
}

export default Pokemon;
