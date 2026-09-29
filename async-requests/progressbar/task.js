const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.addEventListener('progress', function(event) {
        const percent = event.loaded / event.total;
        progress.value = percent;
    });
    
    xhr.send(formData);
});