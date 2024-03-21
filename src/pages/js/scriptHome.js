let botaoCadastro = document.getElementById('cadastrar')
let botaoListar = document.getElementById('listar')
let botaoFinalizar = document.getElementById('finalizar')
let botaoSair = document.getElementById('btnSair')
var apostaAberta = localStorage.getItem('apostaAberta')


botaoCadastro.addEventListener('click', function goToCadastrar() {
    if(apostaAberta==='true'){
        location.href = 'cadastro.html'
    }else{
        alert('Apostas fechadas!')
    }
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

        localStorage.setItem('apostaAberta', true);
        location.href = 'index.html'
    }else{
        location.href = 'home.html'
    }
    
})