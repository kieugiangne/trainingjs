const a = () => {
    return new Promise((resolve, reject) => {
        resolve();
    });
};

a()
    .then(() => {
        setTimeout(() => {
            console.log("1");
        }, 2000);
    })

    .then(() => {
        setTimeout(() => {
            console.log("2");
        }, 4000);
    })

    .then(() => {
        setTimeout(() => {
            console.log("3");
        }, 6000);
    })