let quizQuestions = [
    {
        numb: 1,
        question: "What's the capital of France?",
        answers: {
            A: "Marseille",
            B: "Paris",
            C: "Cannes"
        },
        correctAnswer: "B"
    },
    {
        numb: 2,
        question: "What's the capital of Spain?",
        answers: {
            A: "Madrid",
            B: "Barcelona",
            C: "Seville"
        },
        correctAnswer: "A"
    },
    {
        numb: 3,
        question: "What's the capital of Germany?",
        answers: {
            A: "Hamburg",
            B: "Düsseldorf",
            C: "Berlin"
        },
        correctAnswer: "C"
    },
    {
        numb: 4,
        question: "What's the capital of Norway?",
        answers: {
            A: "Oslo",
            B: "Tromsø",
            C: "Bergen"
        },
        correctAnswer: "A"
    },
    {
        numb: 5,
        question: "What's the capital of Greece?",
        answers: {
            A: "Sparta",
            B: "Athens",
            C: "Rhodes"
        },
        correctAnswer: "B"
    },
    {
        numb: 6,
        question: "What's the capital of Portugal?",
        answers: {
            A: "Porto",
            B: "Lisbon",
            C: "Braga"
        },
        correctAnswer: "B"
    },
    {
        numb: 7,
        question: "What's the capital of Italy?",
        answers: {
            A: "Venice",
            B: "Milano",
            C: "Rome"
        },
        correctAnswer: "C"
    },
    {
        numb: 8,
        question: "What's the capital of Czech Republic?",
        answers: {
            A: "Brno",
            B: "Prague",
            C: "Liberec"
        },
        correctAnswer: "B"
    },
    {
        numb: 9,
        question: "What's the capital of Sweden?",
        answers: {
            A: "Gothenburg",
            B: "Malmö",
            C: "Stockholm"
        },
        correctAnswer: "C"
    },
    {
        numb: 10,
        question: "What's the capital of Austria?",
        answers: {
            A: "Vienna",
            B: "Salzburg",
            C: "Innsbruck"
        },
        correctAnswer: "A"
    }
];

/**
 * This code is from https://www.sitepoint.com/simple-javascript-quiz/
 * I took help from that site to get the result that I wished for, since the 
 * quiz wasn't working how I wanted it too.. 
 * I wished for the questions to not be on top of eachother, but in a loop, this was the most convinent way I found
 */
let currentQuestion = 0;

function buildQuiz() {
    showQuestion(currentQuestion);
}
function showQuestion(questionNumber) {
    const quizContainer = document.getElementById('quiz');
    const currentQ = quizQuestions[questionNumber];
    let output = '';

    output += `
        <div class="question-slide">
            <div class="question">${currentQ.question}</div>
            <button onclick="checkAnswer('${currentQ.answers.A}')">${currentQ.answers.A}</button>
            <button onclick="checkAnswer('${currentQ.answers.B}')">${currentQ.answers.B}</button>
            <button onclick="checkAnswer('${currentQ.answers.C}')">${currentQ.answers.C}</button>
        </div>`;

    quizContainer.innerHTML = output;
}

function checkAnswer(selectedAnswer) {
    let correctAnswer = quizQuestions[currentQuestion].correctAnswer.toUpperCase();
    let isCorrect = selectedAnswer.toUpperCase() === correctAnswer;

    if (isCorrect) {
        numCorrect++;
    } else {

    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        showQuestion(currentQuestion);
    } else {
        showResults();
    }
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
                } else {
                    incorrectAnswers += `Question ${questionNumber + 1}: The correct answer is ${quizQuestions[questionNumber].answers[quizQuestions[questionNumber].correctAnswer]}\n`;
                }
            }
        }
    });

    if (answeredQuestions < numQuestions) {
        alert(`You have answered ${answeredQuestions} out of ${numQuestions} questions. Please provide all of your answers before submitting! :)`);
        return;
    }

    if (incorrectAnswers !== '') {
        alert(`You need to practice some more...
         ${numCorrect} out of ${quizQuestions.length} correct!\n\nIncorrect Answers:\n${incorrectAnswers}`);
    } else {
        alert(`Wow! Good Job! You really know your capital cities!
         You got all ${quizQuestions.length} questions right! :D`);
    }

    const scoreboard = document.getElementById('score');
    scoreboard.textContent = numCorrect;
}

buildQuiz();
