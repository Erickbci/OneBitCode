const baralho = [];
let opcao = '';

do {
    opcao = prompt(
        `Cartas no baralho: ${baralho.length}
        \n1. Adicionar carta
        \n2. Puxar uma carta
        \n3. Sair
        `
    )

    switch (opcao) {
        case '1':
            const novaCarta = prompt('Qual carta deseja adicionar?')
            baralho.push(novaCarta)
            break;
        case '2':
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert('Nenhuma carta no baralho')
            } else {
                alert(`A carta puxada foi: ${cartaPuxada}`)
            }
            break;
        case '3':
            alert('Guardando baralho...')
            break;
        default:
            alert('Opção inválida')
    }
} while (opcao !== "3")