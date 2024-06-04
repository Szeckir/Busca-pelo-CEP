const inputBusca = document.querySelector('#input-cep')
const btnBusca = document.querySelector('#btn-busca-cep')
const dadosBuscados = document.querySelector('.data-cep')
const btnLimpar = document.querySelector('#btn-clean-data')

function searchCep() {
    const cep = inputBusca.value;
    fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(data => {
        if(!data.ok){
            throw new Error('Erro na conexão com internet')
        }
        return data.json();
    })
    .then(data => {
        apareceNaTela(data)
    })
}

function apareceNaTela(dados) {
    inputBusca.value = ''
    dadosBuscados.innerHTML = ''
    btnLimpar.style.display = 'block'

    dadosBuscados.innerHTML += `
        <ul class="data-list">    
            <li><b>RUA: </b>${dados.logradouro}</li>
            <li><b>BAIRRO: </b>${dados.bairro}</li>
            <li><b>CIDADE: </b>${dados.localidade}</li>
            <li><b>ESTADO: </b>${dados.uf}</li>
            <li><b>DDD: </b>${dados.ddd}</li>
        </ul>
    `
}

function clearData() {
    dadosBuscados.innerHTML = ''
    btnLimpar.style.display = 'none'
}