let openModal = document.getElementById("isabutton")
let modaljamal = document.getElementById("modalol")
let closebutton = document.getElementById("closebutn");

openModal.onclick = function () {
    
    modaljamal.style.display = "block"
}
closebutton.onclick = function () {
    modaljamal.style.display = "none"
}
window.onclick = function(r){
    if(r.target.id === "modalol"){
        modaljamal.style.display = "none"
    }
}