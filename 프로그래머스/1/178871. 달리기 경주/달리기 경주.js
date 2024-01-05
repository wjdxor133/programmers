// 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부름
// 선수의 이름을 부를 때 마다, 등수를 바꿔줘야 함

function solution(players, callings) {
    const playerRanking = players.reduce((obj, player, index) => {
        if (!obj[player]) {
            obj[player] = index;
        }
        return obj;
    }, {});

    callings.forEach((player) => {
        const playerIndex = playerRanking[player];
        if (playerIndex > 0) {
            const temp = players[playerIndex - 1];
            players[playerIndex - 1] = player;
            players[playerIndex] = temp;
            playerRanking[temp] = playerIndex;
            playerRanking[player] = playerIndex - 1;
        }
    });

    return players;
}


