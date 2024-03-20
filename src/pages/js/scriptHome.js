let botaoCadastro = document.getElementById('cadastrar')
let botaoListar = document.getElementById('listar')
let botaoFinalizar = document.getElementById('finalizar')
let botaoSair = document.getElementById('btnSair')

botaoCadastro.addEventListener('click', function goToCadastrar() {
    location.href = 'cadastro.html'
})

botaoListar.addEventListener('click', function goToListar() {
    location.href = 'listar.html'
})

botaoFinalizar.addEventListener('click', function goToFinalizar() {
    location.href = 'finalizar.html'
})

botaoSair.addEventListener('click', function goBack() {
    if(confirm('Deseja sair? As apostas serão redefinidas.')){
        fetch('http://localhost:8080/sorteio/reiniciar-aposta')
        .then(response => response.json())
        .then(apostas => {
            consoleg.log(apostas)
        }).catch(error => console.log(error))

        location.href = 'index.html'
    }else{
        location.href = 'home.html'
    }
    
})