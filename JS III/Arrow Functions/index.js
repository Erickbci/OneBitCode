// Função normal
function somaNormal(a, b) {
    return a + b
}

console.log(`Soma normal: ${somaNormal(3, 3)}`);

// Função anonima
const somaAnonima = function (a, b) {
    return a + b
}

console.log(`Soma anonima ${somaAnonima(4, 4)}`);

// Funções arrow
const somaArrow = (a, b) => {
    return a + b
}

console.log(`Soma arrow: ${somaArrow(5, 5)}`);

const subtracao = (a, b) => a - b

console.log(`Subtração: ${subtracao(5, 5)}`);

const duplo = n => `O dobro de ${n} é ${n * 2}`

const numero = 10
console.log(duplo(numero));

const cidades = ['São Paulo', 'Guarulhos', 'Arujá', 'Guarujá', 'Santos']

const comecaComS = cidades.filter(cidade => cidade[0] === 'S')

const comecaComG = cidades.filter(cidade => cidade[0] === 'G')

console.log(comecaComG, comecaComS);