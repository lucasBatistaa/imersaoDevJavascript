var players = [
    {
        name: "José",
        win: 2,
        draw: 1,
        defeat: 2,
        points: 25
    },
    {
        name: "Lucas",
        win: 2,
        draw: 1,
        defeat: 2,
        points: 25
    }
]

var paulo = {
    name: "Paulo",
    win: 2,
    draw: 1,
    defeat: 2,
    points: 25
}

function addWin(player) {
    player.win++
    player.points += 10

    showScreen()
}

function addDraw(player) {
    player.draw++
    player.points += 5

    showScreen()
}

function addDefeat(player) {
    player.defeat++

    showScreen()
}

var tableElement = document.getElementById('tabelaJogadores')

function showScreen() {
    players.forEach((player, i) => {

        var anyPlayer = player
        tableElement.innerHTML += `
            <tr>
                <td>${player.name}</td>
                <td>${player.win}</td>
                <td>${player.draw}</td>
                <td>${player.defeat}</td>
                <td>${player.points}</td>
                <td><button onClick="addWin(${anyPlayer})">Vitória</button></td>
                <td><button onClick="addDraw(anyPlayer)">Empate</button></td>
                <td><button onClick="addDefeat(anyPlayer)">Derrota</button></td>
            </tr>
        `

    });

}



showScreen()