const myInput = document.getElementById("input");
const myButton = document.getElementById("button");
const myCard = document.getElementById("todo-card");

let newDiv = document.createElement("div");
let newCheckbox = document.createElement("input");
let newLabel = document.createElement("label");



myButton.onclick = function(){
    task = myInput.value;

    if(task != ""){
        const newDiv = document.createElement("div");
        const newCheckbox = document.createElement("input");
        const newLabel = document.createElement("label");
        const deleteBtn = document.createElement("button");

        
        newLabel.textContent = task;

        deleteBtn.textContent = 'delete';


        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('id', 'checkbox');
        newLabel.setAttribute('id', 'task-label');
        newCheckbox.setAttribute('value', 'checked');
        deleteBtn.setAttribute('id', 'deleteBtn');


        
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(deleteBtn);
        myCard.appendChild(newDiv);

        myInput.value = "";

       



    }

}

