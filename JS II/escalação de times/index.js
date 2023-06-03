function addPlayer() {
    const playerPosition = document.getElementById('player-position').value;
    const playerName = document.getElementById('player-name').value;
    const playerNumber = document.getElementById('player-number').value;

    const confirmation = confirm(`
        Escalar ${playerName} como ${playerPosition}?
`)

    if (confirmation) {
        const teamList = document.getElementById('team-list')
        const playerItem = document.createElement('li')
        playerItem.id = `player-${playerNumber}`
        playerItem.innerText = `${playerPosition} : ${playerName} (${playerNumber})`
        teamList.appendChild(playerItem)

        document.getElementById('player-position').value = ''
        document.getElementById('player-name').value = ''
        document.getElementById('player-number').value = ''
    } 
}