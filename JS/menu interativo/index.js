let opcoes = '5'
do {
     opcoes = prompt('1.Menu \n2.Contato \n3.Produtos \n4.Site \n5.Encerrar')

    switch(opcoes) {
        case '1':
            alert('Entrou em Menu');
            break;
        case '2':
            alert('Entrou em Contato');
            break;
        case '3':
            alert('Entrou em Produtos');
            break;
        case '4':
            alert('Entrou em Site');
            break;
        case '5':
            alert('Encerrando o programa');
            break;
        default:
            alert('Opção inválida');
    }

} while (opcoes !== '5')