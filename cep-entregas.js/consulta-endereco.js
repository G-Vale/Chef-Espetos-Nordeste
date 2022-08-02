let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let localidade = document.querySelector('#localidade');
let estado = document.querySelector('#estado');

cep.value = '01001000'

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https:viacep.com.br/ws/'+cep+'/json/?callback-popularform';
    document.body.appendChild(script)
});

function popularForm(resposta) {

    if('erro' in resposta){
        alert('CEP não encontrado');
        return;
    }

    console.log(resposta)
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.cidade;
    estado.value = resposta.uf;
}