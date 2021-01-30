var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

var comecar = document.getElementById('comecar');

var cronometroSeg;

var minAtual;
var segundoAtual;

var interval;

for(var i = 0; i <=60;i++){
    minutos.innerHTML += '<option value="'+i+'"> '+i+'</option>';
}

for(var i = 1; i <=60;i++){
    segundos.innerHTML += '<option value="'+i+'"> '+i+'</option>';
}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" +segundoAtual;

    interval = setInterval(function() {

        segundoAtual--;
        if(segundoAtual <= 0) {
            if(minAtual > 0){
                minAtual --;
                segundoAtual = 59;
            }else{
                
                document.getElementById("sound").play();
                clearInterval(interval);
                
            }

        }
        display.childNodes[1].innerHTML = minutoAtual + ":" +segundoAtual;
    },1000)
})