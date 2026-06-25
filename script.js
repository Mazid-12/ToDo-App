const myInput = document.getElementById("input");
const myButton = document.getElementById("button");
const myCard = document.getElementById("todo-card");

let newDiv = document.createElement("div");
let newCheckbox = document.createElement("input");
let newLabel = document.createElement("label");



myButton.onclick = function(){
    task = myInput.value;

    if(task != ""){
        let newDiv = document.createElement("div");
        let newCheckbox = document.createElement("input");
        let newLabel = document.createElement("label");

        
        newLabel.textContent = task;


        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('id', 'checkbox');
        newLabel.setAttribute('id', 'task-label');

        
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newLabel);
        myCard.appendChild(newDiv);

        myInput.value = "";
    }

    
    
    

    



}