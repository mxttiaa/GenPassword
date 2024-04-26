const screen = document.getElementById("screen");

const nCaratteri = document.getElementById("nCaratteri");
const minuscoli = document.getElementById("minuscoli");
const maiuscoli = document.getElementById("maiuscoli");
const numeri = document.getElementById("numeri");
const speciali = document.getElementById("speciali");

const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const span4 = document.getElementById("span4");

const button = document.getElementById("button");


const divMin = document.getElementById("divMin");
divMin.addEventListener("click", ()=>{
    if (minuscoli.checked === false) {
        minuscoli.checked = true;
        span1.className = "segn"
    }else {
        minuscoli.checked = false;
        span1.classList.remove("segn");
    }
    genera();
})
const divMai = document.getElementById("divMai");
divMai.addEventListener("click", ()=>{
    if (maiuscoli.checked === false) {
        maiuscoli.checked = true;
        span2.className = "segn";
    }else {
        maiuscoli.checked = false;
        span2.classList.remove("segn");
    }
    genera();
})
const divNum = document.getElementById("divNum");
divNum.addEventListener("click", ()=>{
    if (numeri.checked === false) {
        numeri.checked = true;
        span3.className = "segn";

    }else {
        numeri.checked = false;
        span3.classList.remove("segn");
    }
    genera();
})
const divSpe = document.getElementById("divSpe");
divSpe.addEventListener("click", ()=>{
    if (speciali.checked === false) {
        speciali.checked = true;
        span4.className = "segn";
    }else {
        speciali.checked = false;
        span4.classList.remove("segn");
    }
    genera();
})
button.addEventListener("click", genera);
const listaa = "abcdefghijklmnopqrstuvwxyz";
const listaA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const listaN = "0123456789";
const listaS = "\\|!£$%&/()=?^+*°§[]{}#;,.:/'";
function genera(){
    if (nCaratteri.value>30){
        screen.innerHTML = "maximum 30 characters"
    }
    else if (nCaratteri.value<4){
        screen.innerHTML = "minimum 4 characters"
    }
    else{
        let firstString = "";
        let password = "";
        if (minuscoli.checked) firstString += listaa;
        if (maiuscoli.checked) firstString += listaA;
        if (numeri.checked) firstString += listaN;
        if (speciali.checked) firstString += listaS;

        for(let i = 0; i<nCaratteri.value; i++ ){
            password +=firstString.charAt(
                Math.floor(Math.random()* firstString.length)
            );
        }
        if (password == ""){
            screen.innerHTML = "no value selected";
        } else{
            screen.innerHTML = password; 
        }
        
    }
    

}
genera()

