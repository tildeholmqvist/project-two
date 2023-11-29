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

/**
 * This code is from https://www.sitepoint.com/simple-javascript-quiz/
 * I took help from that site to get the result that I wished for, since the 
 * quiz wasn't working how I wanted it too.. 
 * I wished for the questions to not be on top of eachother, but in a loop, this was the most convinent way I found
 */

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
            <div class="slide" style="display: none;">
                <div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>
            </div>`;
    });

    output += `
        <div class="slide" style="display: none;">
            <div class="question">Good Job! <br> Submit and see how you did!</div>
        </div>`;


    quizContainer.innerHTML = output;

    // this code is made with help from https://www.w3schools.com/howto/howto_js_slideshow.asp 
    //and https://www.sitepoint.com/simple-javascript-quiz/

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    showSlide(currentSlide);

    function showSlide(n) {
        slides.forEach((slide, index) => {
            if (index === n) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function showNextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    function showPreviousSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    let previousButton = document.getElementById('previous');
    let nextButton = document.getElementById('next');

    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    if (slides.length > 1) {
        nextButton.style.display = 'inline-block';
        previousButton.style.display = 'inline-block';

    } else {
        nextButton.style.display = 'none';
        previousButton.style.display = 'none';

    }
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', updateScore);
    });
    function updateScore() {
        let slides = document.querySelectorAll('.slide');
        let numCorrect = 0;

        slides.forEach((slide, questionNumber) => {
            let selector = `input[name=question${questionNumber}]:checked`;
            let userAnswer = slide.querySelector(selector);

            if (userAnswer !== null) {
                userAnswer = userAnswer.value.toUpperCase();
                let correctAnswer = quizQuestions[questionNumber].correctAnswer.toUpperCase();
                if (userAnswer === correctAnswer) {
                    numCorrect++;
                }
            }
        });

        const scoreboard = document.getElementById('score');
        scoreboard.textContent = numCorrect;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    buildQuiz();
});

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

//buildQuiz();

document.addEventListener('DOMContentLoaded', function () {

    //let submitButton = document.getElementById('submit');
    //console.log(submitButton);
    //submitButton.addEventListener('click', showResults);
    displayQuestion(currentQuestion);
});
