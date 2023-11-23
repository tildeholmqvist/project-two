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

/**
 * This code is from https://www.sitepoint.com/simple-javascript-quiz/
 * I took help from that site to get the result that I wished for, since the 
 * quiz wasn't working how I wanted it too.. 
 * I wished for the questions to not be on top of eachother, but in a loop, this was the most convinent way I found
 */
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

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;

        let previousButton = document.getElementById('previous');
        let nextButton = document.getElementById('next');
        let submitButton = document.getElementById('submit');

        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    let previousButton = document.getElementById('previous');
    let nextButton = document.getElementById('next');

    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    showSlide(currentSlide);

    submitButton.addEventListener('click', showResults);

    function showResults() {
        const answerContainers = document.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainers[questionNumber].querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                alert(`Good Job! You got it right!`);
            } else {
                alert(`That is not the right answer, try again!`);
            }
        });

        const resultsContainer = document.getElementById('result');
        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }
}
buildQuiz();