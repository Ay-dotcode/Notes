const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".createBtn");
let notes = document.querySelectorAll(".input-box");
const resetBtn = document.getElementById("resetBtn")

function createNote() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Images/delete.png";
    img.alt = "delete";
    notesContainer.appendChild(inputBox).appendChild(img);
    inputBox.onkeyup = function () {
        updateStorage();
    }
    resetBtnVisible();
}
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") {
        e.target.parentElement.remove();
        updateStorage();
        resetBtnVisible();
    }
});
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
function showNote() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
function resetNotes() {
    localStorage.removeItem("notes");
    notesContainer.innerHTML = "";
    resetBtnVisible();
}
function resetBtnVisible() {
    if (notesContainer.innerHTML === "")
        resetBtn.style.display = "none";
    else
        resetBtn.style.display = "block";
}
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
showNote();