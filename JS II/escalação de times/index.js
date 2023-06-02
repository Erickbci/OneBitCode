function addPlayer() {
    const playersSection = document.getElementById('players-list');

    const h3 = document.createElement('h3');
    h3.innerText = 'Jogador'

    const ul = document.createElement('ul');
    
    const playerPositionLi = document.createElement('li');
    playerPositionLi.innerText = 'Posição: '
    const playerPositionInput = document.createElement('input');
    playerPositionInput.type = 'text';
    playerPositionInput.name = 'position';
    playerPositionLi.appendChild(playerPositionInput);
    ul.appendChild(playerPositionLi);

    const playerNameLi = document.createElement('li');
    playerNameLi.innerText = 'Nome: '
    const playerNameInput = document.createElement('input');
    playerNameInput.type = 'text';
    playerNameInput.name = 'name';
    playerNameLi.appendChild(playerNameInput);
    ul.appendChild(playerNameLi);

    const playerNumberLi = document.createElement('li');
    playerNumberLi.innerText = 'Número: '
    const playerNumberInput = document.createElement('input');
    playerNumberInput.type = 'number';
    playerNumberInput.name = 'number';
    playerNumberLi.appendChild(playerNumberInput);
    ul.appendChild(playerNumberLi);

    playersSection.append(h3, ul)
}