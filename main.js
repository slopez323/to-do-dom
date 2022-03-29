const addItem = document.querySelector('#add');
const newTodo = document.querySelector('#newTodo');
const listView = document.querySelector('.list');
const delComp = document.querySelector('#delComp');
const delAll = document.querySelector('#delAll');
let count = 0;

addItem.addEventListener('submit', function (event) {
    event.preventDefault();

    let newItem = document.createElement('div');
    let listActions = document.createElement('span');
    let deleteIcon = document.createElement('i');
    let completeIcon = document.createElement('i');

    completeIcon.className = `fa fa-solid fa-check complete-${count}`
    deleteIcon.className = `fa fa-solid fa-trash-can delete-${count}`;
    listActions.append(completeIcon, deleteIcon);


    newItem.className = 'listItem';
    newItem.id = `item-${count}`;
    count++

    newItem.textContent = newTodo.value;
    newItem.append(listActions);

    listView.appendChild(newItem);
    newTodo.value = '';

});

listView.addEventListener('click', function (event) {
    let clicked = event.target.classList;

    if (clicked[2] == 'fa-trash-can') {
        deleteItem(clicked);
    };

    if (clicked[2] == 'fa-check') {
        completeItem(clicked);
    };
});

function deleteItem(clicked) {
    let number = (clicked[3].substring(clicked[3].search("-") + 1));
    let item = document.querySelector(`#item-${number}`);
    item.remove();
};

function completeItem(clicked) {
    let number = (clicked[3].substring(clicked[3].search("-") + 1));
    let item = document.querySelector(`#item-${number}`);

    if(item.classList.contains('completed')){
        item.classList.remove('completed');
    } else item.classList.add('completed');
};

delComp.addEventListener('click', function(){
    let completed = document.querySelectorAll('.completed');
    completed.forEach(x => x.remove());
});

delAll.addEventListener('click', function(){
    listView.innerHTML = '';
});