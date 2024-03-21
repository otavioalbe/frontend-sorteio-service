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

btnPremiacao.addEventListener("click", function(){
    let cpfUser = prompt("Digite seu cpf: ");
    fetch("http://localhost:8080/sorteio/premiacao",{
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        method: "POST",
        body: cpfUser
    }).then(function (res) { if(res.status == '200'){
        window.location.href = "premiacao.html";
    }
    else if(res.status == '404'){
        alert("Infelizmente não foi seu dia de sorte... Tente novamente na próxima!");
    }} )
    .catch(function (res) { console.log(res)} )
    
});

btnSair.addEventListener("click", function(){
    window.location.href = "home.html";
});