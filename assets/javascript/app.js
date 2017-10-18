var MAX_TIME = 180;

var triviaUri = "https://opentdb.com/api.php?amount=20&category=31";
var timer = 180;
var currentQuestion = 0;
var question;


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

function checkAnswer() {
	var selected = $('#quiz-box input:radio:checked').val();
	if (selected === question['correct_answer']) {
		alert("You got it!");
		currentQuestion++;
		question = questions['results'][currentQuestion];
		updateQuizBox(question);
	} else {
		alert("This is not the right answer!");
	}
}

function createAnswerDiv(answers) {
	var div = $("<div class=\"answers\"></div>");
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

	questionDiv.html(question["question"].replace(/\.$/, "?"));
	console.log(question["correct_answer"]);
}

$(document).ready(function() {
	$("#submitButton").on("click", checkAnswer);
	question = questions['results'][currentQuestion];
	updateQuizBox(question);
	updateTimer();


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


var questions = {
"response_code": 0,
"results": [
{
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
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "In &quot;Inuyasha&quot;, what are the heros are looking to collect?",
"correct_answer": "Jewel Shards",
"incorrect_answers": [
"Dragon Balls",
"Rave Stones",
"Sacred Stones"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "In &quot;Fairy Tail&quot;, what is the nickname of Natsu Dragneel?",
"correct_answer": "The Salamander",
"incorrect_answers": [
"The Dragon Slayer",
"The Dragon",
"The Demon"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "In the 9th Pokemon movie, who is the Prince of the Sea?",
"correct_answer": "Manaphy",
"incorrect_answers": [
"Ash",
"May",
"Phantom"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "Who is the true moon princess in Sailor Moon?",
"correct_answer": "Sailor Moon",
"incorrect_answers": [
"Sailor Venus",
"Sailor Mars",
"Sailor Jupiter"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "medium",
"question": "In the anime, &quot;Super Sonicio&quot;, what is Super Sonico&#039;s favorite food?",
"correct_answer": "Macroons",
"incorrect_answers": [
"Ice Cream",
"Pizza",
"Chips"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "hard",
"question": "Which of the following countries does &quot;JoJo&#039;s Bizarre Adventure: Stardust Crusaders&quot; not take place in?",
"correct_answer": "Philippines",
"incorrect_answers": [
"India",
"Pakistan",
"Egypt"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "medium",
"question": "Which one of these Manga titles was not created by Urasawa Naoki?",
"correct_answer": "My Father&#039;s Journal",
"incorrect_answers": [
"Billy Bat",
"20th Century Boys",
"Monster"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "boolean",
"difficulty": "easy",
"question": "Gosho Aoyama Made This Series: (Detective Conan / Case Closed!)",
"correct_answer": "True",
"incorrect_answers": [
"False"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "hard",
"question": "Which song was the callsign for Stefan Verdemann&#039;s KWFM radio station in Urasawa Naoki&#039;s &quot;Monster&quot;?",
"correct_answer": "Over the Rainbow",
"incorrect_answers": [
"What a Wonderful World",
"When You Wish Upon A Star",
"Singing In The Rain"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "medium",
"question": "Which of the following anime of the mecha genre began airing in 1982?",
"correct_answer": "The Super Dimension Fortress Macross",
"incorrect_answers": [
"Mobile Suit Gundam",
"Armored Trooper VOTOMS",
"Neon Genesis Evangelion"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "boolean",
"difficulty": "easy",
"question": "Kiznaiver is an adaptation of a manga.",
"correct_answer": "False",
"incorrect_answers": [
"True"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "Satella in &quot;Re:Zero&quot; is the witch of what?",
"correct_answer": "Envy",
"incorrect_answers": [
"Pride",
"Sloth",
"Wrath"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "medium",
"question": "In &quot;One Piece&quot;, which one of the following is NOT an Ancient Weapon?",
"correct_answer": "Jupiter",
"incorrect_answers": [
"Uranus",
"Poseidon",
"Pluton"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "hard",
"question": "In &quot;One Piece&quot;, who confirms the existence of the legendary treasure, One Piece?",
"correct_answer": "Edward &quot;Whitebeard&quot; Newgate",
"incorrect_answers": [
"Former Marine Fleet Admiral Sengoku",
"Pirate King Gol D Roger",
"Silvers Rayleigh"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "hard",
"question": "In the &quot;Dragon Ball&quot; franchise, what is the name of Goku&#039;s brother?",
"correct_answer": "Raditz",
"incorrect_answers": [
"Gohan",
"Vegeta",
"Bardock"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "hard",
"question": "Which person from &quot;JoJo&#039;s Bizarre Adventure&quot; does NOT house a reference to a band, artist, or song earlier than 1980?",
"correct_answer": "Giorno Giovanna",
"incorrect_answers": [
"Josuke Higashikata",
"Jolyne Cujoh",
"Johnny Joestar"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "In &quot;To Love-Ru&quot;, Ren and Run are from what planet?",
"correct_answer": "Memorze",
"incorrect_answers": [
"Deviluke",
"Mistletoe",
"Okiwana"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "boolean",
"difficulty": "easy",
"question": "In the &quot;To Love-Ru&quot; series, Golden Darkness is sent to kill Lala Deviluke.",
"correct_answer": "False",
"incorrect_answers": [
"True"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "medium",
"question": "In &quot;Highschool DxD&quot;, Koneko Toujou is from what race?",
"correct_answer": "Nekomata",
"incorrect_answers": [
"Kitsune",
"Human",
"Kappa"
]
}
]
}