let numero = parseFloat(prompt('Digit o numero para gerar tabuada'));
let resultado = ''

for (let i = 1; i <= 200; i++) {
    resultado += ` -> ${numero} * ${i} = ${numero * i} \n`;
}

alert(`Resultado do numero ${numero}: \n\n${resultado}`);