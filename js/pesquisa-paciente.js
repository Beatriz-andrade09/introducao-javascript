var pesquisa = document.querySelector("#pesquisa");

pesquisa.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {
            var tdNome = pacientes[i].querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            
            if(expressao.test(nome)) {
                pacientes[i].classList.remove("esconder");
            } else {
                pacientes[i].classList.add("esconder");
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++) {
            pacientes[i].classList.remove("esconder");
        }
    }
});