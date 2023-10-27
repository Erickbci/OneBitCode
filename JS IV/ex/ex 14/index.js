// Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores.

// media(2, 6, 3, 7, 4) === 4.4
// porque
// 2 + 6 + 3 + 7 + 4 === 22
// e
// 22 / 5 === 4.4

const numbers = [2, 6, 3, 7, 4];
const sum = numbers.reduce((accumulator, value) => accumulator + value, 0);

const media = sum / numbers.length;
console.log(media);

// Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado,
// fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e
// dividindo o total pela soma dos pesos.

// n -> número, p -> peso
// mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }) === 7.75
// porque
// (7 * 2) + (9 * 5) + (3 * 1) === 62
// e
// 62 / (2 + 5 + 1) === 7.75

const arrayArit = [
  { n: 7, p: 2},
  { n: 9, p: 5},
  { n: 3, p: 1},
];
  
const somaArit = arrayArit.reduce(function(accumulator,object){ 
    return accumulator + object.n * object.p;
  },0); 

const somaPesos = arrayArit.reduce(function(accumulator,object){ 
    return accumulator + object.p;
  },0); 

const mediaArit = somaArit / somaPesos
  
console.log(mediaArit);

// Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através 
// da média aritmética simples desses dois números.

// mediana(2, 4, 5, 7, 42, 99) === 6
// porque 5 e 7 estão juntos no centro da sequência e
// media(5, 7) === 6

// mediana(15, 14, 8, 7, 3) === 8
// porque 8 está no centro da sequência

const arr = [2, 4, 5, 7, 42, 99]
const arr2 = [15, 14, 8, 7, 3]

const mediana = (arr) => {
    arr.sort((a,b) => a-b);
    const l=arr.length;
    return l%2==0
        ? arr.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
        : arr.slice((l/2), l/2+1)[0];
}

console.log(mediana(arr));
console.log(mediana(arr2));

// - **Moda:** Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
    
//     Exemplo:

// moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4) === 4
// porque:
// 4 aparece 4 vezes
// 5 e 1 aparecem 2 vezes
// 9, 7, 3, 2 e 0 aparecem 1 vez

const arrModa = [1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4]

const moda = (arr) => {
    return ((arr.sort((a, b) =>
    (arr.filter(v => v === a).length) - (arr.filter(v => v === b).length))
  ).pop())
  }

console.log(moda(arrModa));