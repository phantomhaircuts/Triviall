//global variables
var score = 0;
var seconds= 0;
var timer;
var question= 0;
var questionNumber= 0;
var answer;
//arrays of questions, answers, and solutions
var defaultIndex = ["triv.i.al", "A","B","C","D"];
var questionIndex = ["What is the best selling album of all time?", "Who invented the electric guitar?", "Who won the first Rap Performance Grammy in 1989?", "Who has the longest running number one Billboard hit?", "Who holds the record for longest concert?", "What artist has the most number one Singles?", "Which artist has never had a number one song?", "Which song does not contain any samples?", "What was the first hip hop song to chart on Billboard?","What band has had the most members from start to finish?", "Good Game!"];
var answerIndex = [["Michael Jackson's, Thriller", "The Beatles, White Album", "Britney  Spears, Baby One More Time", "Back Street Boys, Millenium"],
["Leo Fender", "Orville Gibson", "Adolph Rickenbacker", "Les Paul"],
["Nas", "DJ Jazzy Jeff & the Fresh Prince", "LL Cool J", "Eric B and Rakim"],
["Mariah Carey & Boyz II Men", "Elvis", "Whitney Houston", "Carlos Santana"],
["Grateful Dead", "Phish", "Broken Social Scene", "Gonzales"],
["Madonna", "Janet Jackson", "The Supremes", "The Beatles"],
["Bruce Springsteen", "Beyonce", "Stevie Wonder", "Katy Perry"],
["Michael Jackson - Beat It", "Daft Punk - One More Time", "Kanye West- All of the Lights", "The Beatles - Come Together"],
["Planet Rock - Afrika Bambaataa", "Sugarhill Gang - Rapper's Delight", "Beastie Boys - Brass Monkey"],
["Santana", "Guns N Roses", "AC/DC", "Oasis" ],
["","","",""]];
var correctIndex = ["Michael Jackson's, Thriller", "Adolph Rickenbacker", "DJ Jazzy Jeff & the Fresh Prince", "Mariah Carey & Boyz II Men", "Gonzales", "The Beatles", "Bruce Springsteen", "Kanye West- All of the Lights", "Sugarhill Gang - Rapper's Delight", "Santana"];

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
  else if (answer === ""){
    alert("good game!")
    reset();
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
  }
)
///////////////////////////////////////
//reset button
$("#reset").on("click", function reset (){
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
  $("#next").css("display", "none")
  }
)
/////fin
  }
)
