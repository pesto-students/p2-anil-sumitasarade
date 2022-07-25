const Fibonacci = (n) => ({
    [Symbol.iterator]: () => {
        let i = 1;
        let old = 0, current = 0;
        return {
            next: () => {
                if(i++ <= n) {
                    [old, current] = [current, (old + current) || 1];
                    return { value: old, done: false}
                }
                else {
                    return { done: true }
                }
            }
        }
    }
});

console.log([ ...Fibonacci(6) ]);

