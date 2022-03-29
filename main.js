const addItem = document.querySelector('#add');
const newTodo = document.querySelector('#newTodo');
const listView = document.querySelector('.list');
const delComp = document.querySelector('#delComp');
const delAll = document.querySelector('#delAll');
let count = 0;

checkEmpty();

function checkEmpty(){
    if(!document.querySelector('.listItem')){
        let empty = document.createElement('p');
        empty.textContent = `Your list is empty.`;
        listView.appendChild(empty);
    };
};

addItem.addEventListener('submit', function (event) {
    event.preventDefault();

    if(document.querySelector('p')) document.querySelector('p').remove();

    let newItem = document.createElement('div');
    let listActions = document.createElement('span');
    let deleteIcon = document.createElement('i');
    let completeIcon = document.createElement('i');
    let editIcon = document.createElement('i');

    editIcon.className = `fa fa-regular fa-pen-to-square edit-${count}`
    completeIcon.className = `fa fa-solid fa-check complete-${count}`
    deleteIcon.className = `fa fa-solid fa-trash-can delete-${count}`;
    
    listActions.append(editIcon, completeIcon, deleteIcon);


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

    if (clicked[2] == 'fa-pen-to-square'){
        editItem(clicked);
    };
});

function deleteItem(clicked) {
    let number = (clicked[3].substring(clicked[3].search("-") + 1));
    let item = document.querySelector(`#item-${number}`);
    item.remove();
    checkEmpty();
};

function completeItem(clicked) {
    let number = (clicked[3].substring(clicked[3].search("-") + 1));
    let item = document.querySelector(`#item-${number}`);
    let comp = document.querySelector(`.complete-${number}`);

    if(item.classList.contains('completed')){
        item.classList.remove('completed');
        comp.style.color = '';
    } else {
        item.classList.add('completed');
        comp.style.color = 'limegreen';
    };
};

function editItem(clicked){
    let number = (clicked[3].substring(clicked[3].search("-") + 1));
    let item = document.querySelector(`#item-${number}`);
    let span = item.querySelector('span');

    let done = document.createElement('button');
    done.className = 'btn';
    done.textContent = 'Done';

    item.append(done);
    span.style.display = 'none';

    item.contentEditable = true;
    item.focus();

    done.addEventListener('click', function(){
        done.remove();
        item.contentEditable = false;
        span.style.display = '';
    });
};

delComp.addEventListener('click', function(){
    let completed = document.querySelectorAll('.completed');
    completed.forEach(x => x.remove());
});

delAll.addEventListener('click', function(){
    listView.innerHTML = '';
    checkEmpty();
});