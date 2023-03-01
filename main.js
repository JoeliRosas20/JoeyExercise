let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let setsInput = document.getElementById("setsInput");
let repsInput = document.getElementById("repsInput");
let poundsInput = document.getElementById("poundsInput");
let msg = document.getElementById("msg")
let msg2 = document.getElementById("msg2")
let msg3 = document.getElementById("msg3")
let msg4 = document.getElementById("msg4")
let add = document.getElementById("add")
let exercises = document.getElementById("exercises")
let data = [];

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    formValidation();
})

//Validating what is filled in the form
let formValidation = () => {
    //Value
    let text = textInput.value;
    let set = setsInput.value;
    let rep = repsInput.value;
    let pound = poundsInput.value;
    //Is it blank
    let textIsEmpty = text === ""
    let repIsEmpty = rep === ""
    let setIsEmpty = set === ""
    let poundIsEmpty = pound === ""
    //Is a negative
    let setIsNegative = set < 0
    let repIsNegative = rep < 0
    let poundIsNegative = pound < 0
    //Is not a number
    let setNotANum = isNaN(set)
    let repNotANum = isNaN(rep)
    let poundNotANum = isNaN(pound)
    //Name validation
    if(textIsEmpty){
        msg.innerHTML = "It cannot be blank"
    }else{
        msg.innerHTML = ""
    }
    //Sets validation
    if(setIsNegative){
        msg2.innerHTML = "It cannot be negative"
    }
    else if(setNotANum){
        msg2.innerHTML = "It needs to be a number"
    }else if(setIsEmpty){
        msg2.innerHTML = "It cannot be blank"
    }else{
        msg2.innerHTML = ""
    }
    //Reps validation
    if(repIsNegative){
        msg3.innerHTML = "It cannot be negative"
    }else if(repNotANum){
        msg3.innerHTML = "It needs to be a number"
    }else if(repIsEmpty){
        msg3.innerHTML = "It cannot be blank"
    }else{
        msg3.innerHTML = ""
    }
    //Pounds validation
    if(poundIsNegative){
        msg4.innerHTML = "It cannnot be negative"
    }else if(poundNotANum){
        msg4.innerHTML = "It needs to be a number"
    }else if(poundIsEmpty){
        msg4.innerHTML = "It cannot be blank"
    }else{
        msg4.innerHTML = ""
    }
    //Send the data once its ready
    if(!textIsEmpty && (!setIsEmpty && !setNotANum && !setIsNegative) && (!repIsEmpty && !repNotANum && !repIsNegative) && (!poundIsEmpty && !poundNotANum && !poundIsNegative)){
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal")//This changes the html to dismiss
        add.click();//This clicks the dismiss button
        (() => {
            add.setAttribute("data-bs-dismiss","")
        })();//This makes sure that the form does not get send with blank inputs
    }
}

//Accept the date filled in the form unto the 
let acceptData = () =>{
    data.push({
        name: textInput.value,
        set: setsInput.value,
        rep: repsInput.value,
        pound: poundsInput.value,
    })
    localStorage.setItem("data", JSON.stringify(data))
    console.log(data)
    createTasks()
}

//Creating the tasks so it can be displayed
let createTasks = () =>{
    exercises.innerHTML = "";
    data.map((x,y) =>{
        return (exercises.innerHTML += `
        <div id=${y}>
            <span class="fw-bold">${x.name}</span>
            <span class="small text-secondary">${x.set}</span>
            <span class="small text-secondary">${x.rep}</span>
            <span class="small text-secondary">${x.pound}</span>

            <span class="options">
                <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i> 
                <i onClick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
            </span>
        </div>
        `)
    })
    resetForm()
}

//Clearing the form once the accept button is pressed
let resetForm = () =>{
    textInput.value = "";
    setsInput.value = "";
    repsInput.value = "";
    poundsInput.value = "";
}

//Deleting the exercise
let deleteTask = (e) =>{
    //This removes the icon first, then deletes the span its in, then deletes the div its in
    e.parentElement.parentElement.remove();
    //This removes the content from the array
    data.splice(e.parentElement.parentElement.id, 1)
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
}

//Editing the exercise
let editTask = (e) =>{
    //This will target the exercise we want to edit
    let selectedTask = e.parentElement.parentElement;
    //This will edit the task in the array
    textInput.value = selectedTask.children[0].innerHTML;
    setsInput.value = selectedTask.children[1].innerHTML;
    repsInput.value = selectedTask.children[2].innerHTML;
    poundsInput.value = selectedTask.children[3].innerHTML;
    //This will delete the task and display the updated exercise
    deleteTask(e)
}