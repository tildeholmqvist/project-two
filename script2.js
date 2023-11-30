let quizQuestions = [
    {
        question: "What's the capital of France?",
        answers: {
            A: "Marseille",
            B: "Paris",
            C: "Cannes"
        },
        correctAnswer: "B"
    },
    {
        question: "What's the capital of Spain?",
        answers: {
            A: "Madrid",
            B: "Barcelona",
            C: "Seville"
        },
        correctAnswer: "A"
    },
    {
        question: "What's the capital of Germany?",
        answers: {
            A: "Hamburg",
            B: "Düsseldorf",
            C: "Berlin"
        },
        correctAnswer: "C"
    },
    {
        question: "What's the capital of Norway?",
        answers: {
            A: "Oslo",
            B: "Tromsø",
            C: "Bergen"
        },
        correctAnswer: "A"
    },
    {
        question: "What's the capital of Greece?",
        answers: {
            A: "Sparta",
            B: "Athens",
            C: "Rhodes"
        },
        correctAnswer: "B"
    },
    {
        question: "What's the capital of Portugal?",
        answers: {
            A: "Porto",
            B: "Lisbon",
            C: "Braga"
        },
        correctAnswer: "B"
    },
    {
        question: "What's the capital of Italy?",
        answers: {
            A: "Venice",
            B: "Milano",
            C: "Rome"
        },
        correctAnswer: "C"
    },
    {
        question: "What's the capital of Czech Republic?",
        answers: {
            A: "Brno",
            B: "Prague",
            C: "Liberec"
        },
        correctAnswer: "B"
    },
    {
        question: "What's the capital of Sweden?",
        answers: {
            A: "Gothenburg",
            B: "Malmö",
            C: "Stockholm"
        },
        correctAnswer: "C"
    },
    {
        question: "What's the capital of Austria?",
        answers: {
            A: "Vienna",
            B: "Salzburg",
            C: "Innsbruck"
        },
        correctAnswer: "A"
    }

];

let submitButton;
let currentQuestionIndex = 0;
let currentQuestion = quizQuestions[currentQuestionIndex];
let score = 0;


function displayQuestion(currentQuestion) {
    document.getElementById('question-text').innerHTML = currentQuestion.question;
    document.getElementById('option1').innerHTML = currentQuestion.answers.A;
    document.getElementById('option2').innerHTML = currentQuestion.answers.B;
    document.getElementById('option3').innerHTML = currentQuestion.answers.C;
}

function getNextQuestion() {
    if (quizQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex = currentQuestionIndex + 1;
        return quizQuestions[currentQuestionIndex];
    }
    return false;
}


function showResults() {
    let slides = document.querySelectorAll('.slide');
    let numQuestions = quizQuestions.length;
    let numCorrect = 0;
    let incorrectAnswers = '';

    let answeredQuestions = 0;

    slides.forEach((slide, questionNumber) => {
        if (questionNumber < numQuestions) {
            let selector = `input[name=question${questionNumber}]:checked`;
            let userAnswer = slide.querySelector(selector);

            if (userAnswer !== null) {
                answeredQuestions++;
                userAnswer = userAnswer.value.toUpperCase();
                let correctAnswer = quizQuestions[questionNumber].correctAnswer.toUpperCase();
                if (userAnswer === correctAnswer) {
                    numCorrect++;
                }
            }
        }
    });

    const scoreboard = document.getElementById('score');
    scoreboard.textContent = numCorrect;
}

function answerQuestion(event) {
    const clickedButton = event.target;
    const answer = clickedButton.getAttribute("data-option");
    if (answer === currentQuestion.correctAnswer) {
        score = score + 1;
        console.info('That was right!');
        event.target.classList.add('green');
    } else {
        console.info('That was the wrong answer..');
        event.target.classList.add('red');
    }
    const nextQuestion = getNextQuestion();
    if (nextQuestion === false) {
        alert('Good job finishing the quiz! Do you wanna try again, click on the restart button :)');
    } else {
        currentQuestion = nextQuestion;
        setTimeout(() => {
            const optionButtons = document.querySelectorAll('button.option');
            optionButtons.forEach((option) => {
                option.classList.remove('green');
                option.classList.remove('red');
            });
            displayQuestion(currentQuestion);
        }, 2000);
    }
    document.getElementById('score').innerHTML = score;

}

document.addEventListener('DOMContentLoaded', function () {
    const optionButtons = document.querySelectorAll('button.option');
    optionButtons.forEach((option) => {
        option.addEventListener('click', answerQuestion);
    });
    displayQuestion(currentQuestion);
});