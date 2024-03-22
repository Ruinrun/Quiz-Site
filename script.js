// Questions that will be asked
const Questions = [{
	q: "What is the domestic cat breed most closely related to wildcats?",
	a: [{ text: "Sphynx", isCorrect: false },
	{ text: "Maine Coon", isCorrect: false },
	{ text: "Savannah", isCorrect: true },
	{ text: "Siamese", isCorrect: false }
	]

},
{
	q: "What is known as the city of cats?",
	a: [{ text: "Aoshima", isCorrect: false, isSelected: false },
	{ text: "Nekoshima", isCorrect: false },
	{ text: "Cairo", isCorrect: false },
	{ text: "Istanbul", isCorrect: true }
	]

},
{
	q: "What beverage do cats enjoy most?",
	a: [{ text: "Orange Juice", isCorrect: false },
	{ text: "Milk", isCorrect: false },
	{ text: "Water", isCorrect: true },
	{ text: "Apple Juice", isCorrect: false }
	]

},
{
	q: "Which cat is best for those with allergies? ",
	a: [{ text: "Sphynx", isCorrect: false },
	{ text: "Maine Coon", isCorrect: false },
	{ text: "Donsky", isCorrect: true },
	{ text: "Devon Rex", isCorrect: false }
	]

},

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
