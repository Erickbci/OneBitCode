
//inserir nome, 
//poder de ataque do personagem 1
const personagem1Nome = window.prompt('Inserir nome do personagem 1');
const personagem1PoderDeAtaque = parseFloat(window.prompt('Inserir poder de ataque do personagem 1'));

//inserir nome,
//quantidade de pontos de vida,
//poder de defesa / se possui escudo 
// calcular a quantidade de dano
const personagem2Nome = window.prompt('Inserir nome do personagem 2');
const personagem2PontosDeVida = parseFloat(window.prompt('Inserir pontos de vida do personagem 2'));
const personagem2PoderDeDefesa = parseFloat(window.prompt('Inserir poder de defesa do personagem 2'));
const personagem2PossuiEscudo = window.confirm('Personagem 2 possui escudo?');
let quantidadeDeDano;

// Se personagem1PoderDeAtaque > personagem2PoderDeDefesa || personagem2PossuiEscudo == false {quantidadeDeDano = personagem1PoderDeAtaque - personagem2PoderDeDefesa}
// Se personagem1PoderDeAtaque > personagem2PoderDeDefesa || personagem2PossuiEscudo == true {quantidadeDeDano = (personagem1PoderDeAtaque - personagem2PoderDeDefesa) / 2 }
// Se personagem1PoderDeAtaque <= personagem2PoderDeDefesa || quantidadeDeDano = 0

if (personagem1PoderDeAtaque > personagem2PoderDeDefesa && personagem2PossuiEscudo == false ) {
    quantidadeDeDano = personagem1PoderDeAtaque - personagem2PoderDeDefesa
    console.log(quantidadeDeDano);
} else if (personagem1PoderDeAtaque > personagem2PoderDeDefesa && personagem2PossuiEscudo == true) {
    quantidadeDeDano = (personagem1PoderDeAtaque - personagem2PoderDeDefesa) / 2 
    console.log(quantidadeDeDano);
} else if (personagem1PoderDeAtaque <= personagem2PoderDeDefesa){
    quantidadeDeDano = 0
    console.log("é 0");
} else {
    console.log('travou');
}

// quantidadeDeDano - personagem2PontosDeVida
const personagem2PontosDeVidaAtualizado = personagem2PontosDeVida - quantidadeDeDano

// exibir quantidadeDeDano 
// personagem1Nome, personagem1PoderDeAtaque
// personagem2Nome, personagem2PontosDeVida. personagem2PoderDeDefesa, personagem2PossuiEscudo
window.alert(
    `Quantidade de dano: ${quantidadeDeDano}
    \nPersonagem 1 :
    \nNome: ${personagem1Nome}
    \nPoder de ataque: ${personagem1PoderDeAtaque}
    \nPersonagem 2 :
    \nNome: ${personagem2Nome}
    \nPontos De Vida: ${personagem2PontosDeVidaAtualizado}
    \nPoder de defesa: ${personagem2PoderDeDefesa}
    \nPossui escudo? ${personagem2PossuiEscudo ? 'sim' : 'não'}
`)