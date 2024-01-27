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

resultsWindow.style.display = "none";

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
    if(questionList[count]) {
        if(questionList[count].option1 == "aQ") {
            questionA.textContent = quizQa[count].answer;
        } else if(questionList[count].option1 == "bQ") {
            questionB.textContent = quizQa[count].answer
        } else if(questionList[count].option1 == "cQ") {
            questionC.textContent = quizQa[count].answer;
        } else if(questionList[count].option1 == "dQ") {
            questionD.textContent = quizQa[count].answer;
        }

        if(questionList[count].option2 == "aQ") {
            questionA.textContent = quizQa[count].false1;
        } else if(questionList[count].option2 == "bQ") {
            questionB.textContent = quizQa[count].false1;
        } else if(questionList[count].option2 == "cQ") {
            questionC.textContent = quizQa[count].false1;
        } else if(questionList[count].option2 == "dQ") {
            questionD.textContent = quizQa[count].false1;
        }

        if(questionList[count].option3 == "aQ") {
            questionA.textContent = quizQa[count].false2;
        } else if(questionList[count].option3 == "bQ") {
            questionB.textContent = quizQa[count].false2;
        } else if(questionList[count].option3 == "cQ") {
            questionC.textContent = quizQa[count].false2;
        } else if(questionList[count].option3 == "dQ") {
            questionD.textContent = quizQa[count].false2;
        }

        if(questionList[count].option4 == "aQ") {
            questionA.textContent = quizQa[count].false3;
        } else if(questionList[count].option4 == "bQ") {
            questionB.textContent = quizQa[count].false3;
        } else if(questionList[count].option4 == "cQ") {
            questionC.textContent = quizQa[count].false3;
        } else if(questionList[count].option4 == "dQ") {
            questionD.textContent = quizQa[count].false3;
        }

        if(userAnswers[count] == "aI") {
        document.getElementById("aI").checked = true;
        } else if(userAnswers[count] == "bI") {
        document.getElementById("bI").checked = true;
        } else if(userAnswers[count] == "cI") {
        document.getElementById("cI").checked = true;
        } else if(userAnswers[count] == "dI")  {
        document.getElementById("dI").checked = true;
        }
    } else {
    shuffleArray(mulchoice);
    mulchoice[0].textContent = quizQa[count].answer;
    mulchoice[1].textContent = quizQa[count].false1;
    mulchoice[2].textContent = quizQa[count].false2;
    mulchoice[3].textContent = quizQa[count].false3;
    correctAnswers[count] = mulchoice[0].id;
    }

    if(questionList[count]) {
        
    } else {
        questionList.push( {
            option1: mulchoice[0].id,
            option2: mulchoice[1].id,
            option3: mulchoice[2].id,
            option4: mulchoice[3].id,
        });
    }
    }
    if(userAnswers[count] == "aI") {
        document.getElementById("aI").checked = true;
        } else if(userAnswers[count] == "bI") {
        document.getElementById("bI").checked = true;
        } else if(userAnswers[count] == "cI") {
        document.getElementById("cI").checked = true;
        } else if(userAnswers[count] == "dI") {
        document.getElementById("dI").checked = true;
        }
}

function nextQuestion() {
    const selectedRadioButton = document.querySelector('input[name="questionGroup"]:checked');
    if (selectedRadioButton) {
        userAnswers[count] = selectedRadioButton.id;
        selectedRadioButton.checked = false;
        count++;
        changeQuestion();
        console.log("Mulchoice Table -")
        
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
            questionB.textContent = quizQa[count].answer
        } else if(questionList[count].option1 == "cQ") {
            questionC.textContent = quizQa[count].answer;
        } else if(questionList[count].option1 == "dQ") {
            questionD.textContent = quizQa[count].answer;
        }

        if(questionList[count].option2 == "aQ") {
            questionA.textContent = quizQa[count].false1;
        } else if(questionList[count].option2 == "bQ") {
            questionB.textContent = quizQa[count].false1;
        } else if(questionList[count].option2 == "cQ") {
            questionC.textContent = quizQa[count].false1;
        } else if(questionList[count].option2 == "dQ") {
            questionD.textContent = quizQa[count].false1;
        }

        if(questionList[count].option3 == "aQ") {
            questionA.textContent = quizQa[count].false2;
        } else if(questionList[count].option3 == "bQ") {
            questionB.textContent = quizQa[count].false2;
        } else if(questionList[count].option3 == "cQ") {
            questionC.textContent = quizQa[count].false2;
        } else if(questionList[count].option3 == "dQ") {
            questionD.textContent = quizQa[count].false2;
        }

        if(questionList[count].option4 == "aQ") {
            questionA.textContent = quizQa[count].false3;
        } else if(questionList[count].option4 == "bQ") {
            questionB.textContent = quizQa[count].false3;
        } else if(questionList[count].option4 == "cQ") {
            questionC.textContent = quizQa[count].false3;
        } else if(questionList[count].option4 == "dQ") {
            questionD.textContent = quizQa[count].false3;
        }

        if(userAnswers[count] == "aI") {
        document.getElementById("aI").checked = true;
        } else if(userAnswers[count] == "bI") {
        document.getElementById("bI").checked = true;
        } else if(userAnswers[count] == "cI") {
        document.getElementById("cI").checked = true;
        } else if(userAnswers[count]=="dI") {
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
    var questionData = document.getElementById("questionData")
    questionData.textContent = "";
    var finalScore = 0;
    for(let i = 0; i < userAnswers.length; i++) {
        if(userAnswers[i].charAt(0) == correctAnswers[i].charAt(0)) {
            finalScore++;
            questionData.textContent = questionData.textContent + "Question "+ (i+1) + ": Correct! \n";
            questionData.textContent = questionData.textContent + "Your answer: ";
            questionData.textContent = questionData.textContent + quizQa[i].answer + "\n";
            questionData.textContent = questionData.textContent + "Correct answer: ";
            questionData.textContent = questionData.textContent + quizQa[i].answer + "\n" + "\n";
            
        } else {
            questionData.textContent = questionData.textContent + "Question "+ (i+1) + ": False :( \n";
            questionData.textContent = questionData.textContent + "Your answer: ";
            console.log(questionList[i]);
            if(userAnswers[i].charAt(0) == "a") {
                if(questionList[i].option2.charAt(0) == "a") {
                    questionData.textContent = questionData.textContent + quizQa[i].false1;
                } else if(questionList[i].option3.charAt(0) == "a") {
                    questionData.textContent = questionData.textContent + quizQa[i].false2;
                } else if(questionList[i].option4.charAt(0) == "a") {
                    questionData.textContent = questionData.textContent + quizQa[i].false3;
                }
            } else if(userAnswers[i].charAt(0) == "b") {
                if(questionList[i].option2.charAt(0) == "b") {
                    questionData.textContent = questionData.textContent + quizQa[i].false1;
                } else if(questionList[i].option3.charAt(0) == "b") {
                    questionData.textContent = questionData.textContent + quizQa[i].false2;
                } else if(questionList[i].option4.charAt(0) == "b") {
                    questionData.textContent = questionData.textContent + quizQa[i].false3;
                }
            } else if(userAnswers[i].charAt(0) == "c") {
                if(questionList[i].option2.charAt(0) == "c") {
                    questionData.textContent = questionData.textContent + quizQa[i].false1;
                } else if(questionList[i].option3.charAt(0) == "c") {
                    questionData.textContent = questionData.textContent + quizQa[i].false2;
                } else if(questionList[i].option4.charAt(0) == "c") {
                    questionData.textContent = questionData.textContent + quizQa[i].false3;
                }
            } else if(userAnswers[i].charAt(0) == "d") {
                if(questionList[i].option2.charAt(0) == "d") {
                    questionData.textContent = questionData.textContent + quizQa[i].false1;
                } else if(questionList[i].option3.charAt(0) == "d") {
                    questionData.textContent = questionData.textContent + quizQa[i].false2;
                } else if(questionList[i].option4.charAt(0) == "d") {
                    questionData.textContent = questionData.textContent + quizQa[i].false3;
                }
            }
            questionData.textContent = questionData.textContent + "\n";
            console.log(i + " here stupid")
            console.log(console.table(questionList[i]))
            questionData.textContent = questionData.textContent + "Correct answer: ";
            questionData.textContent = questionData.textContent + quizQa[i].answer + "\n" + "\n";
            
        }
    }
    var scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.textContent = "Final Score: " + finalScore + "/5 (" + (finalScore/5)*100 + "%)";
}

function restart() {
    correctAnswers = [];
    questionList = [];
    correctAnswers = [];
    userAnswers = [];
    resultsWindow.style.display = "none";
    startingWindow.style.display = "flex";
    count = 0;
}
