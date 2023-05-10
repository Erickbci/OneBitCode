const nome = window.prompt('Digite seu nome');
const sobrenome = window.prompt('Digite seu sobrenome');
const estudo = window.prompt('Digite seu campo de estudo');
const nascimento = parseFloat(window.prompt('Digite seu ano de nascimento'));

window.alert(`Olá ${nome} ${sobrenome}, você está no curso de ${estudo}, tem ${2023 - nascimento} anos`)