document.addEventListener("DOMContentLoaded", function () {

    //Upon clicking the "start quiz" button: 

    //Hide the H1, p, and start button 

    var h1 = document.getElementById("h1");
    var p = document.getElementById("p");
    var startBtn = document.getElementById("start-button");

    startBtn.addEventListener("click", hideInitMsg);

    function hideInitMsg() {
        h1.classList.add("hide");
        p.classList.add("hide");
        startBtn.classList.add("hide");
    }

    //Start the timer countdown

    var timeElement = document.querySelector(".time");
    var secondsLeft = 15;

    startBtn.addEventListener("click", setTime);

    function setTime() {
        var timerInterval = setInterval(
            function () {
                secondsLeft--;
                timeElement.textContent = "Time Left: " + secondsLeft;
                if (secondsLeft === 0) {
                    clearInterval(timerInterval);
                }
                // if (secondsLeft === 0 && renderEnd ) {
                //     alert("Time's Up!");
                //     timeOut();
                // }
            }
            , 1000);
    };

    function timeOut() {
        renderEnd();
    };

    //TO DO// when timer hits 0, call renderEnd function 

    //If timer reaches 0 advance the user to the screen that displays the score/result and continue flow 

    //Begin displaying the questions 

    //questions, answer choices, and correct answer 
    var qaSet = [
        {
            questionOption: "Which HTML tag do you put Javascript code into?",
            choiceOptions: ["script", "js", "javascript", "java"],
            answer: "script"
        },
        {
            questionOption: "What does CSS stand for?",
            choiceOptions: ["cute style sheet", "concepts style sheet", "cascading style sheet", "coding style sheet"],
            answer: "cascading style sheet"
        },
        {
            questionOption: "How do you define a variable?",
            choiceOptions: ["variable =", "var =", "vari+=", "variable++"],
            answer: "var ="
        },
        {
            questionOption: "An ID selector is a name preceded by which symbol?",
            choiceOptions: ["$", "&", "*", "#"],
            answer: "#"
        }
    ];

    // Displaying the questions and answer choices 

    var questionCounter = 0;
    var score = 0;
    var questionScreen = document.querySelector(".questionScreen");
    var question = document.querySelector(".question-h2");
    var buttonDiv = document.querySelector(".button-div");

    startBtn.addEventListener("click", renderQuestion);

    function renderQuestion() {

        var q = qaSet[questionCounter];
        question.textContent = q.questionOption;
        buttonDiv.innerHTML = "";


        // Loop to generate the choices
        for (var i = 0; i < q.choiceOptions.length; i++) {

            // variable to create button
            let choiceBtn = document.createElement("button");
            choiceBtn.classList.add("btn", "btn-info", "m-3", "choiceBtn");
            choiceBtn.setAttribute("value", q.choiceOptions[i]);
            choiceBtn.textContent = q.choiceOptions[i];
            buttonDiv.appendChild(choiceBtn);

            choiceBtn.addEventListener("click", nextQuestion);
        };
    };

    // Get next question 

    var resultText = document.querySelector(".result-h4");
    var resultDiv = document.querySelector(".result-div");

    function nextQuestion() {

        console.log("clicked");
        console.log(this.textContent);
        console.log(qaSet[questionCounter].answer)

        if (this.textContent == qaSet[questionCounter].answer) {
            questionCounter++;
            score++;
            console.log(questionCounter);
            resultText.innerHTML = "Correct"
        } else {
            resultText.innerHTML = "Incorrect"
            questionCounter++
        };

        // check if we've run out of questions    
        if (questionCounter == 4) {
            renderEnd();
        } else {
            renderQuestion();
        };
    };

    var endMessage = document.querySelector(".highscore-h1");
    var scoreResult = document.querySelector(".highscore-h4");
    var inputField = document.querySelector(".inputClass");
    var inputBtn = document.querySelector(".inputBtnClass");

    function renderEnd() {
        questionScreen.innerHTML = "";

        inputBtn.classList.remove("hide");
        inputField.classList.remove("hide");

        endMessage.textContent = "Quiz Completed!"
        scoreResult.textContent = "You got " + score + " of " + qaSet.length + " questions correct";

        inputBtn.addEventListener("click", function (event) {
            event.preventDefault();

            var playerScore = {
                name: inputField.value.trim(),
                scoreLog: score,
            };

            console.log(playerScore);

            localStorage.setItem("playerScore", JSON.stringify("playerScore"));

            var highscoreDiv = document.createElement("div");
            var highscoreDivName = document.createElement("div");
            var highscoreDivScore = document.createElement("div");
            var highscoreName = document.createElement("p");
            var highscoreScore = document.createElement("p");

            questionScreen.appendChild(highscoreDiv);
            highscoreDiv.appendChild(highscoreDivName);
            highscoreDiv.appendChild(highscoreDivScore);
            highscoreDivName.appendChild(highscoreName);
            highscoreDivScore.appendChild(highscoreScore);

            highscoreDiv.classList.add("row");
            highscoreDivName.classList.add("col-6");
            highscoreDivScore.classList.add("col-6");

            endMessage.textContent = "Highscores";
            scoreResult.textContent = "";
            inputBtn.classList.add("hide");
            inputField.classList.add("hide");

            highscoreName.textContent = playerScore.name;
            highscoreScore.textContent = playerScore.scoreLog;

            startBtn.addEventListener("click", restartQuiz());

        });


    };

    function restartQuiz() {


    };

});

//THINGS TO WORK ON 

//submitting input field for highscore blank - add logic 
//restart quiz using button - add logic to reset 
// for ending function - create elements directly within HTML
//create separate HTML page for highscores (list with scores) 
