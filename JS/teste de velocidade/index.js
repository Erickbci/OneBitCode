//inserir nome e velocidade de dois veiculos
const veiculo1 = window.prompt('Nome do veiculo 1');
const velocidade1 = window.prompt('velocidade do veiculo 1');

const veiculo2 = window.prompt('Nome do veiculo 2');
const velocidade2 = window.prompt('velocidade do veiculo 2');

console.log(veiculo1,velocidade1, veiculo2, velocidade2);

const teste = 
(velocidade1 > velocidade2) 
    ? `velocidade do ${veiculo1} é maior (${velocidade1})` 
    : `velocidade do ${veiculo2} é maior (${velocidade2})`
||
(velocidade1 == velocidade2)
    ? `velocidades iguais (${velocidade1})`
    : 'rever'
    ;

alert(teste);