const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl=document.getElementById("generate-btn")
let password1=document.getElementById("password1-btn")
let password2=document.getElementById("password2-btn")
let array1=[]
let array2=[]
let repeat=0

generateEl.addEventListener("click", function random(){
    if(repeat===0){
    for(let i=0;i<15;i++){
        array1[i]=characters[(Math.floor(Math.random()*characters.length))]
        array2[i]=characters[(Math.floor(Math.random()*characters.length))]
    }
    
    for(let j=0;j<array1.length;j++){
        password1.textContent +=array1[j]
        password2.textContent +=array2[j]
    }
    }
    repeat++
})




