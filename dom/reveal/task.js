const revealElements = document.querySelectorAll('.reveal');
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function checkVisibility() {
    revealElements.forEach(element => {
        if (isElementVisible(element)) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

