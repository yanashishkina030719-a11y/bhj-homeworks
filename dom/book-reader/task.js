const fontSizes = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizes.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();

        fontSizes.forEach(b => b.classList.remove('font-size_active'));
        this.classList.add('font-size_active');

        book.classList.remove('book_fs-big', 'book_fs-small');

        if (this.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (this.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});