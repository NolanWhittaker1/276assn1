const quizQa = [
    {
        number: 1,
        question: "Charmander is what type of Pokemon?",
        answer: "Fire",
        false1: "Water",
        false2: "Grass",
        false3: "Infernal"
      },
      {
        number: 2,
        question: "Ivysaur evolves into which Pokemon?",
        answer: "Venusaur",
        false1: "He does not evolve",
        false2: "Bulbasaur",
        false3: "Grass Guy"
      },
      {
        number: 3,
        question: "What is Pikachu's primary type?",
        answer: "Electric",
        false1: "Fire",
        false2: "Water",
        false3: "Ground"
      },
      {
        number: 4,
        question: "What is the name of the first Legendary Pokemon introduced in Generation I?",
        answer: "Articuno",
        false1: "Zapdos",
        false2: "Moltres",
        false3: "Mewtwo"
      },
      {
        number: 5,
        question: "Which Pokemon is known as the 'Dragon' Pokemon?",
        answer: "Dragonite",
        false1: "Charizard",
        false2: "Garchomp",
        false3: "Salamence"
      }
  ];
var correctAnswers = [];
var userAnswers = [];
var questionList = [];


const questionWindow = document.getElementById("questionWindow");
const startingWindow = document.getElementById("startingWindow");
const resultsWindow = document.getElementById("resultsWindow");

var startingButton = document.getElementById("startingButton");
var nextButton = document.getElementById("nextButton");
var backButton = document.getElementById("backButton");
var restartButton = document.getElementById("restartButton");

var questionNum = document.getElementById("questionNum");
var questionCurrent = document.getElementById("questionCurrent");
var questionA = document.getElementById("aQ");
var questionB = document.getElementById("bQ");
var questionC = document.getElementById("cQ");
var questionD = document.getElementById("dQ");

var count = 0;

startingButton.addEventListener('click', function() { 
    questionWindow.style.display = "block";
    startingWindow.style.display = "none";
    changeQuestion();
});

nextButton.addEventListener('click', function () {
    nextQuestion();
});

backButton.addEventListener('click', function () {
    back();
});

restartButton.addEventListener('click', function () {
    restart();
});



function changeQuestion() {
    if(count == 0 ) {
        backButton.style.visibility = "hidden";
    } else {
        backButton.style.visibility = "visible";
    }

    mulchoice = [questionA, questionB, questionC, questionD];
    if(count == quizQa.length) {
        questionWindow.style.display = "none";
        resultsWindow.style.display = "block";
        results();
    } else {
    if(count == (quizQa.length-1)) {
        nextButton.textContent = "Submit";
    }
    questionNum.textContent = "Question #" + (count +1);
    questionCurrent.textContent = quizQa[count].question;
    shuffleArray(mulchoice);
    mulchoice[0].textContent = quizQa[count].answer;
    mulchoice[1].textContent = quizQa[count].false1;
    mulchoice[2].textContent = quizQa[count].false2;
    mulchoice[3].textContent = quizQa[count].false3;
    correctAnswers[count] = mulchoice[0].id;
    console.log(mulchoice[0].id);
    if(questionList[count]) {
        console.log("exists")
    } else {
        questionList.push( {
            option1: mulchoice[0].id,
            option2: mulchoice[1].id,
            option3: mulchoice[2].id,
            option4: mulchoice[3].id,
        });
    }
    }
    console.log(questionList);
}

function nextQuestion() {
    const selectedRadioButton = document.querySelector('input[name="questionGroup"]:checked');
    if (selectedRadioButton) {
        userAnswers[count] = selectedRadioButton.id;
        selectedRadioButton.checked = false;
        count++;
        changeQuestion();
    } else {
        alert("Please select an option!");
    }
}

function back() {
    if(count != 0) {
        if(count == 1 ) {
            backButton.style.visibility = "hidden";
        } else {
            backButton.style.visibility = "visible";
        }
        count--;
        questionNum.textContent = "Question #" + (count +1);
        questionCurrent.textContent = quizQa[count].question;

        if(questionList[count].option1 == "aQ") {
            questionA.textContent = quizQa[count].answer;
        } else if(questionList[count].option1 == "bQ") {
            questionA.textContent = quizQa[count].false1;
        } else if(questionList[count].option1 == "cQ") {
            questionA.textContent = quizQa[count].false2;
        } else if(questionList[count].option1 == "dQ") {
            questionA.textContent = quizQa[count].false3;
        }

        if(questionList[count].option2 == "aQ") {
            questionB.textContent = quizQa[count].answer;
        } else if(questionList[count].option2 == "bQ") {
            questionB.textContent = quizQa[count].false1;
        } else if(questionList[count].option2 == "cQ") {
            questionB.textContent = quizQa[count].false2;
        } else if(questionList[count].option2 == "dQ") {
            questionB.textContent = quizQa[count].false3;
        }

        if(questionList[count].option3 == "aQ") {
            questionC.textContent = quizQa[count].answer;
        } else if(questionList[count].option3 == "bQ") {
            questionC.textContent = quizQa[count].false1;
        } else if(questionList[count].option3 == "cQ") {
            questionC.textContent = quizQa[count].false2;
        } else if(questionList[count].option3 == "dQ") {
            questionC.textContent = quizQa[count].false3;
        }

        if(questionList[count].option4 == "aQ") {
            questionD.textContent = quizQa[count].answer;
        } else if(questionList[count].option4 == "bQ") {
            questionD.textContent = quizQa[count].false1;
        } else if(questionList[count].option4 == "cQ") {
            questionD.textContent = quizQa[count].false2;
        } else if(questionList[count].option4 == "dQ") {
            questionD.textContent = quizQa[count].false3;
        }
        console.log(userAnswers[count] + " HERE :ASD")
    if(userAnswers[count] == "aI") {
        document.getElementById("aI").checked = true;
    } else if(userAnswers[count] == "bI") {
        document.getElementById("bI").checked = true;
    } else if(userAnswers[count] == "cI") {
        document.getElementById("cI").checked = true;
    } else {
        document.getElementById("dI").checked = true;
    }
    } 
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function results() {
    console.log("user Finished")
    console.log(userAnswers)
    console.log(correctAnswers)
    var questionData = document.getElementById("questionData")
    questionData.textContent = "";
    var finalScore = 0;
    for(let i = 0; i < userAnswers.length; i++) {
        if(userAnswers[i].charAt(0) == correctAnswers[i].charAt(0)) {
            finalScore++;
            questionData.textContent = questionData.textContent + "Question "+ (i+1) + ": Correct! \n";
            questionData.textContent = questionData.textContent + "Your answer: ";
            questionData.textContent = questionData.textContent + quizQa[i].answer + "\n";
            
        } else {
            questionData.textContent = questionData.textContent + "Question "+ (i+1) + ": False :( \n";
            questionData.textContent = questionData.textContent + "Correct answer: ";
            questionData.textContent = questionData.textContent + quizQa[i].answer + "\n";
            
        }
    }
    var scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.textContent = "Final Score: " + finalScore + "/5 (" + (finalScore/5)*100 + "%)";
}

function restart() {
    correctAnswers = [];
    questionList = [];
    correctAnswers = [];
    resultsWindow.style.display = "none";
    startingWindow.style.display = "flex";
    count = 0;
}
