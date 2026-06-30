
const timerElement = document.getElementById('timer');
let seconds = parseInt(timerElement.textContent);
const intervalId = setInterval(() => {
    seconds--;
    timerElement.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
    }
}, 1000);