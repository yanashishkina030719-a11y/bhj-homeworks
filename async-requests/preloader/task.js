const loader = document.getElementById('loader');
const items = document.getElementById('items');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
        loader.classList.remove('loader_active');
        items.innerHTML = '';
        const valutes = Object.values(data.response.Valute);
        valutes.forEach(valute => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <div class="item__code">${valute.CharCode}</div>
                <div class="item__value">${valute.Value}</div>
                <div class="item__currency">руб.</div>
            `;

            items.appendChild(item);
        });
    });

    