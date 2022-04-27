// //Promise.resolve
// var promise1 = Promise.resolve("Thành công");


// promise1
// .then(function(result) {
//     console.log("Kết quá: ", result);
// });

// //Promise.reject
// var promise = Promise.reject("Error");


// promise
// .catch(function(err) {
//     console.log("Báo lỗi: ", err);
// });



//Promise.all
var promise1 = new Promise(function(resolve) {
    setTimeout(function(){
        resolve([1]);
    }, 1000);
})

var promise2 = new Promise(function(resolve) {
    setTimeout(function(){
        resolve([2,3]);
    }, 2000);
})

Promise.all([promise1, promise2])
    .then(function([result1, result2]){
        console.log(result1.concat(result2));
    })
