function solution(sizes) {
    const moreLongs = []
    const moreShorts = []
    
    for(size of sizes) {
        moreLongs.push(Math.max(size[0], size[1]));
        moreShorts.push(Math.min(size[0], size[1]));
    }
    
    return Math.max(...moreLongs) * Math.max(...moreShorts);
}