function a(value) {
    value("123");
}

function myCallback(value1) {
    console.log(value1);
}

function b(value2) {
    value2("456");
}

a(myCallback);
b(myCallback);