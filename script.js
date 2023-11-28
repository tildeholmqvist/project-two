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
        let currentSlideElement = slides[currentSlide];
        let radios = currentSlideElement.querySelectorAll('input[type="radio"]:checked');

        if (radios.length > 0) {
            currentSlideElement.style.display = 'none';

            currentSlide++;
            if (currentSlide < slides.length) {
                slides[currentSlide].style.display = 'block';
            } else {
                showResults();
            }
        } else {
            alert('Please select your answer before moving to the next question! :)');
        }
    }

    slides.forEach(slide => {
        const radios = slide.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', showNextSlide);
        });
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
}

document.addEventListener('DOMContentLoaded', function () {
    buildQuiz();
});
