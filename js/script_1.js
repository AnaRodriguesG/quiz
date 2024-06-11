document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
          event.preventDefault(); // Evita o comportamento padrão do formulário de ser enviado

          // Obtém os valores dos campos de entrada
          var usernameInput = document.getElementById("username");
          var EmailInput = document.getElementById("TipoEmail");
          var nascimentoInput = document.getElementById("nascimento");
          var celularInput = document.getElementById("celular");
          var passwordInput = document.getElementById("password");
          var username = usernameInput.value;
          var TipoEmail = EmailInput.value;
          var nascimento = nascimentoInput.value;
          var celular = celularInput.value;
          var password = passwordInput.value;
          

          // Exibe os dados no console do navegador
          console.log("Nome:", username);
          console.log("Email:", TipoEmail);
          console.log("Data de Nascimneto:", nascimento);
          console.log("Celular:",celular );
          console.log("Senha:", password );


          // Limpa os campos de entrada
          usernameInput.value = "";
          EmailInput.value = "";
          nascimentoInput.value = "";
          celularInput.value = "";
          passwordInput.value = "";



          window.location.href = "index.html";
      });
      
  }
});
