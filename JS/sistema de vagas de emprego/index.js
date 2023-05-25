const vagas = [];
const candidatos = [];

function addCandidato() {
    const candidato = {}
    candidato.nome = prompt('Qual o nome do candidato?')
    candidato.indiceDaVaga = prompt('Qual o indice da vaga?')

    const confirmacao = confirm(`
        Criar esse candidato?\n
        \nNome: ${candidato.nome}
        \nÍndice da vaga: ${candidato.indiceDaVaga}
    `)

    if (confirmacao) {
        candidatos.push(candidato)
        alert('Candidato adicionado com sucesso')
    } else {
        alert('Retornando ao menu')
    }
}


function criarVaga() {
   
    const vaga = {};
    vaga.nome = prompt('Qual o nome da vaga?')
    vaga.descricao = prompt('Digite uma descrição para a vaga:')
    vaga.dataLimite = prompt('Digite a data limite da vaga:')
    
    const confirmacao = confirm(`
        Criar essa vaga?\n
        \nNome: ${vaga.nome}
        \nDescrição: ${vaga.descricao}
        \nData limite: ${vaga.dataLimite}
    `)

    if (confirmacao) {
        vagas.push(vaga)
        alert('Vaga criada com sucesso')
    } else {
        alert('Retornando ao menu')
    }

}

function vagasDisponiveis() {
    if (vagas.length === 0) {
        alert('Nenhuma vaga disponível!')
    } else {
        for (let i = 0; i < vagas.length; i++) {
            alert(`
                Vaga ${i + 1}
                \nNome: ${vagas[i].nome}
                \nDescrição: ${vagas[i].descricao}
                \nData Limite: ${vagas[i].dataLimite}
            `)
        }
    }
}

function vizualizarVaga() {
    const indice = prompt('Qual o indice da vaga?')

    for (let i = 0; i < indice.length; i++) {
        
    }
}


function exibirMenu(){
    return prompt(`
    Sistema de Vagas de Emprego\n
    \n1. Lista de vagas disponíveis:
    \n2. Criar uma vaga:
    \n3. Visualizar uma vaga:
    \n4. Inscrever candidato em uma vaga:
    \n5. Excluir uma vaga:
    \n6. Sair
`)
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case '1':
                resultado = vagasDisponiveis()
                break;
            case '2':
                resultado = criarVaga()
                break;
            // case '3':
            //     resultado = 
            //     break;
            case '4':
                resultado = addCandidato()
                break;
            // case '5':
            //     resultado =
            //     break;
            case '6':
                alert('Saindo...')
                break;
            default:
                alert('Valor Inválido')
                break;
        }

        // if (resultado) {
        //     alert(`O resultado é ${resultado}`)
        // }

    } while (opcao !== '6')
}

executar()