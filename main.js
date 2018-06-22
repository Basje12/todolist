// IDs
const list = document.querySelector('#ul-todo');
const invoerText = document.querySelector('#todoInvoer');
const invoerButton = document.querySelector('#invoeren');
const removeButton = document.querySelectorAll('remove-button');
let todoList = []



// Listeners
invoerText.addEventListener('keypress', function(e) { e.keyCode === 13 && invoerText.value.length > 0 ? todoInvoeren() : {} });
invoerButton.addEventListener('click', todoInvoeren);
window.addEventListener('onload', init())

// Functions

// Load todo's from localstorage, convert to array, populate todolist when window opens
function init() {
    open = JSON.parse(localStorage.getItem('myList'));
    if (open) { todoList = open };
    
    for (let i = 0; i < todoList.length; i++) {
        let item = maakItem(todoList[i]);
        list.appendChild(item)
    }
}

// Utility function
function doNothing() {}

// Create the list item. Add input. Create button to remove item
function maakItem(invoer) {
    var todoItem = document.createElement('li');
    var invoerItem = document.createTextNode(invoer);
    todoItem.appendChild(invoerItem);

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('remove-button');
    deleteButton.onclick = todoVerwijderen;
    deleteButton.appendChild(document.createTextNode('X'));
    todoItem.appendChild(deleteButton);

    return todoItem;
}

// Call maakItem, append created todo and delete button to list. Write to array and store in localstorage
function todoInvoeren() {
    let item = maakItem(invoerText.value);

    list.appendChild(item);
    todoList.push(invoerText.value);

    localStorage.setItem("myList", JSON.stringify(todoList));

    invoerText.value = '';
}

// Remove selected todo item. Remove it from the array and store current array in localstorage
function todoVerwijderen() {
    let index = todoList.indexOf(this.parentNode.firstChild.textContent);
    todoList.splice(index, 1);
    localStorage.setItem("myList", JSON.stringify(todoList));
    
    this.parentNode.remove();
}