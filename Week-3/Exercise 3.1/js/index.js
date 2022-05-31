function memoize(fn) {
    const cache = new Map();
    return function ( ... args){
        args.sort();
        const key = args.toString();
        console.log('fn called with' +key);
        //cache.sort();
        console.log(cache);
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(args));
        return cache.get(key);
    };
}


function Add(args) {
    //args.sort();
    return args.reduce((sum, value) => sum+value, 0);
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const memoizeAdd = memoize(Add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(200, 100));
console.log(memoizeAdd(500, 100, 300));
console.log(memoizeAdd(100, 200));

