function memoize(fn) {
    const cache = new Map();
    return function ( ... args){
        const key = args.toString();
        //console.log('fn called with' +key);
        //console.log(cache);
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn( ... args));
        return cache.get(key);
    };
}


function Add(a=0, b=0) {
    return a+b;
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const memoizeAdd = memoize(Add);

// time(() => memoizeAdd(100, 100));
// time(() => memoizeAdd(100));
// time(() => memoizeAdd(100, 200));
// time(() => memoizeAdd(100, 100));
// time(() => memoizeAdd(100, 100));
// time(() => memoizeAdd(100, 100));

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 100));
