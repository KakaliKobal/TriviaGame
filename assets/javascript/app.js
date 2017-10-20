
var NUM_QUESTIONS = 20;
var MAX_TIME = NUM_QUESTIONS * 9;
var triviaUri = "https://opentdb.com/api.php?amount=" + NUM_QUESTIONS + "&category=31";
var timer = MAX_TIME;
var currentQuestion = 0;
var question;
var questions;
var answers;
var timerObj;


function getAnswers(question) {
	var answers = Array.from(question['incorrect_answers']);
	answers.push(question['correct_answer']);

	return shuffle(answers);
}

function updateTimer() {
	timer--;
	if (timer < 0) {
		alert("Out of Time!");
		showScore();
		return;
	}
	var min = Math.floor(timer /60);
	var seconds = timer % 60;
	seconds = String("00" + seconds).slice(-2);
	var timeString = min + ":" + seconds;
	$("#timer").text(timeString);
	

	timerObj = setTimeout(updateTimer, 1000);
}

function checkAnswer() {
	var selected = $('#quiz-box input:radio:checked').val();

	if (answers[selected] === question['correct_answer']) {
		currentQuestion++;
		if (currentQuestion == questions.length) {
			showScore();
			return
		}
		question = questions[currentQuestion];
		updateQuizBox(question);
	} else {
		alert("This is not the right answer!");
	}
}

function startGame() {
	$("#start").hide();
	$("#quiz-box").show();
	$("#timer").show();

	question = questions[currentQuestion];
	updateQuizBox(question);
	updateTimer();
}

function showScore() {
	clearInterval(timerObj);
	$('#quiz-box').empty();
	score = "<div class = \"score text-center\"> <h3>You answered " + currentQuestion + " correctly out of " + NUM_QUESTIONS + " questions!";
	score += "</h3></div>";
	$('#quiz-box').append(score);

	

}

function createAnswerDiv(answers) {
	var div = $("<div class=\"answers\"></div>");
	answers.forEach(function(answer, idx) {
		answerDiv = "<div class=\"radio\"> <label> <input type=\"radio\" name=\"answersRadios\" id=\"answer" + idx + "\" value=\"" + idx  + "\">" + answer;
		answerDiv += "</label></div>";
		$(div).append(answerDiv);

	});
	return div;
}

function updateQuizBox(question) {
	questionDiv = $('#quiz-box > .question');
	answerBox = $('#quiz-box > .answers');
	answers = getAnswers(question);
	answerDiv = createAnswerDiv(answers);
	answerBox.replaceWith(answerDiv);

	questionDiv.html(question["question"].replace(/\.$/, "?"));
	$("#quiz-box > .answers > .radio").on("click", checkAnswer);
	
}

$(document).ready(function() {
	$.ajax({url: triviaUri})
	.done(function(response) {
		$("#startButton").on("click", startGame);

		questions = response.results;
		
	});
	


});


function shuffle(array) {
////  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}