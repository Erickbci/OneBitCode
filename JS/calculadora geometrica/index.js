function areaDoTriangulo() {
    const base = prompt('Informe a base do triângulo:')
    const altura = prompt('Informe a altura do triângulo:')
    return base * altura / 2
}

function areaDoRetangulo() {
    const base = prompt('Informe a base do retângulo:')
    const altura = prompt('Informe a altura do retângulo:')
    return base * altura
}

function areaDoQuadrado() {
    const lado = prompt('Informe o lado do quadrado:')
    return lado * lado
}

function areaDoTrapezio() {
    const baseMaior = prompt('Informe a base maior do trapézio:')
    const baseMenor = prompt('Informe a base menor do trapézio:')
    const altura = prompt('Informe a altura do trapézio:')
    return (baseMaior + baseMenor) * altura / 2
}

function areaDoCirculo() {
    const pi = 3.14
    const raio = prompt('Informe o rádio do circulo:')
    return pi * (raio * raio)
}


function exibirMenu(){
    return prompt(`
    Calculadora geométrica\n
    \n1. Calcular área do triângulo:
    \n2. Calcular área do retângulo:
    \n3. Calcular área do quadrado:
    \n4. Calcular área do trapézio:
    \n5. Calcular área do círculo:
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
                resultado = areaDoTriangulo()
                break;
            case '2':
                resultado = areaDoRetangulo()
                break;
            case '3':
                resultado = areaDoQuadrado()
                break;
            case '4':
                resultado = areaDoTrapezio()
                break;
            case '5':
                resultado =areaDoCirculo()
                break;
            case '6':
                alert('Saindo...')
                break;
            default:
                alert('Valor Inválido')
                break;
        }

        if (resultado) {
            alert(`O resultado é ${resultado}`)
        }

    } while (opcao !== '6')
}

executar()