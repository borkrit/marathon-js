let firstString = prompt("Введите первую строку для сравнения");
let secondString = prompt("Введите вторую строку для сравнения");
let symbole = prompt("Введите букву по которой будет сравнения")


function getRow(str, str2, symbol ){
    
    let count = 0;
    let symbole = symbol;
    let countFirst;
    let countSecond;
    
    for (let i =0; i<str.length; i++){
      
        if(symbole == str.charAt(i)){
            count++ 
        }    
    }

    countFirst=count;    
    count=0;

    for (let i =0; i<str2.length; i++){
      
        if(symbole == str2.charAt(i)){
            count++  
        }  
    }
    countSecond =count;

    if(countFirst>countSecond){
        alert("В данной строке : '"+ str + "' больше буквы :" +symbol);
    }else if(countFirst<countSecond) {
        alert("В данной строке : '"+ str2 + "' больше буквы :" +symbol);
    }else{
        alert("Попробуйте еще раз")
    }


}

getRow(firstString,secondString, symbole);



