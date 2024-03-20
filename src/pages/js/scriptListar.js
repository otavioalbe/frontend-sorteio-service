const botao = document.getElementById("btnSair");

function listarApostas(){
    fetch('http://localhost:8080/sorteio/listar')
    .then(response => response.json())
    .then(apostas => {
        console.log(apostas)
        var lista = document.querySelector('#repos')
        apostas.map((aposta) => {
            var objeto = document.createElement('li')
            
            objeto.innerHTML = "ID da aposta: " + aposta.id + "<br>CPF: " + aposta.cpf +
             "<br>Nome: " + aposta.nome + "<br>Números apostados: " + aposta.numerosAposta + "<br><br>"
            console.log(objeto)

            lista.appendChild(objeto)
        })
}).catch(error => console.log(error))
}
listarApostas()

btnSair.addEventListener("click", function(){
    window.location.href = "home.html";
});