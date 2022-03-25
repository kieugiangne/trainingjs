const subjects = [
    {
        id:1,
        subjects: "HTML",
        coin: 500
    },
    {
        id:2,
        subjects: "CSS",
        coin: 900
    },
    {
        id:3,
        subjects: "JS",
        coin: 500
    },
    {
        id:4,
        subjects: "JS",
        coin: 1200
    },
];  

    // //forEach
    // subjects.forEach(function(subject, index) {
    //     console.log(index, subject.subjects);
    // })

    // //find 
    // const text = subjects.find(function(subject, index) {
    //     return subject.coin === 500;
    // });
    // console.log(text);  

    // //filter 
    // const text = subjects.filter(function(subject, index) {
    //     return subject.coin === 500;
    // });
    // console.log(text); 
    
    // //map
    // const text = subjects.map(function(subject, index) {
    //     return {
    //         id: subject.id,
    //         subject: subject.subject,
    //         coin: subject.coin,
    //         number: 2
    //     };
    // });
    // console.log(text);

    // //some 
    // const text = subjects.some(function(subject, index) {
    //     return subject.coin === 500;
    // });
    // console.log(text);
    
    // //every 
    // const text = subjects.every(function(subject, index) {
    //     return subject.coin === 500;
    // });
    // console.log(text);

    //reduce 
    var totalCoin = subjects.reduce(function(total, subject) {
        return total + subject.coin;
    }, 0);
    console.log(totalCoin);