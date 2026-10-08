const modal = document.getElementById('subscribe-modal');
const closeButton = modal.querySelector('.modal__close');

if (!document.cookie.includes('modal_closed=true')) {
    modal.classList.add('modal_active');
}

closeButton.addEventListener('click', function() {
    modal.classList.remove('modal_active');
    document.cookie = 'modal_closed=true; max-age=3600';
});