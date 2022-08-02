// viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/

let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let uf = document.querySelector('#estado')
let btnCep = document.querySelector('#btnBuscarCep');
let listaCep = document.querySelector('#listaCep');

rua.value = 'Domingos Jose'
cidade.value = 'Porot Alegue'
uf.value = 'RS'

btnCep.addEventListener('click', function(e) {
    e.preventDefault();

    let urlBase='https://viacep.com.br/ws/';
    let paramentros = uf.value + '/' + cidade.value + '/' + rua.valu + '/json/';
    let callback = '?callback=popularNaoSeiMeuCep';

    let script = document.createElement('script');
    script = urlbase + paramentros + callback;
    document.body.appendChild(script);
});

function popularNaoSeiMeuCep(resposta) {

    if(!Array.isArray(resposta)){ 
        alert ('O Retorno não é uma lista de CEPs');
        return;
    }

    resposta.forEach(function(i) {

        let li = document.createElement('li');
        let endereco = i.logradouro + '|'+ i.bairro+ ' | ' + i.localidade + ' | ' + i.uf + ' | ' + i.cep;
        li.innerHTML = i.logradouro;
        li.setAttribute('onclick', 'exibirCep('+i.cep.replace('-',' ')+')')
        listaCep.appendChild(li);
    });
}

function exibirCep(cep){
    alert(cep);
}