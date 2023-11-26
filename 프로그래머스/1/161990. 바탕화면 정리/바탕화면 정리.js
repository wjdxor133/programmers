function solution(wallpaper) {
    const X_COORDINATE = [];
    const Y_COORDINATE = [];
    
    for(let x = 0; x < wallpaper.length; x++) {
        for(let y = 0; y < wallpaper[x].length; y++) {
            if(wallpaper[x][y] === '#') {
                X_COORDINATE.push(x);
                Y_COORDINATE.push(y);
            }
        }
    }
    
    return [Math.min(...X_COORDINATE), Math.min(...Y_COORDINATE), Math.max(...X_COORDINATE) +1, Math.max(...Y_COORDINATE) +1];
}