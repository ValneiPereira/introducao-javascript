var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var imcDalinha = tdImc.textContent;
    var pesoValido = true;
    var alturaValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso Invalido");
        pesoValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura Invalido!");
        alturaValido = false;
        tdImc.textContent = "Altura Invalida";
        paciente.style.backgroundColor = "lightcoral";
    }

    if (alturaValido && pesoValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


//titulo.addEventListener("click", mostraMensagem) //função nomeada

//Função anonima
/* titulo.addEventListener("click", function(){
    console.log("Olha so posso chamar uma função ananima.");
});

function mostraMensagem() {
    console.log("Ola eu fui clicado!");
} */








