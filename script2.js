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
            choiceOptions: ["<script>", "<js>",  "<javascript>", "<java>"],
            answer: "<script>"
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
            choiceOptions: ["$", "&",  "*", "#"],
            answer: "#"
        }
    ];

    startBtn.addEventListener("click", renderQuestion);

    function renderQuestion() {
        var questionCounter = 0; 
        var score = 0; 

        var questionScreen = document.querySelector(".questionScreen")
        var questionDiv = document.createElement("div");
        var question = document.createElement("h2");
        var buttonDiv = document.createElement("div");

        questionScreen.appendChild(questionDiv);

        var q = qaSet[questionCounter].questionOption;
        questionDiv.appendChild(question);
        question.innerHTML = q; 

        // Loop to generate the choices
        for (var i = 0; i < 4; i++) {

          // variable to create button
          var choiceBtn = document.createElement("button");
          choiceBtn.classList.add("btn", "btn-info", "m-3", "choiceBtn");
          questionScreen.appendChild(buttonDiv);
          buttonDiv.appendChild(choiceBtn);

          choiceBtn.innerHTML = qaSet[i].choiceOptions[0];

        // var objChoiceOptions = JSON.stringify(qaSet[i].choiceOptions);
        // console.log(objChoiceOptions);

        


        //   choiceBtn.innerHTML = qaSet[i].choiceOptions[0]
        //   choiceBtn.innerHTML = qaSet[i].choiceOptions[2]
        //   choiceBtn.innerHTML = qaSet[i].choiceOptions[3]
        //   choiceBtn.innerHTML = qaSet[i].choiceOptions[4]

        //   choiceBtn.setAttribute("value", choiceOptions[i]);

        //   choiceBtn.innerText = qaSet[0].choiceOptions[0];
        //   choiceBtn.innerText = qaSet[0].choiceOptions[1];
        //   choiceBtn.innerText = qaSet[0].choiceOptions[2];
        //   choiceBtn.innerText = qaSet[0].choiceOptions[3];

        //   choiceBtn.setAttribute("value", qaSet[i].choiceOptions[i]);

        //click event when a user selects an option 

          
          }
       }

       
       

//Upon clicking an answer option: 

    //If correct answer is selected, display the message "correct" and increase score 

    //If incorrect answer is selected, display the message "incorrect"

    //Advance on to the next question and answer set 

//Upon answering the last question: 

    //Display the score/result to the user 

    //Prompt an input box to add the user's name to the highscores leaderboard 

    //Provide options to return to main page?

});