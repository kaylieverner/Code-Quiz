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
                // if (secondsLeft === 0) {
                //     alert("Time's Up!");
                //     timeOut();
                // }
            }
            , 1000);
    };

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
        if (questionCounter == qaSet.length) {
            renderEnd();
        } else {
            renderQuestion();
        };
    };

    var messageAndResultDiv = document.querySelector(".messageAndResultDiv")
    var endMessage = document.querySelector(".highscore-h1");
    var scoreResult = document.querySelector(".highscore-h4");
    var inputField = document.querySelector(".inputClass");
    var inputBtn = document.querySelector(".inputBtnClass");

    // show the user their final score
    function renderEnd() {
        questionScreen.innerHTML = "";
        endMessage.textContent = "Quiz Completed!"
        scoreResult.textContent = "You got " + score + " of " + qaSet.length + " questions correct";
        inputBtn.classList.remove("hide");
        inputField.classList.remove("hide");
    };

    inputBtn.addEventListener("click", checkInputField);

    var highscoreName = document.querySelector(".highscoreName");
    var highscoreScore = document.querySelector(".highscoreScore");
    var takeQuizAgainBtn = document.getElementById("retakeBtn");
    var highscoresTitle = document.querySelector(".highscores-title");

    // make sure the user did not leave the field blank when logging their highscore
    function checkInputField () {
        var inputText = inputField.value;
        if (inputText == "") {
            alert("Enter a name or initials")
            checkInputField; 
        } else {collectScores(event)};
    };
   
    // save running log of highscores 
    function collectScores(event) {

            event.preventDefault();

            console.log("clicked");
            messageAndResultDiv.innerHTML = "";
            highscoresTitle.textContent = "Highscores";
    
            inputBtn.classList.add("hide");
            inputField.classList.add("hide");
            // takeQuizAgainBtn.classList.remove("hide");

            var playerScore = {
                name: inputField.value.trim(),
                scoreLog: score,
            };

            console.log(playerScore);
            localStorage.setItem("playerScore", JSON.stringify(playerScore)); 

            highscoreName.textContent = playerScore.name;
            highscoreScore.textContent = playerScore.scoreLog;

            //get recent submission 
            var recentUser = JSON.parse(localStorage.getItem("playerScore"));

            var HSNamediv = document.querySelector(".highscorenamediv");
            var HSScorediv = document.querySelector(".highscorescorediv");
            var recentUserName = document.createElement("p");
            var recentUserScore = document.createElement("p");
            HSNamediv.appendChild(recentUserName);
            HSScorediv.appendChild(recentUserScore);

            // recentUserName.textContent = recentUser.name; 
            // recentUserScore.textContent = recentUser.score; 

            // takeQuizAgainBtn.addEventListener("click", setTime);
            // takeQuizAgainBtn.addEventListener("click", renderQuestion);
        };

   

    

    });

//THINGS TO WORK ON 
//restart quiz using button - add logic to reset 
//when timer hits zero 0 - call renderend function; if reach end before timer hits 0, clearInterval(var); [var is only local at the moment, have to make global first];
