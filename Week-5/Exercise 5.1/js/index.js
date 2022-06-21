async function* doSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i);
            }, 1000);
        });

    }
}

async function  doTask() {
    let seq = doSequence(1, 5);

    for await (let num of seq) {
        console.log(num);
    }
}

doTask();