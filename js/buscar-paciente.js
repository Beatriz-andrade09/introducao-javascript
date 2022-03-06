var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    var erro = document.querySelector("#erro-ajax");
    
    if (xhr.status == 200) {
      erro.classList.add("esconder");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function (paciente) {
        adicionarPaciente(paciente);
      });
    } else {
      erro.classList.remove("esconder");
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  });

  xhr.send();

});
