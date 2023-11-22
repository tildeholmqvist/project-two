/**
    * js code for the questions in the quiz. 
    * instead of writing the questions on the html file, i did it in the js file, 
    * so when the user wants to answer the next question, it changes without having to enter another page
    */

const quizQuestions = [
    {
        question: 'What is the capital of France?',
        image: 'paris.jpg',
        correctAnswer: ['Paris', 'PARIS', 'paris'],
    },
    {
        question: 'What is the capital of Germany?',
        image: 'berlin.jpg',
        correctAnswer: ['Berlin', 'BERLIN', 'berlin'],
    },
    {
        question: 'What is the capital of Denmark?',
        image: 'copenhagen.jpg',
        correctAnswer: ['Copenhagen', 'COPENHAGEN', 'copenhagen'],
    },
    {
        question: 'What is the capital of Italy?',
        image: 'rome.jpg',
        correctAnswer: ['Rome', 'ROME', 'rome'],
    },
    {
        question: 'What is the capital of Sweden?',
        image: 'stockholm.jpg',
        correctAnswer: ['Stockholm', 'STOCKHOLM', 'stockholm'],
    },
    {
        question: 'What is the capital of Greece?',
        image: 'athens.jpg',
        correctAnswer: ['Athens', 'ATHENS', 'athens'],
    },
];

let currentQuestionIndex = 0;

function displayQuestion() {
    console.log("Current Question:", quizQuestions[currentQuestionIndex]);
    let currentQuestion = quizQuestions[currentQuestionIndex];
    console.log('Question Element:', document.getElementById('quiz-question'));
    console.log('Image Element:', document.getElementById('question-image'));
    document.getElementById('quiz-question').textContent = currentQuestion.question;
    document.getElementById('question-image').src = currentQuestion.image;
}

function checkAnswer() {
    let userAnswer = document.getElementById("user-answer").value.toLowerCase();
    let correctAnswers = quizQuestions[currentQuestionIndex].correctAnswer;

    if (correctAnswers.includes(userAnswer)) {
        alert(`You got it right! Good Job! :) `);

    } else {
        let correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer[0];
        alert(`You answered ${userAnswer}. The correct answer was ${correctAnswer}!`);
    }
};

//js code for the button on the frontpage. when clicked it brings you to the quiz page
window.onload = function () {
    displayQuestion();
    let submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', checkAnswer);
};
