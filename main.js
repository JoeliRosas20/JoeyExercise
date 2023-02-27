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
let data = [];

form.addEventListener("submit", (e) =>{
    console.log(`form.addEventListener called`)
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    if(textInput.value === ""){
        console.log("formValidation called Failure")
        msg.innerHTML = "It cannot be blank"
    }else{
        console.log("formValidation called Success")
        msg.innerHTML = ""
    }
    if(setsInput.value < 0){
        msg2.innerHTML = "It cannot be negative"
    }
}

let acceptData = () =>{
    data.push({
        text: textInput.value,
    })
    localStorage.setItem("data", JSON.stringify(data))
    console.log(data)
}