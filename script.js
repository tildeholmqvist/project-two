//js code for the button on the frontpage. when clicked it brings you to the quiz page
window.onload = function () {
    const startButton = document.getElementById("start-quiz");
    startButton.addEventListener('click', function () {
        window.location.href = 'quiz.html';
    });
};