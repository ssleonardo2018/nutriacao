function validarLogin() {
      const usuario = document.getElementById('usuario').value;
      const senha = document.getElementById('senha').value;
      const mensagemErro = document.getElementById('mensagemErro');

      if (usuario === "teste" && senha === "123") {
        alert("Login bem-sucedido!");
        // Redirecionar ou realizar outra ação após login
        return true;
      } else {
        mensagemErro.textContent = "Usuário ou senha incorretos.";
        return false;
      }
    }