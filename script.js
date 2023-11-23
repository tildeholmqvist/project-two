let quizQuestions = [
    {
        question: "What's the capital of France?",
        answers: {
            a: "Marseille",
            b: "Paris",
            c: "Cannes"
        },
        correctAnswer: "b"
    },
    {
        question: "What's the capital of Spain?",
        answers: {
            a: "Madrid",
            b: "Barcelona",
            c: "Seville"
        },
        correctAnswer: "a"
    },
    {
        question: "What's the capital of Germany?",
        answers: {
            a: "Hamburg",
            b: "Düsseldorf",
            c: "Berlin"
        },
        correctAnswer: "c"
    },
    {
        question: "What's the capital of Norway?",
        answers: {
            a: "Oslo",
            b: "Tromsø",
            c: "Bergen"
        },
        correctAnswer: "a"
    },
    {
        question: "What's the capital of Greece?",
        answers: {
            a: "Sparta",
            b: "Athens",
            c: "Rhodes"
        },
        correctAnswer: "b"
    },
    {
        question: "What's the capital of Portugal?",
        answers: {
            a: "Porto",
            b: "Lisbon",
            c: "Braga"
        },
        correctAnswer: "b"
    },
    {
        question: "What's the capital of Italy?",
        answers: {
            a: "Venice",
            b: "Milano",
            c: "Rome"
        },
        correctAnswer: "c"
    },
    {
        question: "What's the capital of Czech Republic?",
        answers: {
            a: "Brno",
            b: "Prague",
            c: "Liberec"
        },
        correctAnswer: "b"
    },
    {
        question: "What's the capital of Sweden?",
        answers: {
            a: "Gothenburg",
            b: "Malmö",
            c: "Stockholm"
        },
        correctAnswer: "c"
    },
    {
        question: "What's the capital of Austria?",
        answers: {
            a: "Vienna",
            b: "Salzburg",
            c: "Innsbruck"
        },
        correctAnswer: "a"
    },
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    let output = '';

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        let answers = [];
        for (let letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output += `
            <div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`;
    });

    quizContainer.innerHTML = output;
}

function showResults() {
    const quizContainer = document.getElementById('quiz');
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainers[questionNumber].querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            alert(`Good Job! You got it right!`);
        } else {
            answerContainers[questionNumber].alert(`That is not the right answer, try again!`);
        }
    });

    const resultsContainer = document.getElementById('result');
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', showResults);

buildQuiz();