const pessoa = {
    nome: "Erick",
    profissao: "Dev",
    parentes: ["Renato", "Carol"]
}

const nome = pessoa.nome //maneira primaria

const { profissao, parentes } = pessoa //desestruturado

console.log(nome, profissao, parentes);

const [pai, mae] = parentes

console.log(pai, mae);

function criarUsuario({ nome, profissao, parentes }) {
    const id = Math.floor(Math.random() * 9999)

    return {
        id,
        nome,
        profissao,
        parentes
    }
}

const erick = criarUsuario(pessoa)
console.log(erick);