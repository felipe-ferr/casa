var cor = document.querySelector(":root");
var lampada = document.getElementById("bulb");

function vermelho(){
    cor.style.setProperty("--cor-lampada",'red');
    cor.style.setProperty("--cor-fundo-quarto",'#fcd6d6');
}
function verde(){
    cor.style.setProperty("--cor-lampada",'green');
    cor.style.setProperty("--cor-fundo-quarto",'#d6fcda');
}
function azul(){
    cor.style.setProperty("--cor-lampada",'royalblue');
    cor.style.setProperty("--cor-fundo-quarto",'#b5ffff');
}
function amarelo(){
    cor.style.setProperty("--cor-lampada",'gold');
    cor.style.setProperty("--cor-fundo-quarto",'#f3fad7');
}