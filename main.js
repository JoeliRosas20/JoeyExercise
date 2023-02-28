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
        console.log("formValidation called Failure")
        msg.innerHTML = "It cannot be blank"
    }else{
        console.log("formValidation called Success")
        msg.innerHTML = ""
    }
    //Sets validation
    if(setIsNegative){
        console.log("called msg2")
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