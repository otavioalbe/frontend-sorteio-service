function listarApostas(){
    fetch('http://localhost:8080/sorteio/executar-sorteio')
    .then(response => response.text())
    .then(data => {
        var lista = document.querySelector('#resultadoSorteio')
        var objeto = document.createElement('li')
        objeto.innerHTML = data
        console.log(objeto);
        lista.appendChild(objeto);
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });
}
listarApostas()



btnSair.addEventListener("click", function(){
    window.location.href = "home.html";
});