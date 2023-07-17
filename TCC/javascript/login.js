function voltar() {
    window.history.back();
  }

function validarFormulario(event) {
    event.preventDefault();
  
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
  
    if (usuario === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      // Aqui você pode adicionar a lógica adicional para validar o usuário e a senha.
      // Por exemplo, fazer uma solicitação para um servidor, comparar com valores predefinidos, etc.
      //alert("Formulário válido. Usuário: " + usuario + ", Senha: " + senha);
  
      // Redirecionar para a próxima página após a validação bem-sucedida
      window.location.href = "/pages/menu.html";
    }
}
  
  