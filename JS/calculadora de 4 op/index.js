const entrada1 = window.prompt('Insira o primeiro numero');
const entrada2 = window.prompt('Insira o segundo numero');

const num1 = parseFloat(entrada1);
const num2 = parseFloat(entrada2);

const soma = num1 + num2;
const mult = num1 * num2;
const sub = num1 - num2;
const div = num1 / num2;

window.alert(`Soma: ${soma}, mult: ${mult}, sub: ${sub}, div: ${div}`);