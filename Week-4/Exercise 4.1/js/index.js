function getNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function RandomNumberPromise(executor){
    let resolver;
    let rejector;
    let isCallback = false;
    let isResolved = false;
    let isRejected = false;
    let value;
    let error;
    
    this.then = function (thenHandler) {
        resolver = thenHandler;
        if (!isCallback && isResolved) {
            resolver(value);
            isCallback = true;
        }
        return this;
    };
    
    this.catch = function (catchHandler) {
        rejector = catchHandler;
        if (!isCallback && isRejected) {
            rejector(error);
            isCallback = true;
        }
        return this;
    };
    
    function resolve(val) { 
        isResolved = true;
        value = val;
        if(typeof resolver === 'function' && !isCallback){
            resolver(val);
            isCallback = true;
        }
    }
    
    function reject(err) { 
        isRejected = true;
        error = err;
        if(typeof rejector === 'function' && !isCallback){
            rejector(err);
            isCallback = true;
        }
    }
    
    executor(resolve, reject);
        
}

let promise = new RandomNumberPromise(function executor(resolve, reject) {
    let randomNumber = getNumber();
    console.log(randomNumber);
    if((randomNumber % 5) == 0){
        reject();
    }
    else{
        resolve();
    }
});

promise.
    then(function () {
        console.log('Promise is resolved');
    }).
    catch(function () {
        console.log('Promise is rejected');
    });