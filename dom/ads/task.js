document.querySelectorAll('.rotator').forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let index = 0;

    cases[index].classList.add('rotator__case_active');

    setInterval(() => {
        cases[index].classList.remove('rotator__case_active');
        index = (index + 1) % cases.length;
        cases[index].classList.add('rotator__case_active');
    }, 1000);
});