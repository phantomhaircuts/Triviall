//global variables
var score = 0;
var seconds= 0;
var timer;
var question= 0;
var questionNumber= 0;
var answer;

//arrays of questions, answers, and solutions
var defaultIndex = ["triv.i.al", "A","B","C","D"]
var questionIndex = ["What is the best selling album of all time?", "Who invented the electric guitar?", "Who won the first Rap Performance Grammy in 1989?", "Who has the longest running number one Billboard hit?", "Who holds the record for longest concert?"];
var answerIndex = [["Michael Jackson's, Thriller", "The Beatles, White Album", "Britney  Spears, Baby One More Time", "Back Street Boys, Millenium"],
["Leo Fender", "Orville Gibson", "Adolph Rickenbacker", "Les Paul"],
["Nas", "DJ Jazzy Jeff & the Fresh Prince", "LL Cool J", "Eric B and Rakim"],
["Mariah Carey & Boyz II Men", "Elvis", "Whitney Houston", "Carlos Santana"],
["Grateful Dead", "Phish", "Broken Social Scene", "Gonzales"]];
var correctIndex = ["Michael Jackson's, Thriller", "Adolph Rickenbacker", "DJ Jazzy Jeff & the Fresh Prince", "Mariah Carey & Boyz II Men", "Gonzales"]
var wrongIndex = ["#b,#c,#d", "#a, #b, #d", "#a, #c, #d", "#d, #b, #c", "#a, #b, #c"]

$( document ).ready(function() {
/////////////////////////////////////
//start game.
$("#start").on("click", function(){
//load question
  $("#start").css("display", "none")
  $("#question").text(questionIndex [0])
    $("#a").text(answerIndex[question][0])
    $("#b").text(answerIndex[question][1])
    $("#c").text(answerIndex[question][2])
    $("#d").text(answerIndex[question][3])
  questionNumber++;
  $("#questionNumber").text(questionNumber)
  console.log("button click");
  // checkAnswer();

//start timer
  timer = setInterval(function(){
  seconds++,
  $("#timer").text(seconds)
  $("#score").text(score)
  },1000)
  }
)

// answers
$(".answer").on("click", function(){
  console.log($(this).text());
  answer = $(this).text();
  if (answer === correctIndex[question]){
  console.log("correct")
  alert("correct!")
  score = score + 1000;
  $("#score").text(score);
}
else {
  console.log("Wrong")
  alert("Wrong!")
  score = score - 1000;
  $("#score").text(score);
}
  clearInterval(timer);
  $("#next").css("display", "block")

  }
)

/////////////////////////////////////
// next question function
$("#next").on("click", function(){
  clearInterval(timer)
  seconds = 0
  question ++;
  questionNumber ++;
  timer = setInterval(function(){
  seconds++;
  $("#questionNumber").text(questionNumber)
  $("#timer").text(seconds)
  $("#score").text(score)
}, 1000)
  $("#timer").text(seconds)
  $("#next").css("display", "none")
  $("#question").text(questionIndex[question])
    $("#a").text(answerIndex[question][0])
    $("#b").text(answerIndex[question][1])
    $("#c").text(answerIndex[question][2])
    $("#d").text(answerIndex[question][3])
    // checkAnswer();
  }
)
///////////////////////////////////////
//reset button
$("#reset").on("click", function(){
$("#start").css("display", "inline")
clearInterval(timer)
seconds = 0;
question = 0;
questionNumber= 0;
score= 0;
$("#question").text(defaultIndex[0])
$("#questionNumber").text("")
  $("#timer").text("")
  $("#score").text("")
    $("#a").text(defaultIndex[1])
    $("#b").text(defaultIndex[2])
    $("#c").text(defaultIndex[3])
    $("#d").text(defaultIndex[4])
  }
)
//Scoring
// function checkAnswer(){
//   $(correctIndex[question]).on("click", function right (){
//     console.log("score!")
//     console.log(correctIndex[question]);
//       alert("correct!")
//       score = score + 1000;
//     $("#score").text(score)
//     $(correctIndex[question]).off("click", right);
//     })
//   $(wrongIndex[question]).on("click", function wrong (){
//     console.log("wronganswer");
//     console.log("wrongIndex[question]")
//     alert("Wrong!")
//     score = score - 1000;
//     $("#score").text(score)
//     $(wrongIndex[question]).off("click", wrong);
//   })
// }
// function checkAnswer(){
//   if(questionNumber === 1){
//     console.log("works1")
//   }
//   else if (questionNumber === 2){
//     console.log("works2");
//   }
//   else if (questionNumber === 3){
//     console.log("works3");
//   }
//   else if (questionNumber === 4){
//     console.log("works4");
//     }
//   else if(questionNumber === 5){
//     console.log("works5");
//     }
// }
/////fin
  }
)
