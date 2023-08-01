let todoItemsContainerElement = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    },
    {
        text: "Learn React",
        uniqueNo: 4
    }
];


function onTodoStatusChange(checkBoxId, labelId) {
    let checkBoxElement = document.getElementById(checkBoxId);
    console.log(checkBoxElement.checked);

    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle('checked');
}

function onDeleteToDo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainerElement.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let checkBoxId = "checkBox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainerElement.appendChild(todoElement);
    console.log(todoItemsContainerElement);


    let inputElement = document.createElement('input');
    inputElement.type = "checkbox";
    inputElement.id = checkBoxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkBoxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement('div');
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement('label');
    labelElement.setAttribute("for", checkBoxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let favouriteItemContainer = document.createElement("div");
    favouriteItemContainer.classList.add("favourite-item-container");
    labelContainer.appendChild(favouriteItemContainer);

    let favouriteIcon = document.createElement('i');
    favouriteIcon.classList.add("fa-regular", "fa-star", "star-icon");
    favouriteItemContainer.appendChild(favouriteIcon);
    favouriteIcon.onclick = function() {
        favouriteIcon.classList.toggle("star-icon-properties");
    }

    let deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add("fa-regular", "fa-trash-can", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteToDo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);

}

function onAddTodo() {
    let todosCount = todoList.length;
    todosCount = todosCount + 1;

    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("enter Valid Input");
        return;
    }
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };
    createAndAppendTodo(newTodo);

}
addTodoButton.onclick = function() {
    onAddTodo();
};
for (let eachTodo of todoList) {
    createAndAppendTodo(eachTodo);
}