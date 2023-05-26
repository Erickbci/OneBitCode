const vagas = [];

function addCandidato() {
    const candidato = prompt('Qual o nome do candidato?')
    const indice = prompt('Qual o indice da vaga?')
    const vaga = vagas[indice]

    const confirmacao = confirm(`
        Criar esse candidato?\n
        \nNome: ${candidato} Índice da vaga: ${indice}
        \nNome: ${vaga.nome}
        \nDescrição: ${vaga.descricao}
        \nData limite: ${vaga.dataLimite}
    `)

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert('Candidato adicionado com sucesso')
    } else {
        alert('Retornando ao menu')
    }
}


function criarVaga() {
    const nome = prompt('Qual o nome da vaga?')
    const descricao = prompt('Digite uma descrição para a vaga:')
    const dataLimite = prompt('Digite a data limite da vaga:')
    
    const confirmacao = confirm(`
        Criar essa vaga?\n
        \nNome: ${nome}
        \nDescrição: ${descricao}
        \nData limite: ${dataLimite}
    `)

    if (confirmacao) {
        const criarVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(criarVaga)
        alert('Vaga criada com sucesso')
    } else {
        alert('Retornando ao menu')
    }

}

function excluirVaga() {
    const indice = prompt('Informe o indice da vaga')
    const vaga = vagas[indice]

    const confirmacao = confirm(`
        Tem certeza que deseja excluir a vaga ${indice}? \n
        \nNome: ${vaga.nome}
        \nDescrição: ${vaga.descricao}
        \nData limite: ${vaga.dataLimite}
    `)

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert('Vaga exclida')
    }
}

function vagasDisponiveis() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += `${indice}. `
        textoFinal += vaga.nome
        textoFinal += ` (${vaga.candidatos.length} candidatos)`
        return textoFinal
    }, '')
    alert(vagasEmTexto)
}

function vizualizarVaga() {
    const indice = prompt('Qual o índice da vaga?')

    if (indice >= vagas.length || indice < 0) {
        alert('Índice invalido')
        return
    }

    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return `${textoFinal}\n - ${candidato}`
    }, '')

    alert(`
        Vaga ${indice}
        \nNome: ${vaga.nome}
        \nDescrição: ${vaga.descricao}
        \nData Limite: ${vaga.dataLimite}
        \nQuantidade de candidatos: ${vaga.candidatos.length}
        \nCandidatos inscritos: ${candidatosEmTexto}
    `)
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

        switch (opcao) {
            case '1':
                vagasDisponiveis()
                break;
            case '2':
                criarVaga()
                break;
            case '3':
                vizualizarVaga()
                break;
            case '4':
                addCandidato()
                break;
            case '5':
                excluirVaga()
                break;
            case '6':
                alert('Saindo...')
                break;
            default:
                alert('Valor Inválido')
        }

    } while (opcao !== '6')
}

executar()