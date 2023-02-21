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