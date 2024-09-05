document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do formulário de ser enviado

            // Obtém os valores dos campos de entrada
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Exibe os dados no console do navegador
            console.log("Usuário:", username);
            console.log("Senha:", password);

            EntrarCadastro(username, password);
        });
    }
});

async function EntrarCadastro(username, password) {
    try {
        const response = await fetch('http://localhost:5125/api/Autenticacao/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,  // Ajuste para o nome correto do campo se necessário
                senhaHash: password  // Ajuste para o nome correto do campo se necessário
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Login bem-sucedido:", data);
            window.location.href = "login.html";
        } else {
            console.error('Credenciais inválidas');
            alert('Credenciais inválidas');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login');
    }
}
