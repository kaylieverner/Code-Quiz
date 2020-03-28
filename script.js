document.addEventListener("DOMContentLoaded", function () {

    // On Start Quiz button click: [hide h1, p, & start button], [start timer], and [advance to question set] 

    // Hide H1, P, and Start Button 

    var h1 = document.getElementById("h1");
    var p = document.getElementById("p");
    var startBtn = document.getElementById("start-button");

    startBtn.addEventListener("click", hideInitMsg);

    function hideInitMsg() {
        h1.classList.add("hide");
        p.classList.add("hide");
        startBtn.classList.add("hide");
    }

    // Interval function for Time Left counter 

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


    // Display first question upon clicking start quiz button 

    function showQuestions() {

        // Define elements to insert questions, choices, and answer message

        var questionScreen = document.querySelector(".questionScreen")
        var questionDiv = document.createElement("div");
        var question = document.createElement("h2");
        var buttonDiv = document.createElement("div");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
        var resultDiv = document.createElement("div");
        var result = document.createElement("h4");
        var nextBtnDiv = document.createElement("div"); 
        var nextBtn = document.createElement("button"); 

        questionScreen.appendChild(questionDiv);
        questionDiv.appendChild(question);
        questionScreen.appendChild(buttonDiv);
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
        buttonDiv.appendChild(button3);
        buttonDiv.appendChild(button4);
        questionScreen.appendChild(resultDiv);
        resultDiv.appendChild(result);
        questionScreen.appendChild(nextBtnDiv); 
        nextBtnDiv.appendChild(nextBtn);

        button1.classList.add("btn", "btn-info", "m-3", "btn1");
        button2.classList.add("btn", "btn-info", "m-3", "btn2");
        button3.classList.add("btn", "btn-info", "m-3", "btn3");
        button4.classList.add("btn", "btn-info", "m-3", "btn4");
        nextBtn.classList.add("btn", "btn-secondary", "m-3", "btn1", "nextBtn", "hide");
        nextBtn.innerText = "Next Question";

        

        // Question and answer sets

        var qaSet = [
            {
                questionOption: "Which HTML tag do you put Javascript code into?",
                choiceOptions: ["<script>", "<js>", "<javascript>", "<java>"],
                correctAnswer: 1
            },
            {
                questionOption: "What does CSS stand for?",
                choiceOptions: ["cute style sheet", "concepts style sheet", "cascading style sheet", "coding style sheet"],
                correctAnswer: 3
            },
            {
                questionOption: "How do you define a variable?",
                choiceOptions: ["variable =", "var =", "vari+=", "variable++"],
                correctAnswer: 2
            },
            {
                questionOption: "An ID selector is a name preceded by which symbol?",
                choiceOptions: ["&", ".", "?", "#"],
                correctAnswer: 4
            }
        ];

        // // 

        var score = 0;
        var questionCounter = 0;
        var currentQuestion = 0;

        question.innerText = qaSet[currentQuestion].questionOption;
        button1.innerText = qaSet[currentQuestion].choiceOptions[0];
        button2.innerText = qaSet[currentQuestion].choiceOptions[1];
        button3.innerText = qaSet[currentQuestion].choiceOptions[2];
        button4.innerText = qaSet[currentQuestion].choiceOptions[3];

        //if right answer button is clicked, show correct message adn continue loop
        //else show incorrect message and continue in loop

        // QUESTION 1        

        if (true) {
            button1.addEventListener("click", function () {
                result.innerHTML = "Correct";
                score++;
                nextBtn.classList.remove("hide");
            });
        }

        if (true) {
            button2.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");
                
            });
        }

        if (true) {
            button3.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");
 
            });
        }

        if (true) {
            button4.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");

            });
        }

        if (true) {
            nextBtn.addEventListener("click", function () {
                console.log(currentQuestion);   
                currentQuestion++;
                console.log(currentQuestion);
               

                question.innerText = qaSet[currentQuestion].questionOption;
                button1.innerText = qaSet[currentQuestion].choiceOptions[0];
                button2.innerText = qaSet[currentQuestion].choiceOptions[1];
                button3.innerText = qaSet[currentQuestion].choiceOptions[2];
                button4.innerText = qaSet[currentQuestion].choiceOptions[3];
                nextBtn.classList.add("hide");
                question2; 
            });
        }

        function question2(){

        // QUESTION 2

        if (true) {
            button1.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");

            });
        }

        if (true) {
            button2.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");

                
            });
        }

        if (true) {
            button3.addEventListener("click", function () {
                result.innerHTML = "Correct";
                score++;
                nextBtn.classList.remove("hide");

            });
        }

        if (true) {
            button4.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");

            });
        }

        if (true) {
            nextBtn.addEventListener("click", function () {
                console.log(currentQuestion);   
                currentQuestion++;
                console.log(currentQuestion);
               

                question.innerText = qaSet[currentQuestion].questionOption;
                button1.innerText = qaSet[currentQuestion].choiceOptions[0];
                button2.innerText = qaSet[currentQuestion].choiceOptions[1];
                button3.innerText = qaSet[currentQuestion].choiceOptions[2];
                button4.innerText = qaSet[currentQuestion].choiceOptions[3];
                nextBtn.classList.add("hide");
                question3; 
            });
        }} function question3(){

        // QUESTION 3

        if (true) {
            button1.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");

            });
        }

        if (true) {
            button2.addEventListener("click", function () {
                result.innerHTML = "Correct";
                score++;
                nextBtn.classList.remove("hide");

                
            });
        }

        if (true) {
            button3.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");

            });
        }

        if (true) {
            button4.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                nextBtn.classList.remove("hide");

            });
        }

        if (true) {
            nextBtn.addEventListener("click", function () {
                console.log(currentQuestion);   
                currentQuestion++;
                console.log(currentQuestion);
               

                question.innerText = qaSet[currentQuestion].questionOption;
                button1.innerText = qaSet[currentQuestion].choiceOptions[0];
                button2.innerText = qaSet[currentQuestion].choiceOptions[1];
                button3.innerText = qaSet[currentQuestion].choiceOptions[2];
                button4.innerText = qaSet[currentQuestion].choiceOptions[3];
                nextBtn.classList.add("hide");
                question4;
            });
        }} function question4(){

        // QUESTION 4 

        if (true) {
            button1.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                currentQuestion++;
            });
        }

        if (true) {
            button2.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                

                
            });
        }

        if (true) {
            button3.addEventListener("click", function () {
                result.innerHTML = "Incorrect";
                

            });
        }

        if (true) {
            button4.addEventListener("click", function () {
                result.innerHTML = "Correct";
                score++;
                

            });
        }}; 

        //Show score and prompt to add name to leader board ;


    };

    // // Event listener on start button to begin displaying

    startBtn.addEventListener("click", showQuestions);

});


// creat separate function once question and answer shows. creat on click event for when any answer choice is chose it will show correct and incorrect
// and if the answer shows true or false move to next question in the for loop

// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         var button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }

// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }
