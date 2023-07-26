function validarEmail() {
    var campoEmail = document.getElementById("email");
    var email = campoEmail.value;
  
    // Expressão regular para validar o formato de e-mail
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (regexEmail.test(email)) {
      alert("E-mail válido");
      window.location.href= "login.html"
    } else {
      alert("E-mail inválido");
    }
  }

  