function solution(cacheSize, cities) {
    let memory = [];
    let time = 0;
    cities = cities.map(city => city.toLowerCase());
    
    for(let i = 0; i < cities.length; i++) {
        if(!memory.includes(cities[i])) {
            memory = [cities[i], ...memory];
            time += 5;
            if(memory.length > cacheSize) memory.pop();
        } else {
            memory = memory.filter(item => item !== cities[i]);
            memory = [cities[i], ...memory];
            time += 1;
        }
    }
    
    return time;
}