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
    var secondsLeft = 45;

    startBtn.addEventListener("click", setTime);

    function setTime() {
        var timerInterval = setInterval(
            function () {
                secondsLeft--;
                timeElement.textContent = "Time Left: " + secondsLeft;
                if (secondsLeft === 0) {
                    clearInterval(timerInterval);
                }
            }
            , 1000);
    };

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
    var questionScreen = document.querySelector(".questionScreen")

    startBtn.addEventListener("click", renderQuestion);


    function renderQuestion() {


        var questionDiv = document.createElement("div");
        var question = document.createElement("h2");
        var buttonDiv = document.createElement("div");

        questionScreen.appendChild(questionDiv);

        var q = qaSet[questionCounter].questionOption;
        questionDiv.appendChild(question);
        question.textContent = q;

        // Loop to generate the choices
        for (var i = 0; i < 4; i++) {

            // variable to create button
            let choiceBtn = document.createElement("button");
            choiceBtn.classList.add("btn", "btn-info", "m-3", "choiceBtn");
            questionScreen.appendChild(buttonDiv);
            buttonDiv.appendChild(choiceBtn);
            choiceBtn.textContent = qaSet[questionCounter].choiceOptions[i];

            choiceBtn.addEventListener("click", nextQuestion);
        };
    };

    function nextQuestion() {
        console.log("clicked");
        console.log(this.textContent);
        console.log(qaSet[questionCounter].answer)

        var resultDiv = document.createElement("div");
        var resultText = document.createElement("h4");
        questionScreen.appendChild(resultDiv);
        resultDiv.appendChild(resultText);

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

    function renderEnd() {
        questionScreen.innerHTML = "";
        var endMessage = document.createElement("h1");
        var scoreResult = document.createElement("h4");
        var inputField = document.createElement("input");
        var inputBtn = document.createElement("button");

        questionScreen.appendChild(endMessage);
        questionScreen.appendChild(scoreResult);
        questionScreen.appendChild(inputField);
        questionScreen.appendChild(inputBtn);

        inputBtn.classList.add("btn", "btn-outline-secondary", "inputBtnClass");
        inputBtn.textContent = "Submit Name";

        endMessage.textContent = "Quiz Completed!"
        scoreResult.textContent = "You got " + score + " of 4 questions correct";

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

            var playAgainBtn = document.createElement("button");


        });
    };



});