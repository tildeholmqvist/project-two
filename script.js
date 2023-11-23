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
            <div class="slide" style="display: none;">
                <div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>
            </div>`;
    });

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
        submitButton.style.display = 'none';
    } else {
        nextButton.style.display = 'none';
        previousButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    let submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', showResults);

    function showResults() {
        const answerContainers = document.querySelectorAll('.answers');
        let numCorrect = 0;
        let allAnswered = true;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainers[questionNumber].querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
            } else {
                allAnswered = false;
            }
        });

        if (allAnswered) {
            if (numCorrect === quizQuestions.length) {
                alert(`Congratulations! You got all answers correct!`);
            } else {
                alert(`You answered ${numCorrect} out of ${quizQuestions.length} correctly.`);
            }
            submitButton.style.display = 'none';
        } else {
            alert(`Please answer all questions before submitting.`);
        }
    }
}

buildQuiz();