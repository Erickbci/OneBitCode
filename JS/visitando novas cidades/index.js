const nome = prompt('Qual o seu nome?');
let cidades = '';
let contagem = 0;

let jaVisitouCidade = prompt('Já visitou alguma cidade? (Sim/Não)');

while (jaVisitouCidade === 'Sim') {
    let cidade = prompt('Qual o nome da cidade?');
    cidades += `- ${cidade}\n`;
    contagem++;
    jaVisitouCidade = prompt('Já visitou alguma outra cidade? (Sim/Não)');
}

alert(`
    Turista: ${nome} \n
    Quantidade de cidades: ${contagem} \n
    Cidades: 
    ${cidades}
`)