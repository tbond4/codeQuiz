var scoreDisplay = document.querySelector(".ScoreDisplay");

function addscore(){
var newItem= document.createElement("div");
newItem.textContent=localStorage.getItem("sinitials") + " " + localStorage.getItem("score");
console.log(localStorage.getItem("initials"));
scoreDisplay.append(newItem);
newItem.style.textAlign="center";
}
addscore();