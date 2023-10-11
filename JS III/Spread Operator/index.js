const cidades = ['São Paulo', 'Santos', 'Guarulhos', 'Guarujá', 'Indaia', 'Arujá', 'Caraguatatuba', 'Ubatuba', 'Maranduba']

console.log(cidades);
console.log(...cidades);
console.log(...cidades[0]);

const cidadesCopia = cidades

cidadesCopia.pop()
cidadesCopia.pop()
cidadesCopia.push('Maringá')

console.log({ cidades, cidadesCopia });

const cidadesClone = [...cidades]

cidadesClone.push('Itaquacetuba')

console.log({ cidades, cidadesCopia, cidadesClone });

const cidadesObj = { ...cidades }
const cidadesObjClone = { ...cidadesObj }

cidadesObjClone.test = "Teste"

console.log({ cidadesObj, cidadesObjClone });