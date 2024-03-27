let botaoEntrar = document.getElementById('btnEntrar')

botaoEntrar.addEventListener('click', function Entrar() {
    localStorage.setItem('apostaAberta', true);
    location.href = 'home.html'
})