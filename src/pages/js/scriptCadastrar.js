const formulario = document.querySelector("form");
const Icpf = document.getElementById("cpf");
const Inome = document.getElementById("nome");
const In1 = document.getElementById("n1");
const In2 = document.getElementById("n2");
const In3 = document.getElementById("n3");
const In4 = document.getElementById("n4");
const In5 = document.getElementById("n5");
const botao = document.getElementById("btnSair");
const botaoSupresinha = document.getElementById("supresinha");

function cadastrar(){
    
    let numeros = In1.value + "," + In2.value + "," + In3.value + "," + In4.value + "," + In5.value;

    fetch("http://localhost:8080/sorteio/apostar",{
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            cpf: Icpf.value,
            numerosAposta: numeros
        })
    }).then(function (res) { console.log(res)} )
    .catch(function (res) { console.log(res)} )
};

function limpar(){
    Icpf.value = "";
    Inome.value = "";
    In1.value = "";
    In2.value = "";
    In3.value = "";
    In4.value = "";
    In5.value = "";
};

function verificacaoCPF(){
    if(!isCpfOnlyNumbers()){
        return false;
    }
    if(Icpf.value.length != 11){
        alert("CPF inválido!");
        return false;
    }
    return true;
};

function isCpfOnlyNumbers(){
    if(isNaN(Icpf.value)){
        alert("Digite apenas números no CPF.");
        return false;
    }
    return true;
};

function verificacaoNumerosAposta(){
    if(In1.value < 1 || In1.value > 50 || In2.value < 1 || In2.value > 50 || 
        In3.value < 1 || In3.value > 50 || In4.value < 1 || In4.value > 50 || 
        In5.value < 1 || In5.value > 50){
        alert("Digite números entre 1 e 50.");
        limpaNumeros();
        return false;
    }
    return true;
};

function limpaNumeros(){
    In1.value = "";
    In2.value = "";
    In3.value = "";
    In4.value = "";
    In5.value = "";
}

function isNumerosDiferentes(){
    if(In1.value == In2.value || In1.value == In3.value || In1.value == In4.value || In1.value == In5.value ||
        In2.value == In3.value || In2.value == In4.value || In2.value == In5.value || In3.value == In4.value || 
        In3.value == In5.value || In4.value == In5.value){
        alert("Digite números diferentes.");
        limpaNumeros();
        return false;
    }
    return true;
};

function nomeIsNotNull(){
    if(Inome.value == ""){
        alert("Digite seu nome.");
        return false;
    }
    return true;
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(!verificacaoCPF()){
        return;
    }
    if(!verificacaoNumerosAposta()){
        return;
    }
    if(!isNumerosDiferentes()){
        return;
    }
    if(!nomeIsNotNull()){
        return;
    }
    cadastrar();
    limpar();
    alert("Aposta cadastrada com sucesso!");
    
});

btnSair.addEventListener("click", function(){
    window.location.href = "home.html";
});

surpresinha.addEventListener("click", function(){
    var numerosGerados = new Set(); 
    while (numerosGerados.size < 5) {
        var numero = Math.floor(Math.random() * 50 + 1);
        
        if (!numerosGerados.has(numero)) {
            numerosGerados.add(numero);
        }
    }
    var numeros = Array.from(numerosGerados); 
    In1.value = numeros[0];
    In2.value = numeros[1];
    In3.value = numeros[2];
    In4.value = numeros[3];
    In5.value = numeros[4];
});