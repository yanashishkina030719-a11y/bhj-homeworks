const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
    .then(response => response.json())
    .then(data => {
        pollTitle.textContent = data.data.title;
        pollAnswers.innerHTML = '';

        data.data.answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'poll_answer';
            button.textContent = answer;
            button.addEventListener('click', function() {
                alert('Спасибо, ваш голос засчитан!');
            })
            pollAnswers.appendChild(button);
        })
    });
