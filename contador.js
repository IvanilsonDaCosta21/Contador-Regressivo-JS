
var dataFutura = new Date("November 11, 2021 10:00").getTime();

var dias, horas, minutos, segundos;
function setValores(e) {
    return document.getElementById(e);
    
}

// Executa uma funcao a cada 1segundo
setInterval(function(){
    var dataAtual = new Date().getTime();

    var segundosTotal = (dataFutura - dataAtual)/1000;


    dias = parseInt(segundosTotal/86400);
    segundosTotal = segundosTotal%86400;

    horas = parseInt(segundosTotal/3600);
    segundosTotal = segundosTotal%3600;

    minutos = parseInt(segundosTotal/60);

    segundos = parseInt(segundosTotal%60);

    setValores("dias").innerHTML = dias +" dias";
    setValores("horas").innerHTML = horas +" horas";
    setValores("minutos").innerHTML = minutos +" minutos";
    setValores("segundos").innerHTML = segundos +" segundos";

    

    console.log(segundos);

},1000);



