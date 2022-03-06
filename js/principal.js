var pacientes = document.querySelectorAll(".paciente");
var botaoAdicionar = document.querySelector("#adicionar-paciente");
var form = document.querySelector("#form-adiciona");

for (var i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var imc = pacientes[i].querySelector(".info-imc");


    if (alturaValida(altura) && pesoValido(peso)) {
        imc.textContent = calcularImc(peso, altura);
    } else {
        pacientes[i].classList.add("paciente-invalido");
    }

}

function calcularImc (peso, altura) {
    var imc = (peso / (altura * altura)).toFixed(2);
    return imc;
}

function obterInfoPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function adicionarTr(paciente) {

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = adicionarTd(paciente.nome, "info-nome");
    var pesoTd = adicionarTd(paciente.peso, "info-peso");
    var alturaTd = adicionarTd(paciente.altura, "info-altura");
    var gorduraTd = adicionarTd(paciente.gordura, "info-gordura");
    var imcTd = adicionarTd(paciente.imc, "info-imc");

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function adicionarTd (dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

botaoAdicionar.addEventListener("click", function (event){

    event.preventDefault();

    var paciente = obterInfoPaciente(form);
    var mensagem = document.querySelector("#mensagem");

    if(pacienteValido(paciente)) {
        adicionarPaciente(paciente);
        mensagem.textContent = "Paciente adicionado!";
        mensagem.classList.remove("mensagem-invalida");
        mensagem.classList.add("mensagem-valida");

    } else {
        mensagem.classList.remove("mensagem-valida");
        mensagem.classList.add("mensagem-invalida");
    }

    form.reset();

});

function adicionarPaciente (paciente) {
    adicionarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(adicionarTr(paciente));
}

function alturaValida (altura) {
    return !(altura <= 0 || altura >= 3.00);
}

function pesoValido (peso) {
    return !(peso <= 0 || peso >= 500) ;   
}

function pacienteValido (paciente) {
        if(!pesoValido(paciente.peso) && !alturaValida(paciente.altura)) {
            mensagem.textContent = "Peso e altura inválidos.";  
             return false;      
        } else if (!pesoValido(paciente.peso)) {
            mensagem.textContent = "Peso inválido.";   
            return false;
        } else if (!alturaValida(paciente.altura)) {
            mensagem.textContent = "Altura inválida.";   
            return false;
        } else {
            return true;
        }
}