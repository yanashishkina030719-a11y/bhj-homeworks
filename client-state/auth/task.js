const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

const savedUserId = localStorage.getItem('user_id');
if (savedUserId) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = savedUserId;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: FormData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('user_id', data.user_id);
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.textContent = data.user_id;
        } else {
            alert('Неверный пароль');
        }
    });
});
