const tooltipElements = document.querySelectorAll('.has-tootip');
tooltipElements.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        const tooltipText = this.getAttribute('title');

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.textContent = tooltipText;

        document.body.appendChild(tooltip);

        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = rect.bottom + 'px';
    });
});