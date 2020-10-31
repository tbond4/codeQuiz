var startButton = document.querySelector(".startButton");
var question =document.querySelector(".question");
var timer = document.querySelector(".timer");
var title=document.querySelector(".title");
var hide =document.querySelector(".hide");
var storedInitials;
var viewScores=document.querySelector(".viewScores")
var answersEl=document.querySelector(".answers")
var correct=document.querySelector(".correct")
var option1=document.querySelector("#possible1");
var option2=document.querySelector("#possible2");
var option3=document.querySelector("#possible3");
var option4=document.querySelector("#possible4");
var initials=document.querySelector(".textInput");
var scoreDisplay = document.querySelector(".ScoreDisplay");
var saveScoreButton= document.querySelector(".saveScores");
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close");
var questionArr=["Choose the correct HTML element for the largest heading:", "Which HTML element defines navigation links?", "What does CSS stand for?", "Where in an HTML document is the correct place to refer to an external style sheet?", "How do you insert a comment in a CSS file?"];
var answersArr=[
    ["A. <heading>", "B. <title>", "C. <h1>","D. <h8>"],
    ["A. <nav>","B. <navigation>","C. <menu>","D. <selector>"],
    ["A. Creative Style Selectors","B. Colorful Stlye Sheets","C. Computer Style Selctos","D. Cascading Style Sheets"],
    ["A. In the <body> section", "B. In the <head> section", "C. In a <script> tag","D. At the end of the Document"],
    ["A. // this comment","B. // this comment //","C. /$ this comment","D. /* this comment */"],  
];
var correctAns=["C","A","D","B","D"];

var timeleft;
var i;
function startQuiz(){
    timeleft=100;
    i=0;
   var time=setInterval(function(){
        timeleft--;
        timer.textContent="Time:" + timeleft;
        if(timeleft==0){
            clearInterval(time);
         }
    },1000)
   
title.textContent="";
startButton.style.display = "none";
displayQuiz();


}

function displayQuiz(){
    if(i==5){
        question.textContent="";
    option1.textContent="";
    option2.textContent="";
    option3.textContent="";
    option4.textContent="";
    answersEl.style.display = "none";
    
        finalScreen();
        return;
    }
   
    question.textContent=questionArr[i]
    option1.textContent=answersArr[i][0];
    option2.textContent=answersArr[i][1];
    option3.textContent=answersArr[i][2];
    option4.textContent=answersArr[i][3];
   answersEl.style.display = "block";
   i++;
  
;}

function finalScreen(){
    title.textContent="All Done!"
    question.textContent="Your score: " + timeleft;
    correct.style.display = "none";
    viewScores.style.display="block";
    saveScoreButton.style.display="block";
    localStorage.setItem("score", timeleft);
}
startButton.addEventListener("click", startQuiz);
answersEl.addEventListener("click", function(event){
   
    var target=event.target;
   
    if(target.dataset.letter == correctAns[i-1]){
        correct.textContent="Correct!";
        correct.style.display = "block";
    }else{
        correct.textContent="Wrong!";
        correct.style.display = "block";
        timeleft-=20;
    }
    displayQuiz();
});
saveScoreButton.addEventListener("click", function(event){
    event.stopPropagation();
    event.preventDefault();
    modal.style.display="block";

})

closeButton.addEventListener("click", function(event){
    
    event.preventDefault();
    event.stopPropagation;
    
    localStorage.setItem("sinitials",initials.value);
    // addscore();
    modal.style.display="none";
    
})
// function addscore(){
//     console.log("test")
// var newItem= document.createElement("div");
// newItem.textContent=localStorage.getItem("sinitials") + " " + localStorage.getItem("score");
// console.log(localStorage.getItem("initials"));
// scoreDisplay.append(newItem);

// }