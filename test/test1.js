
var data = []
let isUpdate = true
let create = document.querySelector('.create')
create.onclick = (e) => {
    handleCreate()
}

function handleCreate() {
    var item_id = document.getElementById("id").value;
    data.push(item_id)
    render()
    clear()
}
function render() {
    list = ``
    for (let i = 0; i < data.length; i++) {
        list += `<li>${data[i]}</li>
                <button onclick = "deleteItem(${data[i]})">Xóa</button>
                <button  class="text" data-index = ${i}>Sửa</button>
                `
    }
    document.getElementById("render").innerHTML = list
}

function clear() {
    document.getElementById("id").value = "";
}

function deleteItem(x) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].Id == x) {
            data.splice(i, 1);

            render()
        }
    }
}
const ul = document.querySelector('#render')

ul.onclick = (e) => {
    isUpdate = false
    const getButton = e.target.closest('.text').dataset.index

    create.onclick = () => {
        if (isUpdate) {
            handleCreate()
        } else {
            var item_id = document.getElementById("id").value;
            data[getButton] = item_id
            isUpdate = true
            render()
        }
    }
}


// function editItem(x, e) {
//     for(let i=0; i < data.length; i++) {
//         if(data[i].Id==x) {
//             document.getElementById("id").value = data[i].Id;
//         }
//     }
// }





