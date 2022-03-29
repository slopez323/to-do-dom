const addItem = document.querySelector('#add');
const newTodo = document.querySelector('#newTodo');
const listView = document.querySelector('.list');
let list = [];

addItem.addEventListener('submit', function (event) {
    event.preventDefault();

    let newItem = document.createElement('div'); 
    
    newItem.className = 'listItem';

    newItem.textContent = newTodo.value;

    listView.appendChild(newItem);
    newTodo.value = '';
    
});