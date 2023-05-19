const imoveis = []
let opcao = ''

do {
    opcao = prompt(`
        Imóveis cadastrados: ${imoveis.length}
        \n1. Novo imóvel
        \n2. Lista de Imóveis
        \n3. Sair
    `)

    switch (opcao) {
        case '1':
            const imovel = {}
            imovel.proprietario = prompt('Qual o nome do proprietário?')
            imovel.quantidadeDeQuartos = prompt('Quantidade de quartos?')
            imovel.quantidadeDeBanheiros = prompt('Quantidade de banheiros?')
            imovel.possuiGaragem = prompt('Possui garagem?(Sim/Não)')
            
            const confirmacao = confirm(`
            Salvar este imóvel?\n
            \nProprietário: ${imovel.proprietario}
            \nQantidade De Quartos: ${imovel.quantidadeDeQuartos}
            \nQuantidade de banheiros: ${imovel.quantidadeDeBanheiros}
            \nGaragem: ${imovel.possuiGaragem}
            `)
            
            if (confirmacao) {
                imoveis.push(imovel)
                alert('Imóvel salvo com sucesso')
            } else {
                alert('Voltando ao menu')
            }

            break
        case '2':
            if (imoveis.length === 0) {
                alert('Nenhum imóvel cadastrado')
            } else {
                for (let i = 0; i < imoveis.length; i++) {
                        alert(`
                            Imóvel ${i + 1}
                            \nProprietário: ${imoveis[i].proprietario}
                            \nQantidade De Quartos: ${imoveis[i].quantidadeDeQuartos}
                            \nQuantidade de banheiros: ${imoveis[i].quantidadeDeBanheiros}
                            \nGaragem: ${imoveis[i].possuiGaragem}
                        `)
                }
            }
            break
        case '3':
            alert('Fechando aplicação')
            break
        default:
            alert('Opção inválida')
    }

} while (opcao !== '3')