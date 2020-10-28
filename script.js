var startButton = document.querySelector(".startButton");
var question =document.querySelector(".question");
var timer = document.querySelector(".timer");
var questionArr=["Choose the correct HTML element for the largest heading:", "Which HTML element defines navigation links?", "What does CSS stand for?", "Where in an HTML document is the correct place to refer to an external style sheet?", "How do you insert a comment in a CSS file?"];
var answersObj={
    questionOne:["<heading>", "<title>", "<h1>","<h8>"],
    questionTwo:["<nav>","<navigation>","<menu>","<selector>"],
    questionThree:["Creative Style Selectors","Colorful Stlye Sheets","Computer Style Selctos","Cascading Style Sheets"],
    questionFour:["In the <body> section", "In the <head> section", "In a <script> tag","At the end of the Document"],
    questionFive:["// this comment","// this comment //","/$ this comment","/* this comment */"],  
};
var correctAns=[],
var time;
function startQuiz(){
    time=setInterval(function(){

    },1000)
}
startButton.addEventListener("click", startQuiz());