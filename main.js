//Get the modal
var modal = document.getElementById("filterModal");
//Get the button that closes the modal
var btn = document.getElementById("filterBtn");
//Get the span element the closes the modal
var span = document.getElementsByClassName("close")[0];
var row = document.getElementById("row").innerHTML 
console.log(row)

//Once the user clicks the button, the modal appears
btn.onclick = () => {
    modal.style.display = "block"
}

//For the close button on the modal
span.onclick = () => {
    modal.style.display = "none"
}

//For the modal to close when the user clicks anywhere on the screen
window.onclick = (e) =>{
    if(e.target == modal){
        modal.style.display = "none"
    }
}

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
let data = [];

form.addEventListener("submit", (e) =>{
    console.log(`form.addEventListener called`)
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    let set = setsInput.value;
    let rep = repsInput.value;
    let pound = poundsInput.value;
    //Name validatio
    if(textInput.value === ""){
        console.log("formValidation called Failure")
        msg.innerHTML = "It cannot be blank"
    }else{
        console.log("formValidation called Success")
        msg.innerHTML = ""
    }
    //Sets validation
    if(set < 0){
        msg2.innerHTML = "It cannot be negative"
    }
    else if(isNaN(set)){
        msg2.innerHTML = "It needs to be a number"
    }else if(set === ""){
        msg2.innerHTML = "It cannot be blank"
    }else{//This will clear the warning
        msg2.innerHTML = ""
    }
    //Reps validation
    if(rep < 0){
        msg3.innerHTML = "It cannot be negative"
    }else if(isNaN(rep)){
        msg3.innerHTML = "It needs to be a number"
    }else if(rep === ""){
        msg3.innerHTML = "It cannot be blank"
    }else{
        msg3.innerHTML = ""
    }
    //Pounds validation
    if(pound < 0){
        msg4.innerHTML = "It cannnot be negative"
    }else if(isNaN(pound)){
        msg4.innerHTML = "It needs to be a number"
    }else if(pound === ""){
        msg4.innerHTML = "It cannot be blank"
    }else{
        msg4.innerHTML = ""
    }

    if(textInput.value !== "" && (set !== "" && !isNaN(set)) && (rep !== "" && !isNaN(rep)) && (pound !== "" && !isNaN(pound))){
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal")//This changes the html to dismiss
        add.click();//This clicks the dismiss button
        (() => {
            add.setAttribute("data-bs-dismiss","")
        })();//This makes sure that the form does not get send with blank inputs
    }
}

let acceptData = () =>{
    data.push({
        name: textInput.value,
        set: setsInput.value,
        rep: repsInput.value,
        pound: poundsInput.value,
    })
    localStorage.setItem("data", JSON.stringify(data))
    console.log(data)
}