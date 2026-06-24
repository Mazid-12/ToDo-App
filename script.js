const myInput = document.getElementById("input");
const myButton = document.getElementById("button");
const taskLabel = document.getElementById("task-label");
const myCard = document.getElementById("todo-card");


myButton.onclick = function(){
    newTask = myInput.value;

    const newDiv = document.createElement("div");
    const newCheckbox = document.createElement("input");
    const newLabel = document.createElement("label");

    newLabel.textContent = newTask;
    newCheckbox.setAttribute('type', 'checkbox');

    newLabel.setAttribute('id', 'task-label');
    newCheckbox.setAttribute('id', 'checkbox')

    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newLabel);
    

    myCard.appendChild(newDiv);
    
    myInput.value = '';
    

}