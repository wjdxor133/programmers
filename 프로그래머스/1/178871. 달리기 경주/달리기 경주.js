// 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부름
// 선수의 이름을 부를 때 마다, 등수를 바꿔줘야 함

function solution(players, callings) {
    const playerRanking = {};
    players.forEach((player, index) => {
        if (!playerRanking[player]) {
            playerRanking[player] = index;
        }
    });

    let sortedPlayers = players.slice().sort((a, b) => playerRanking[a] - playerRanking[b]);

    callings.forEach((player) => {
        const playerIndex = playerRanking[player];
        if (playerIndex > 0) {
            const temp = sortedPlayers[playerIndex - 1];
            sortedPlayers[playerIndex - 1] = sortedPlayers[playerIndex];
            sortedPlayers[playerIndex] = temp;
            playerRanking[temp] = playerIndex;
            playerRanking[player] = playerIndex - 1;
        }
    });

    return sortedPlayers;
}

