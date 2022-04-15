
//innerText & textContent
var node = document.querySelector('.heading');
console.log(node.innerText);
console.log(node.textContent);

//innerHTML & outterHTML
node.innerHTML = '<h1>Hello word</h1>';

var box = document.querySelector('.box');
box.outerHTML = '<h2>Hello word</h2>';

//Dom Style

var box2 = document.querySelector('.box2');
Object.assign(box2.style, {
    width: '300px',
    height: '400px',
    backgroundColor: 'red',
});