var MAX_TIME = 180;

var triviaUri = "https://opentdb.com/api.php?amount=20&category=31";
var timer = 180;

var question = {
	"category": "Entertainment: Japanese Anime & Manga",
	"type": "multiple",
	"difficulty": "easy",
	"question": "What is the last name of Edward and Alphonse in the Fullmetal Alchemist series.",
	"correct_answer": "Elric",
	"incorrect_answers": [
		"Ellis",
		"Eliek",
		"Elwood"
	]
}

function getAnswers(question) {
	var answers = Array.from(question['incorrect_answers']);
	answers.push(question['correct_answer']);

	return shuffle(answers);
}

function updateTimer() {
	timer--;
	if (timer < 0) {
		alert("Out of Time!");
		return;
	}
	var min = Math.floor(timer /60);
	var seconds = timer % 60;
	seconds = String("00" + seconds).slice(-2);
	var timeString = min + ":" + seconds;
	$("#timer").text(timeString);
	

	setTimeout(updateTimer, 1000);
}

function createAnswerDiv(answers) {
	var div = $("<div></div>");
	answers.forEach(function(answer, idx) {
		answerDiv = "<div class=\"radio\"> <label> <input type=\"radio\" name=\"answersRadios\" id=\"answer\"" + idx + " value=\"" + answer  + "\">" + answer;
		answerDiv += "</label></div>";
		$(div).append(answerDiv);

	});
	return div;
}

function updateQuizBox(question) {
	questionDiv = $('#quiz-box > .question');
	answerBox = $('#quiz-box > .answers');
	answerDiv = createAnswerDiv(getAnswers(question));
	answerBox.replaceWith(answerDiv);

	questionDiv.text(question["question"].replace(/\.$/, "?"));
	console.log(question["correct_answer"]);
}

$(document).ready(function() {
	updateQuizBox(question);
	setTimeout(updateTimer, 1000);

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
