const valorRecebido = parseFloat(window.prompt('Digite o valor desejado para converter(em metros)'));
const unidadeDeMedida = window.prompt('Qual unidade de medida? \n milímetro(mm) \n centímetro(cm) \n decímetro(dm) \n decâmetro(dam) \n hectômetro(hm) \n quilômetro(km)');
let result;

switch (unidadeDeMedida) {
    case "mm" :
        result = valorRecebido * 1000
        alert(`A conversão de ${valorRecebido}m para ${unidadeDeMedida} é: ${result}${unidadeDeMedida}`)
    break;
    case "cm" :
        result = valorRecebido * 100
        alert(`A conversão de ${valorRecebido}m para ${unidadeDeMedida} é: ${result}${unidadeDeMedida}`)
    break;
    case "dm" :
        result = valorRecebido * 10
        alert(`A conversão de ${valorRecebido}m para ${unidadeDeMedida} é: ${result}${unidadeDeMedida}`)
    break;
    case "dam" :
        result = valorRecebido / 10
        alert(`A conversão de ${valorRecebido}m para ${unidadeDeMedida} é: ${result}${unidadeDeMedida}`)
    break;
    case "hm" :
        result = valorRecebido / 100
        alert(`A conversão de ${valorRecebido}m para ${unidadeDeMedida} é: ${result}${unidadeDeMedida}`)
    break;
    case "mm" :
        result = valorRecebido / 1000
        alert(`A conversão de ${valorRecebido}m para ${unidadeDeMedida} é: ${result}${unidadeDeMedida}`)
    break;
    default:
        alert('Opção inválida')
}