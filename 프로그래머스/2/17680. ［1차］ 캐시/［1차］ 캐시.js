function solution(cacheSize, cities) {
    let memory = [];
    let time = 0;
    const MISS = 5, HIT = 1;
    cities = cities.map(city => city.toLowerCase());
    
    for(let i = 0; i < cities.length; i++) {
        if(!memory.includes(cities[i])) {
            memory = [cities[i], ...memory];
            time += MISS;
            if(memory.length > cacheSize) memory.pop();
        } else {
            memory = memory.filter(item => item !== cities[i]);
            memory = [cities[i], ...memory];
            time += HIT;
        }
    }
    
    return time;
}