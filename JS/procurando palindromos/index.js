const palavra = prompt('Informe uma palavra');
let palavraInvertida = ''
console.log('ola');
for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
    alert('A palavra é um palimdromo');
} else {
    alert(
        `${palavra} não é um palimdromo\n\n
        ${palavra} !== ${palavraInvertida}
        `)
}