document.addEventListener("DOMContentLoaded", function(){

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
    var secondsLeft = 40;
    

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

    function showQuestions(question) {

    // Define elements to insert questions, choices, and answer message

    var questionScreen = document.querySelector(".questionScreen")
    var questionDiv = document.createElement("div");
    var question = document.createElement("h2");
    var buttonDiv = document.createElement("div");
    var button1 = document.createElement("button"); 
    var button2 = document.createElement("button"); 
    var button3 = document.createElement("button"); 
    var button4 = document.createElement("button"); 
    var nextBtn = document.createElement("button"); 

    questionScreen.appendChild(questionDiv);
    questionDiv.appendChild(question);
    questionScreen.appendChild(buttonDiv);
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button3);
    buttonDiv.appendChild(button4);

    button1.classList.add("btn", "btn-info", "m-3");
    button2.classList.add("btn", "btn-info", "m-3");
    button3.classList.add("btn", "btn-info", "m-3");
    button4.classList.add("btn", "btn-info", "m-3");

    question.innerText = question.question;
    button1.innerText = qaSet[0];
    button2.innerText = qaSet[0];
    button3.innerText = qaSet[0];
    button4.innerText = qaSet[0];


      // Question and answer sets

      var qaSet = [
        {
            question: "first question",
            choices: ["first choice", "second choice", "third choice", "fourth choice"],
            correctAnswer: 1
        // },
        // {
        //     question: "second question",
        //     choices: ["first choice", "second choice", "third choice", "fourth choice"],
        //     correctAnswer: 1
        // },
        // {
        //     question: "third question",
        //     choices: ["first choice", "second choice", "third choice", "fourth choice"],
        //     correctAnswer: 1
        // },
        // {
        //     question: "fourth question",
        //     choices: ["first choice", "second choice", "third choice", "fourth choice"],
        //     correctAnswer: 1
        }
    ];
    
    var currentQuestion = ; 
    var score = ; 
    var questionCounter = ; 
    
    




    // for loop to cycle through the questions 

    
    // for (i = 0; i<qaSet.length; i++) {
        
        question.innerText = question.question;
        // button1.innerText = qaSet.choices; 
        // button2.innerText = qaSet.choices; 
        // button3.innerText = qaSet.choices; 
        // button4.innerText = qaSet.choices; 
    // }


    };

    // Event listener on start button to begin displaying

    startBtn.addEventListener("click", showQuestions);

    



});
