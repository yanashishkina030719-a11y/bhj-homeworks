const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    dead.textContent = deadCount;
    lost.textContent = lostCount;
}

for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById(`hole${i}`);
    
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
            if (deadCount === 10) {
                alert('Вы победили!');
                resetGame();
            }
        } else {
            lostCount++;
            lost.textContent = lostCount;
            if (lostCount === 5) {
                alert('Вы проиграли!');
                resetGame();
            }
        }
    };
}