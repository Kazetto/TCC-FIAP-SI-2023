function toggleVisibilidadeSenha() {
    var campoSenha = document.getElementById("senha");
    var btnVisibilidade = document.getElementById("btnVisibilidade");
    var iconeVisibilidade = document.getElementById("iconeVisibilidade");

    if (campoSenha.type === "password") {
      campoSenha.type = "text";
      iconeVisibilidade.classList.remove("fa-eye");
      iconeVisibilidade.classList.add("fa-eye-slash");
    } else {
      campoSenha.type = "password";
      iconeVisibilidade.classList.remove("fa-eye-slash");
      iconeVisibilidade.classList.add("fa-eye");
    }
  }
  function validarEmail() {
    var campoEmail = document.getElementById("email");
    var confirmarEmail = document.getElementById("confirmarEmail");
  
    if (!campoEmail.checkValidity()) {
      campoEmail.classList.add("invalido");
    } else {
      campoEmail.classList.remove("invalido");
    }
  
    validarConfirmarEmail();
  }
  
  function validarConfirmarEmail() {
    var campoEmail = document.getElementById("email");
    var confirmarEmail = document.getElementById("confirmarEmail");
  
    if (campoEmail.value !== confirmarEmail.value) {
      confirmarEmail.classList.add("invalido");
    } else {
      confirmarEmail.classList.remove("invalido");
    }
  }
  