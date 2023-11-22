function temperaturaQuarto(){
    let temp = document.getElementById('temp-ac-quarto').value;

    document.getElementById("temperatura-quarto").innerHTML = temp;

    if(temp > 28){
        document.getElementById("temperatura-quarto").innerHTML = 28;
    }

    if(temp < 16){
        document.getElementById("temperatura-quarto").innerHTML = 16;
    }
}